import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
const DonorForm = () => {
  // name, email, phone, age, weight, address, nextOfKin, hp, bloodType
  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sex: "",
    phone: "",
    age: "",
    weight: "",
    address: "",
    nextOfKin: "",
    hp: "",
    bloodType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const clearData = () => {
    setFormData({
      name: "",
      email: "",
      sex: "",
      phone: "",
      age: "",
      weight: "",
      address: "",
      nextOfKin: "",
      hp: "",
      bloodType: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const URL = "https://api-badbaadiye.vercel.app/api/donors";
    // console.log(formData);
    try {
      const response = await axios.post(URL, formData);
      // console.log(response.data);
      toast.success(response.data.message);
      clearData();
      //   console.log(data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-[800px] rounded-lg mx-auto text-black p-8 ">
      <h1 className="my-4 text-3xl font-bold tracking-tight text-black">
        Donor Registration
      </h1>
      <p className="mb-4 text-gray-700">
        Please fill in the form below to add a donor registration
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="name"
            placeholder="Enter donor name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Email
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="email"
            placeholder="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="sex"
          >
            Sex
          </label>
          <select
            name="sex"
            className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="sex"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="category"
          >
            Phone
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="phone"
            placeholder="Enter the donor's phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="price"
            >
              Age
            </label>
            <input
              className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="age"
              placeholder="Enter the donor's age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="stock"
            >
              Weight
            </label>
            <input
              className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="weight"
              placeholder="Enter the donor's weight"
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="bloodType"
          >
            Blood Type
          </label>
          <select
            name="bloodType"
            className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            HP
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="hp"
            placeholder="Enter the donor's hp"
            type="text"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="address"
            placeholder="Enter the donor's address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="nextOfKin"
          >
            nextOfKin
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="nextOfKin"
            placeholder="Enter the donor's next of kin"
            type="text"
            name="nextOfKin"
            value={formData.nextOfKin}
            onChange={handleChange}
          />
        </div>

        <button
          className="w-full rounded-md bg-black px-4 text-sm font-medium text-white py-3"
          type="submit"
        >
          {Loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
