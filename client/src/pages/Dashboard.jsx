import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();

  console.log(user);
  const location = useLocation();

  const redirectTo = location.pathname;
  console.log(redirectTo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/login?redirectTo=${redirectTo}`);
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>
        Welcome {user?.adminExists.name} to the dashboard. You are now logged
        in.
      </h1>
    </div>
  );
};

export default Dashboard;
