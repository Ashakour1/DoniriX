import React, { useState } from "react";
import { showModal } from "../utils/modal";
import { publicRequest } from "../requestMethod";
import axios from "axios";
import { toast } from "sonner";

const Home = () => {
  const modal = React.useRef(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    age: "",
    weight: "",
    address: "",
    motherNumber: "",
    bloodType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/donar/",
        formData
      );
      console.log(response.data);

      if (formData) {
        if (response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          toast.error("An error occurred. Please try again later.");
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="max-w-[1040px] mx-auto mt-12">
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl max-w-[550px] font-bold">
            At <span className="text-green-600">LifeCord</span> we're dedicated
            to saving lives through the power of LifeCord.
          </h1>
          <p className="max-w-[550px] text-md text-justify ">
            Our mission is to safeguard lives by facilitating the vital
            connection between compassionate donors and individuals in critical
            need of life-saving blood transfusions. We firmly believe that every
            single drop of blood holds the power to make a profound and positive
            impact in someone's life.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => showModal(modal)}
              className="bg-black text-green-400 font-bold py-2 px-4 rounded mt-4"
            >
              donate Now
            </button>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
              Contact Us
            </button>
          </div>
          <img className="w-32" src="/arrow.png" alt="" />
        </div>
        <div className="over-hidden">
          <img
            className="w-[430px] h-96 border-2 rounded-lg border-green-500 object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>

      <dialog id="my_modal_2" className="modal" ref={modal}>
        <div className="modal-box">
          <form method="dialog" className="mx-3" onSubmit={handleSubmit}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <div>
              <h1 className="font-bold text-2xl">Donate Blood</h1>
              <p className="text-md pt-2">
                Please fill in the form below to donate blood
              </p>
              <div className="flex justify-between mt-4">
                <div>
                  <label className="block text-sm font-bold">Name</label>
                  <input
                    type="text"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="fullname"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold">Email</label>
                  <input
                    type="email"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <div>
                  <label className="block text-sm font-bold">Phone</label>
                  <input
                    type="Number"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="phone"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold">Age</label>
                  <input
                    type="number"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="age"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <div>
                  <label className="block text-sm font-bold">Weight</label>
                  <input
                    type="Number"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="weight"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold">Address</label>
                  <input
                    type="text"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="address"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <div>
                  <label className="block text-sm font-bold">
                    Mother Number
                  </label>
                  <input
                    type="Number"
                    className="w-52 p-2 border border-gray-300 rounded mt-2"
                    name="motherNumber"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label htmlFor="" className="block text-sm font-bold">
                    Blood Type
                  </label>
                  <select
                    name="bloodType"
                    id=""
                    className="w-52  p-2 border border-gray-300 rounded mt-2"
                    onChange={handleChange}
                  >
                    <option disabled selected>
                      Select Blood Type
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 bg-green-600 p-2.5 rounded text-white font-bold">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </main>
  );
};

export default Home;
