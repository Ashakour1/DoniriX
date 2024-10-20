import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Droplet,
  Hospital,
  ClipboardList,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useUser } from "@/hooks/useUser";

export const RecipientDetail = () => {
  const [recipientDetail, setRecipientDetail] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const { user } = useUser();

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

  console.log(id);

  const fetchRecipientDetails = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(
        `http://localhost:22000/api/recipients/${id}`,
        config // API endpoint
      );
      const recipientData = data;
      setRecipientDetail(recipientData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      fetchRecipientDetails();
    }
  }, [id, userData]);

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-500";

    switch (status.toLowerCase()) {
      case "received":
        return "bg-green-500";
      case "pending":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="max-w-[1040px] mx-auto px-4 py-10">
      <Card className="!bg-transparent text-black border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="text-4xl">
                {recipientDetail.name ? recipientDetail.name.charAt(0) : "?"}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold text-black">
                {recipientDetail.name}
              </CardTitle>
              <p className="text-sm text-gray-400">{recipientDetail.email}</p>
            </div>
          </div>
          <Badge
            className={`text-white ${
              recipientDetail.status === "received"
                ? "!bg-green-300"
                : "!bg-red-300 "
            } text-white border-none`}
          >
            {recipientDetail.status.toUpperCase() || "Unknown"}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card className="!bg-white !text-black">
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span>Email: {recipientDetail.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span>Phone: {recipientDetail.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span>Date of Birth: {recipientDetail.dateOfBirth}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>Address: {recipientDetail.address}</span>
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card className="!bg-white !text-black">
              <CardHeader>
                <CardTitle className="text-xl">Medical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Droplet className="w-5 h-5 text-muted-foreground" />
                  <span>Blood Type: {recipientDetail.bloodType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplet className="w-5 h-5 text-muted-foreground" />
                  <span>Amount: {recipientDetail.amount} ml</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hospital className="w-5 h-5 text-muted-foreground" />
                  <span>
                    Preferred Hospital: {recipientDetail.preferredHospital}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Donation History (optional section if needed later) */}
          <Card className="mt-6 !bg-white !text-black">
            <CardHeader>
              <CardTitle className="text-xl">Donation History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <ClipboardList className="w-20 h-20 text-muted-foreground" />
                <span className="ml-4 text-lg text-muted-foreground">
                  No donation history available
                </span>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};
