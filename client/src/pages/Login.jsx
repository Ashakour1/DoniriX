import React, { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethod";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUser } from "../hooks/useUser";
const Login = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:22000/api/admin/login",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(data.expiresIn);
      toast.success(data.message);
      // console.log(data.expiresIn);
      login(data, data.expiresIn);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-[450px] p-6 bg-white  shadow-xl	 rounded">
        <header>
          <h2 className="text-2xl font-bold text-green-600">Login</h2>
          <p className="mt-2 text-gray-500">
            Enter your email below to login to your account.
          </p>
        </header>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-green-600" htmlFor="email">
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
            <label className="block text-green-600" htmlFor="password">
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
            className="w-full bg-green-600 text-white rounded-md  py-3 px-2 mt-5 "
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
