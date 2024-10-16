import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const RecipientForm = () => {
  const { id } = useParams();

  const [Loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "", // Blood amount needed
    address: "",
    bloodType: "",
    status: "",
    dateOfBirth: "",
    preferredHospital: "",
    reasonForBloodNeed: "",
  });

  const fetchRecipient = async () => {
    try {
      const { data } = await axios.get(
        `/api/recipients/${id}`
      );
      console.log(data);
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipient();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearData = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
      address: "",
      bloodType: "",
      status: "",
      dateOfBirth: "",
      preferredHospital: "",
      reasonForBloodNeed: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (id) {
        const { data } = await axios.put(
          `/api/recipients/${id}`,
          formData
        );
        clearData();
        toast.success(data.message);
      } else {
        const response = await axios.post(
          "/api/recipients",
          formData
        );
        clearData();
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
    setLoading(false);
  };

  console.log(formData);
  return (
    <div className="w-[800px] rounded-lg mx-auto text-black p-8">
      <h1 className="my-4 text-3xl font-bold tracking-tight text-black">
        Recipient Registration
      </h1>
      <p className="mb-4 text-gray-700">
        Please fill in the form below to register a blood recipient.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name */}
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
            placeholder="Enter recipient name"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="email"
            placeholder="Email Address"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="phone"
            placeholder="Enter recipient phone number"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="amount"
          >
            Amount (ml)
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="amount"
            placeholder="Enter the amount of blood needed"
            type="number"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
          />
        </div>

        {/* Address */}
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
            placeholder="Enter recipient's address"
            type="text"
            name="address"
            onChange={handleChange}
            value={formData.address}
          />
        </div>

        {/* Blood Type */}
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
            onChange={handleChange}
            value={formData.bloodType}
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

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="dateOfBirth"
            placeholder="Enter date of birth (YYYY-MM-DD)"
            type="text"
            name="dateOfBirth"
            onChange={handleChange}
            value={formData.dateOfBirth}
          />
        </div>

        {/* Preferred Hospital */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="preferredHospital"
          >
            Preferred Hospital
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="preferredHospital"
            placeholder="Enter the preferred hospital"
            type="text"
            name="preferredHospital"
            onChange={handleChange}
            value={formData.preferredHospital}
          />
        </div>

        {/* Reason for Blood Need */}
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="reasonForBloodNeed"
          >
            Reason for Blood Need
          </label>
          <textarea
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="reasonForBloodNeed"
            placeholder="Provide a reason for the blood need"
            name="reasonForBloodNeed"
            onChange={handleChange}
            value={formData.reasonForBloodNeed}
          />
        </div>

        {id && (
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="status"
            >
              Status
            </label>
            <select
              name="status"
              className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="status"
              onChange={handleChange}
              value={formData.status}
            >
              <option value="">Select Status</option>
              <option value="Registered">Registered</option>
              <option value="Eligible">Eligible</option>
              <option value="Ineligible">Ineligible</option>
              <option value="Appointment Set">Appointment Set</option>
              <option value="Donation Completed">Donation Completed</option>
              <option value="Post Donation Followup">
                Post Donation Followup
              </option>
              <option value="Withdrawn">Withdrawn</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        )}

        {/* Submit Button */}
        <button
          className="w-full rounded-md bg-black px-4 py-3 text-sm font-medium text-white"
          type="submit"
        >
          {Loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RecipientForm;
