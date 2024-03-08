import React, { useState } from "react";
import axios from "axios";
import { publicRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:22000/api/admin/login",
        formData,
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.data.message);
      navigate("/dashboard");
      setLoading(false);
      // if (formData) {
      //   localStorage.setItem("admin", response.data);
      //   if (response.data && response.data.message) {
      //     navigate("/dashboard");
      //   } else {
      //     toast.error(response.data.message);
      //   }
      // } else {
      //   toast.error("An error occurred. Please try again later.");
      // }
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.data.message);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-[450px] p-4 bg-gray-400  shadow-md rounded-lg">
        <header>
          <h2 className="text-2xl font-bold ">Login</h2>
          <p className="mt-2">
            Enter your email below to login to your account.
          </p>
        </header>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block" htmlFor="email">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              id="email"
              placeholder="johna@gmail.com"
              required
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 mt-5">
            <label className="block" htmlFor="password">
              Password<span className="text-red-600">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              id="password"
              required
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <button
            className="w-full bg-gray-900 text-white rounded-md  py-3 px-2 mt-5 "
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
