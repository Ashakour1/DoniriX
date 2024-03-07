import React, { useState } from "react";
import { showModal } from "../utils/modal";
import { publicRequest } from "../requestMethod";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Home = () => {
  const modal = React.useRef(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalPlacement, setModalPlacement] = useState("center");

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

  const clearText = () => {
    setFormData({
      fullname: "",
      email: "",
      phone: "",
      age: "",
      weight: "",
      address: "",
      motherNumber: "",
      bloodType: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://lifecord.onrender.com/api/donar/",
        formData
      );
      console.log(response.data);

      if (formData) {
        clearText();
        if (response.data && response.data.message) {
          toast.success(response.data.message);
        } else {
          toast.error(
            response.data.message ||
              "An error occurred. Please try again later."
          );
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
    <main className="max-w-[1040px] mx-auto mt-12 h-screen">
      <div className="flex justify-between md:gap-20 gap-0 md:px-0 px-4 md:flex-row flex-col pb-2">
        <div className="max-w-[550px] flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            At <span className="text-green-600">LifeCord</span> we're dedicated
            to saving lives through the power of LifeCord.
          </h1>
          <p className=" text-md text-justify ">
            Our mission is to safeguard lives by facilitating the vital
            connection between compassionate donors and individuals in critical
            need of life-saving blood transfusions. We firmly believe that every
            single drop of blood holds the power to make a profound and positive
            impact in someone's life.
          </p>
          <div className="flex gap-4">
            <Button
              onPress={onOpen}
              className="bg-black text-green-400 font-bold py-2 px-4 rounded mt-4"
            >
              donate Now
            </Button>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <img className="w-32" src="/arrow.png" alt="" />
        </div>
        <div className="over-hidden md:px-0">
          <img
            className="md:w-[430px] w-full h-96 border-2 rounded-lg border-green-500 object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        placement={modalPlacement}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-2xl font-bold">Donate Blood</h2>
                <p className="text-sm text-gray-500">
                  Please fill the form below to donate blood
                </p>
              </ModalHeader>
              <ModalBody>
                <form action="">
                  <div className="flex gap-2">
                    <div>
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Full Name</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="age">Age</label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex  gap-2">
                    <div>
                      <label htmlFor="weight">Weight</label>
                      <input
                        type="text"
                        name="weight"
                        id="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <label htmlFor="motherNumber">Mother Number</label>
                      <input
                        type="text"
                        name="motherNumber"
                        id="motherNumber"
                        value={formData.motherNumber}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                      />
                    </div>
                    <div>
                      <label htmlFor="bloodType">BloodType</label>
                      <select
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        id=""
                      >
                        <option value="" disabled>
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
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={handleSubmit} color="primary">
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};

export default Home;
