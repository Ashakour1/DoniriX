import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Weight,
  MapPin,
  UserPlus,
  Activity,
  Droplet,
  ClipboardList,
} from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useUser } from "@/hooks/useUser";
import {URL} from "../services/Api"

export const DonorDetail = () => {
  const [donorDetail, setDonorDetail] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    // Fetch user data from wherever it's stored (e.g., local storage, session storage, etc.)
    const loginUser = localStorage.getItem("userData");
    // console.log(JSON.parse(loginUser));
    if (loginUser) {
      setUserData(JSON.parse(loginUser));
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const { user } = useUser();

  const navigate = useNavigate();

  const location = useLocation();
  const redirectTo = location.pathname;

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user]);

  console.log(id);

  const fetchDonorDetails = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      const { data } = await axios.get(`${URL}/api/donors/${id}`, config);
      const donarData = data.data.donar;
      setDonorDetail(donarData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (userData) {
      fetchDonorDetails();
    }
  }, [id, userData]);
  //   const donor = dummyDonor;

  console.log(donorDetail);

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-500"; // Default color if status is undefined

    switch (
      status.toLowerCase() // Use .toLowerCase() to handle case insensitivity
    ) {
      case "finished":
        return "bg-green-500"; // Color for finished status
      case "pending":
        return "bg-red-500"; // Color for pending status
      default:
        return "bg-yellow-500"; // Fallback color for any other status
    }
  };

  const testStatus = "finished";
  console.log(getStatusColor(testStatus));

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
                {donorDetail.name ? donorDetail.name.charAt(0) : "?"}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-3xl font-bold text-black">
                {donorDetail.name}
              </CardTitle>
              <p className="text-sm text-gray-400">{donorDetail.email}</p>
            </div>
          </div>
          <Badge
            className={`text-white ${
              donorDetail.status === "finished"
                ? "!bg-green-300"
                : "!bg-red-300 "
            } text-white border-none`}
          >
            {donorDetail.status.toUpperCase() || "Unknown"}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="!bg-white !text-black">
              <CardHeader>
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <span>Sex: {donorDetail.sex}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span>Phone: {donorDetail.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span>Age: {donorDetail.age}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Weight className="w-5 h-5 text-muted-foreground" />
                  <span>Weight: {donorDetail.weight}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span>Address: {donorDetail.address}</span>
                </div>
                {donorDetail.status == "finished" ? (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>
                      Donation Location: {donorDetail.location || "N/A"}
                    </span>{" "}
                    {/* New field */}
                  </div>
                ) : null}
              </CardContent>
            </Card>
            <Card className="!bg-white !text-black">
              <CardHeader>
                <CardTitle className="text-xl">Medical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5 text-muted-foreground" />
                  <span>Next of Kin: {donorDetail.nextOfKin}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-muted-foreground" />
                  <span>HP: {donorDetail.hp}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplet className="w-5 h-5 text-muted-foreground" />
                  <span>Blood Type: {donorDetail.bloodType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Droplet className="w-5 h-5 text-muted-foreground" />
                  <span>Amount: {donorDetail.amount}</span>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* <Card className="mt-6 !bg-white !text-black">
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
          </Card> */}
        </CardContent>
      </Card>
    </div>
  );
};
