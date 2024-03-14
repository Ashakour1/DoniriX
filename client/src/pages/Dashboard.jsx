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

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user, navigate]);

  useEffect(() => {
    const getDonars = async () => {
      try {
        const response = await publicRequest.get("/donar");
        setDonars(response.data.results.data.donars);
      } catch (err) {
        console.log(err);
      }
    };
    getDonars();
  });

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
