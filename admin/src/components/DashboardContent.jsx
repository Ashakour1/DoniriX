// components/DashboardContent.js
import React, { useEffect, useState } from "react";
import {
  Droplet,
  Users,
  Calendar,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Heart,
} from "lucide-react";
import { useUser } from "@/hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import RecentDonars from "./RecentDonars-Table";

export default function DashboardContent() {
  const { user } = useUser();
  const [donars, setDonars] = useState([]); // Initialize with an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Handle potential errors
  const location = useLocation();
  const redirectTo = location.pathname;
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user]);
  // Fetch donors data from the API
  useEffect(() => {
    const getDonars = async () => {
      try {
        const response = await axios.get("http://localhost:22000/api/donars");

        console.log(response);
        setDonars(response.data.data.donars); // Default to empty array
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    getDonars();
  }, []);

  const donatedDonors = donars.filter((donor) => donor.status === "finished");
  const pendingDonors = donars.filter((donor) => donor.status === "pending");

  if (error) {
    return <div className="text-red-500">{error.message}</div>; // Display error if there's any
  }

  console.log(donars);
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  mb-8">
        <Card className="!bg-transparent !text-black">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Donations
            </CardTitle>
            <Droplet className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donatedDonors.length}</div>
            {/* <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p> */}
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
            {/* <p className="text-xs text-muted-foreground">
              +15.3% from last month
            </p> */}
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
            {/* <p className="text-xs text-muted-foreground">
              +7.5% from last month
            </p> */}
          </CardContent>
        </Card>
      </div>

      {/* Blood Inventory Table */}
      {/* <div className="card !bg-transparent  rounded-lg mb-8">
        <div className="p-4">
          <h2 className="font-bold mb-2">Blood Inventory Status</h2>
       
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">Blood Type</th>
                <th className="border px-4 py-2">Available Units</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">A+</td>
                <td className="border px-4 py-2">50</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">O-</td>
                <td className="border px-4 py-2">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Recent Donors Table */}
      <RecentDonars />
    </div>
  );
}
