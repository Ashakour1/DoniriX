import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import axios from "axios";
import Layout from "@/components/Layout/Layout";
import RecipientStatus from "@/components/RecipientStatus";
import { useUser } from "@/hooks/useUser";

const RecipientLists = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  // const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [recipients, setRecipients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.pathname;

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user]);

  // delete recipient
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this recipient?")) return;
    try {
      const { data } = await axios.delete(`/api/recipients/${id}`);
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
      const response = await axios.get("http://localhost:22000/api/recipients");
      console.log(response);
      setRecipients(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipients();
  }, []);

  return (
    <Layout>
      <div className="w-full overflow-auto">
        <div className="grid gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Recipients</h1>
              <p className="text-gray-500 dark:text-gray-400">
                List of recipients available.
              </p>
            </div>

            <div className="flex gap-4 md:ml-auto">
              <div className="flex items-center gap-2">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-[200px] p-2 border-1 border-black rounded sm:w-[300px]"
                  id="search"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <button
                onClick={() => navigate("/recipients/register")}
                className="text-white bg-blue-500 px-2 py-2 rounded"
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
                    <tr className="border-y text-sm font-semibold bg-slate-400">
                      <th className="px-2 py-2 text-left">Name</th>
                      <th className="px-2 py-2 text-left">Email</th>
                      <th className="px-2 py-2 text-left">Phone</th>
                      <th className="px-2 py-2 text-left">status</th>
                      <th className="px-2 py-2 text-left">BloodType</th>
                      <th className="px-2 py-2 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {recipients
                      ?.filter((item) => {
                        if (search === "") {
                          return item;
                        } else {
                          if (
                            item.bloodType &&
                            item.fullname
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return item;
                          }
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
                            <Tooltip showArrow={true} content="View All Info">
                              <button
                                onClick={() =>
                                  navigate(`/recipient/detail/${recipient.id}`)
                                }
                                className="text-white bg-blue-400 px-2 py-1 rounded mx-2"
                              >
                                View All
                              </button>
                            </Tooltip>
                            <Tooltip showArrow={true} content="Edit Recipient">
                              <button
                                onClick={() =>
                                  navigate(`/recipient/update/${recipient.id}`)
                                }
                                className="text-white bg-green-400 px-2 py-1.5 rounded"
                              >
                                <BiEdit />
                              </button>
                            </Tooltip>
                            <Tooltip
                              showArrow={true}
                              content="Delete Recipient"
                            >
                              <button
                                onClick={() => handleDelete(recipient.id)}
                                className="text-white bg-red-900 px-2 py-1.5 rounded mx-2"
                              >
                                <MdOutlineDelete />
                              </button>
                            </Tooltip>
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
    </Layout>
  );
};

export default RecipientLists;
