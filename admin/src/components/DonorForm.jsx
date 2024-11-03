import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../services/Api";
const DonorForm = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  // name, email, phone, age, weight, address, nextOfKin, hp, bloodType
  const [Loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [age, setAge] = useState("");

  // ... other functions

  const handleDateChange = (calculatedAge) => {
    setAge(calculatedAge); // Update the age state with the calculated age
    setFormData({ ...formData, age: calculatedAge }); // Update formData
  };
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sex: "",
    phone: 0,

    weight: "",
    address: "",
    nextOfKin: "",
    hp: "",
    bloodType: "",
    amount: "",
    location: "",
    status: "",
  });

  const fetchUserData = async () => {
    // Fetch user data from wherever it's stored (e.g., local storage, session storage, etc.)
    const loginUser = localStorage.getItem("userData");
    // console.log(JSON.parse(loginUser));
    if (loginUser) {
      setUserData(JSON.parse(loginUser));
    }
  };

  const validate = () => {
    const errors = {};

    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.age) errors.age = "Age is required";
    if (!formData.weight) errors.weight = "Weight is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.nextOfKin) errors.nextOfKin = "Next of kin is required";
    if (!formData.hp) errors.hp = "HB is required";
    if (!formData.bloodType) errors.bloodType = "Blood type is required";

    // Phone validation
    if (!formData.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      errors.phone = "Phone must be a number";
    } else if (formData.phone.length < 7) {
      // Assuming phone numbers should have at least 7 digits
      errors.phone = "Phone number must be at least 7 digits";
    }

    // Amount validation
    if (!formData.amount) {
      errors.amount = "Amount is required";
    } else if (!/^\d+$/.test(formData.amount)) {
      errors.amount = "Amount must be a number";
    } else if (parseInt(formData.amount, 10) <= 0) {
      // Ensure amount is greater than zero
      errors.amount = "Amount must be greater than zero";
    }

    if (!formData.sex) errors.sex = "Sex is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const fetchDonor = async () => {
    try {
      if (userData && userData.token) {
        const config = {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        };
        const { data } = await axios.get(`${URL}/api/donors/${id}`, config);
        setFormData(data.data.donar);
      }
    } catch (error) {
      console.error(error);
      // toast.error("Error fetching donor data");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const clearData = () => {
    setFormData({
      name: "",
      email: "",
      sex: "",
      phone: 0,
      age: "",
      weight: "",
      address: "",
      nextOfKin: "",
      hp: "",
      bloodType: "",
      amount: "",
      location: "",
      status: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);

    if (!validate()) {
      return;
    }
    setLoading(true);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userData?.token}`,
        },
      };

      if (id) {
        const { data } = await axios.put(
          `${URL}/api/donors/${id}`,
          formData,
          config
        );
        toast.success(data.message);
      } else {
        const { data } = await axios.post(`${URL}/api/donors`, formData);
        toast.success(data.message);
      }
      clearData();
      navigate("/donors");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "An error occurred";
      toast.error(errorMsg);
      setErrors({ ...errors, form: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  useEffect(() => {
    if (userData) {
      fetchDonor();
    }
  }, [userData]);

  return (
    <div className="w-[800px] rounded-lg mx-auto text-black p-8 ">
      {id ? (
        <h1 className="my-4 text-3xl font-bold tracking-tight text-Accent">
          Update Donor Information
        </h1>
      ) : (
        <h1 className="my-4 text-3xl font-bold tracking-tight text-Accent">
          Donor Registration
        </h1>
      )}
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
            onChange={handleChange}
            value={formData.name}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
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
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
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
            onChange={handleChange}
            value={formData.sex}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && (
            <p className="text-red-500 text-xs mt-1">{errors.sex}</p>
          )}
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
            onChange={handleChange}
            value={formData.phone}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
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
              onChange={handleChange}
              value={formData.age}
            />
            {errors.age && (
              <p className="text-red-500 text-xs mt-1">{errors.age}</p>
            )}
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
              onChange={handleChange}
              value={formData.weight}
            />
            {errors.weight && (
              <p className="text-red-500 text-xs mt-1">{errors.weight}</p>
            )}
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
          {errors.bloodType && (
            <p className="text-red-500 text-xs mt-1">{errors.bloodType}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            HB
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="hp"
            placeholder="Enter the donor's hp"
            type="text"
            name="hp"
            onChange={handleChange}
            value={formData.hp}
          />
          {errors.hp && (
            <p className="text-red-500 text-xs mt-1">{errors.hp}</p>
          )}
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
            onChange={handleChange}
            value={formData.address}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="nextOfKin"
          >
            next of kin
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="nextOfKin"
            placeholder="Enter the donor's next of kin (number or name)"
            type="text"
            name="nextOfKin"
            onChange={handleChange}
            value={formData.nextOfKin}
          />
          {errors.nextOfKin && (
            <p className="text-red-500 text-xs mt-1">{errors.nextOfKin}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="mb-1 text-sm font-medium text-gray-700"
            htmlFor="nextOfKin"
          >
            Amount(ml)
          </label>
          <input
            className="rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-black focus:border-primary focus:ring-primary"
            id="nextOfKin"
            placeholder="Enter the amount of blood donated"
            type="text"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
          />
          {errors.amount && (
            <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
          )}
        </div>

        {/* {
          id && (
            <div className="flex flex-col">
              <label
                className="mb-1 text-sm font-medium text-gray-700"
                htmlFor="description"
              >
              Location
              </label>
           
            </div>
          )
        } */}

        {id && (
          <>
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
                <option value="pending">Pending</option>
                <option value="finished">Finished</option>
              </select>
            </div>
          </>
        )}
        {id && formData.status === "finished" && (
          <div className="flex flex-col">
            <label
              className="mb-1 text-sm font-medium text-gray-700"
              htmlFor="location"
            >
              Location
            </label>
            <select
              name="location"
              className="rounded-md border border-gray-300 p-2 text-sm text-black focus:border-primary focus:ring-primary"
              id="location"
              onChange={handleChange}
              value={formData.location}
            >
              <option value="">Select Location</option>
              <option value="hospitalUniso">Hospital Uniso</option>
            </select>
          </div>
        )}

        <button
          className="w-full rounded-md bg-Accent px-4 text-sm font-medium text-white py-3"
          type="submit"
        >
          {Loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
