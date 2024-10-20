import { Droplet } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export const BloodTypes = () => {
  const { user } = useUser();

  const location = useLocation();

  const redirectTo = location.pathname;
  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  });
  const navigate = useNavigate();
  //   console.log(navigate);
  return (
    <div className="max-w-[1400px] mx-auto bg-gray-100 flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Blood Types</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4  w-full">
        {bloodTypes.map((type) => (
          <div
            onClick={() => navigate(`/donors/${type}`)}
            key={type}
            className="
              aspect-square rounded-lg shadow-md
              flex flex-col items-center justify-center
              bg-white text-gray-800
            "
          >
            <Droplet className="mb-2 fill-red-500" size={32} />
            <span className="text-2xl font-bold">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodTypes;
