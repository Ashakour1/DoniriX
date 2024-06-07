import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import RecentDonars from "../components/RecentDonars-Table";
import Loader from "../components/Spinner";
const Dashboard = () => {
  const { user } = useUser();
  const [donars, setDonars] = useState();
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    getDonars();
  }, [userData]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="bg-gray-100 min-h-screen pt-10">
        <div className="flex">
          <div className="flex-1 p-8 ml-64 ">
            <div className="grid grid-cols-3 gap-6">
              <div className=" bg-blue-500 p-6 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {
                    donars?.filter((donar) => donar.status === "finished")
                      .length
                  }
                </h3>
                <p className="text-white">Donations</p>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-white  mb-2">
                  {donars?.filter((donar) => donar.status === "pending").length}
                </h3>
                <p className="text-white ">Pending</p>
              </div>
              <div className="bg-blue-500 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {donars?.length}
                </h3>
                <p className="text-white ">Total</p>
              </div>
            </div>
            {donars?.length === 0 ? (
              <div className="bg-blue-500 p-6 rounded-lg shadow mt-8">
                <h2 className="text-2xl font-bold text-white  mb-4">
                  No Donations Yet
                </h2>
                <p className="text-white">
                  You have not made any donations yet.
                </p>
              </div>
            ) : (
              <div className=" bg-blue-500 p-6 rounded-lg shadow mt-8">
                <h2 className="text-2xl font-bold text-white  mb-4">
                  Recent Donors
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-white ">
                          Name
                        </th>
                        <th className="px-4 py-2 text-left text-white">
                          Blood Type
                        </th>
                        <th className="px-4 py-2 text-left text-white">
                          Status
                        </th>
                        <th className="px-4 py-2 text-left text-white">
                          Donation Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {donars?.slice(0, 5).map((donar) => (
                        <RecentDonars donar={donar} key={donar.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
