import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
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
