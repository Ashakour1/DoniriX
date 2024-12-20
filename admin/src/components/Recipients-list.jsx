import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import axios from "axios";
import RecipientStatus from "@/components/RecipientStatus";
import { useUser } from "@/hooks/useUser";
import Spinner from "./Spinner";
import { URL } from "../services/Api";

const RecipientsList = () => {
  const { user } = useUser();
  // const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.pathname;

  const fetchUserData = async () => {
    // Fetch user data from wherever it's stored (e.g., local storage, session storage, etc.)
    const loginUser = localStorage.getItem("userData");
    // console.log(JSON.parse(loginUser));
    if (loginUser) {
      setUserData(JSON.parse(loginUser));
    }
  };

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user]);

  // delete recipient
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this recipient?")) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.delete(
        `${URL}/api/recipients/${id}`,
        config
      );
      getRecipients();
      toast.success(data.message);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // get all recipients
  const getRecipients = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const response = await axios.get(`${URL}/api/recipients`, config);
      console.log(response);
      setRecipients(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      getRecipients();
    }
  }, [userData]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="w-full overflow-auto">
      <div className="grid gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight text-Accent">
              Recipients
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              List of recipients available.
            </p>
          </div>

          <div className="flex gap-4 md:ml-auto">
            <div className="flex items-center gap-2">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="w-[200px] p-2 border-1 border-black rounded sm:w-[300px] cursor-pointer"
                id="search"
                placeholder="Search"
                type="search"
              />
            </div>
            <button
              onClick={() => navigate("/register")}
              className="text-white bg-Accent px-2 py-2 rounded"
            >
              Add Recipient
            </button>
          </div>
        </div>

        {recipients?.length === 0 ? (
          <p className="items-center text-center">No Recipients Available</p>
        ) : (
          <div className="flex flex-col gap-4 min-h-[400px]">
            <div className="overflow-auto rounded-md">
              <table className="min-w-full">
                <thead>
                  <tr className="border-y text-sm font-semibold bg-Accent">
                    <th className="px-2 py-2 text-left">Name</th>
                    <th className="px-2 py-2 text-left">Email</th>
                    <th className="px-2 py-2 text-left">Phone</th>
                    <th className="px-2 py-2 text-left">status</th>
                    <th className="px-2 py-2 text-left">BloodType</th>
                    <th className="px-2 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {recipients?.filter((item) => {
                      if (search === "") {
                        return true; // Return all items if search is empty
                      } else {
                        const searchLower = search.toLowerCase();
                        return (
                          (item.name &&
                            item.name.toLowerCase().includes(searchLower)) || // Search by name
                          (item.phone &&
                            item.phone.toLowerCase().includes(searchLower))
                        );
                      }
                    })
                    .map((recipient) => (
                      <tr className="text-sm" key={recipient.id}>
                        <td className="px-2 py-2">{recipient.name}</td>
                        <td className="px-2 py-2">{recipient.email}</td>
                        <td className="px-2 py-2">{recipient.phone}</td>
                        <td className="px-2 py-2">
                          <RecipientStatus recipient={recipient} />
                        </td>
                        <td className="px-2 py-2">{recipient.bloodType}</td>
                        <td className="px-2 py-2">
                          <button
                            onClick={() =>
                              navigate(`/recipient/detail/${recipient.id}`)
                            }
                            className="text-white bg-Accent px-2 py-1 rounded mx-2"
                          >
                            View All
                          </button>

                          <button
                            onClick={() =>
                              navigate(`/recipients/update/${recipient.id}`)
                            }
                            className="text-white bg-green-400 px-2 py-1.5 rounded"
                          >
                            <BiEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(recipient.id)}
                            className="text-white bg-red-900 px-2 py-1.5 rounded mx-2"
                          >
                            <MdOutlineDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipientsList;
