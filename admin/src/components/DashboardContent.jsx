import React, { useEffect, useState } from "react";
import { Droplet, Users, Heart } from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import RecentDonars from "./RecentDonars-Table";
import Spinner from "./Spinner";

export default function DashboardContent() {
  const { user } = useUser();
  const [donars, setDonars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const redirectTo = location.pathname;
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user, redirectTo]);

  const fetchUserData = () => {
    const loginUser = localStorage.getItem("userData");
    if (loginUser) {
      setUserData(JSON.parse(loginUser));
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const getDonars = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const response = await axios.get(
        "http://localhost:22000/api/donors",
        config
      );
      setDonars(response.data.data.donars || []); // Default to empty array if undefined
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setLoading(false); // Set loading to false after the attempt
    }
  };

  useEffect(() => {
    if (userData) {
      getDonars();
    }
  }, [userData]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-red-500">{error.message || "An error occurred"}</div>
    );
  }

  const donatedDonors = donars.filter((donor) => donor.status === "finished");

  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="!bg-transparent !text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Donations
            </CardTitle>
            <Droplet className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donatedDonors.length}</div>
          </CardContent>
        </Card>
        <Card className="!bg-transparent !text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Available Blood Units
            </CardTitle>
            <Heart className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">862</div>
          </CardContent>
        </Card>
        <Card className="!bg-transparent !text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Registered Donors
            </CardTitle>
            <Users className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donars.length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Donors Table */}
      <RecentDonars donors={donars} />
    </div>
  );
}
