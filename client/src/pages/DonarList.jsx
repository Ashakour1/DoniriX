import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useUser } from "../hooks/useUser";
import { Badge } from "@nextui-org/react";
import { LuSliders } from "react-icons/lu";
import ModalComponent from "../components/Modal";

const DonarList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  const { user } = useUser();
  const [donars, setDonars] = useState();
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const redirectTo = location.pathname;

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
    return <h1 className="ml-64 text-center pt-20">Loading...</h1>;
  }
  return (
    <div className="w-full overflow-auto">
      <div className="container pl-72 pt-20 px-10 grid gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Donors & Supporters
            </h1>
            <p className="text-gray-500 dark:text-gray-400">List of donors.</p>
          </div>

          <div className="flex gap-4 md:ml-auto">
            <div className="flex items-center gap-2">
              <input
                className="w-[200px] p-2 border-1 border-black rounded sm:w-[300px]"
                id="search"
                placeholder="Search"
                type="search"
              />
            </div>
            <button
              onClick={handleModalToggle}
              className="text-white bg-green-400 px-2 py-2 rounded"
            >
              Add Donar
            </button>
          </div>
        </div>
        {donars.length === 0 ? (
          <p className=" items-center text-center">No Donars Available</p>
        ) : (
          <div className="flex flex-col gap-4 min-h-[400px]">
            <div className="overflow-auto rounded-md">
              <table className="min-w-full">
                <thead>
                  <tr className="border-y text-sm font-semibold bg-slate-400 ">
                    <th className="px-2 py-2 text-left">Name</th>
                    <th className="px-2 py-2 text-left">Email</th>
                    <th className="px-2 py-2 text-left">Phone</th>
                    <th className="px-2 py-2 text-left">Age</th>
                    <th className="px-2 py-2 text-left">Weight</th>
                    <th className="px-2 py-2 text-left">Address</th>
                    <th className="px-2 py-2 text-left">MotherNumber</th>
                    <th className="px-2 py-2 text-left">BloodType</th>
                    <th className="px-2 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {donars?.map((donar) => (
                    <tr className="text-sm" key={donar.id}>
                      <td className="px-4 py-2">{donar.fullname}</td>
                      <td className="px-4 py-2">{donar.email}</td>
                      <td className="px-4 py-2">{donar.phone}</td>
                      <td className="px-4 py-2">{donar.age}</td>
                      <td className="px-4 py-2">{donar.weight}</td>
                      <td className="px-4 py-2">{donar.address}</td>
                      <td className="px-4 py-2">{donar.motherNumber}</td>
                      <td className="px-4 py-2">{donar.bloodType}</td>
                      <td className="px-4 py-2">
                        {donar.status === "finished" ? (
                          <span className="text-white bg-green-400 py-1 px-2 rounded">
                            {donar.status}
                          </span>
                        ) : (
                          <span className="px-2 py-1 rounded text-white bg-red-400">
                            {donar.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <ModalComponent isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} />
      x
    </div>
  );
};

export default DonarList;
