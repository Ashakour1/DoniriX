import React, { useEffect, useState } from "react";
import axios from "axios";
// import { publicRequest } from "../requestMethod";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useUser } from "../hooks/useUser";
import Swal from "sweetalert2";
import { URL } from "../services/api";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const location = useLocation();

  const redirectTo = location.search.split("/")[1];

  // console.log(redirectTo);

  const { login, user } = useUser();

  useEffect(() => {
    if (user) {
      redirectTo ? navigate(`/${redirectTo}`) : navigate("/dashboard");
    }
  }, [user, redirectTo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://api-badbaadiye.vercel.app/api/admin/login`,
        formData
      );

      console.log(data.expiresIn);
      toast.success(data.message);
      login(data, data.expiresIn);
    } catch (error) {
      setLoading(false);

      // Check if error response exists and extract the message
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      console.log(error);
      toast.error(errorMessage);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-[450px] p-6 bg-white  shadow-xl	 rounded">
        <header>
          <h2 className="text-2xl font-bold text-blue-500">Login</h2>
          <p className="mt-2 text-gray-500">
            Enter your email below to login to your account.
          </p>
        </header>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-blue-500" htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              id="email"
              placeholder="johna@gmail.com"
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 mt-5">
            <label className="block text-blue-500" htmlFor="password">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              id="password"
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white rounded-md  py-3 px-2 mt-5 "
            type="submit"
          >
            {loading ? "login..." : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
