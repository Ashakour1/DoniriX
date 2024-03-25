import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useUser } from "../hooks/useUser";

const DonarList = () => {
  const { user } = useUser();
  const [donars, setDonars] = useState();
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

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
  return (
    <div className="ml-72 mr-5 text-black pt-20">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">Donar List</h1>
        <button className="px-2 py-2 bg-green-400 rounded text-medium font-semibold">Add donar</button>
      </div>
      <div className="mt-2 border-1 rounded">
        <table className="table-auto  text-black">
          <thead>
            <tr className="border-b  bg-gray-500">
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
          <tbody>
            {donars?.map((donar) => (
              <tr className="border-b">
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
  );
};

export default DonarList;
