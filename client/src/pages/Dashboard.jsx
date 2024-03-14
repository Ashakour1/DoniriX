import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";

const Dashboard = () => {
  const { user } = useUser();
  const [donars, setDonars] = useState();

  // console.log(user);
  const location = useLocation();

  const redirectTo = location.pathname;
  // console.log(redirectTo);

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user, navigate]);

  useEffect(() => {
    // Function to fetch user data and set it in state
    const fetchUserData = async () => {
      // Fetch user data from wherever it's stored (e.g., local storage, session storage, etc.)
      const loginUser = localStorage.getItem("userData");
      // console.log(JSON.parse(loginUser));
      if (loginUser) {
        setUserData(JSON.parse(loginUser));
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const getDonars = async () => {
      try {
        if (userData && userData.token) {
          const config = {
            headers: {
              Authorization: `Bearer ${userData?.token}`, // Assuming your backend expects the token in the 'Authorization' header
            },
          };

          const response = await publicRequest.get("/donar", config);
          console.log(response);
          setDonars(response.data.results.data.donars);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getDonars();
  }, [userData]);

  return (
    <main className="max-w-[1200px] mx-auto px-4">
      <div>
        <h1>
          Welcome {user?.adminExists.name} to the dashboard. You are now logged
          in.
        </h1>
      </div>
    </main>
  );
};

export default Dashboard;
