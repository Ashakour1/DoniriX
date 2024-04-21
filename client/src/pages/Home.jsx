import React, { useRef, useState } from "react";
import { showModal } from "../utils/modal";
import { publicRequest } from "../requestMethod";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import ModalComponent from "../components/Modal";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="max-w-[1040px] mx-auto mt-12 min-h-screen">
      <div className="flex justify-between md:gap-20 gap-0 md:px-0 px-4 md:flex-row flex-col pb-2">
        <div className="max-w-[550px] flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            At <span className="text-blue-500">LifeCord</span> we're dedicated
            to saving lives through the power of LifeCord.
          </h1>
          <p className="text-md text-justify ">
            Our mission is to safeguard lives by facilitating the vital
            connection between compassionate donors and individuals in critical
            need of life-saving blood transfusions. We firmly believe that every
            single drop of blood holds the power to make a profound and positive
            impact in someone's life.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleModalToggle}
              className="bg-black text-blue-500 font-bold py-2 px-4 rounded mt-4"
            >
              donate Now
            </Button>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
              <Link to="/contact">Contact Us</Link>
            </button>
          </div>
          <img className="w-32" src="/arrow.png" alt="" />
        </div>
        <div className="over-hidden md:px-0">
          <img
            className="md:w-[430px] shadow-md w-full h-96 border-2 rounded-lg  object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>

      {/* <Modal
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
                      <label forHtml="">Full Name</label>
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
                      <label forHtml="">Email</label>
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
                      <label forHtml="">Phone</label>
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
                      <label forHtml="">Age</label>
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
                      <label forHtml="">Weight</label>
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
                      <label forHtml="">Address</label>
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
                      <label forHtml="">Mother Number</label>
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
                      <label forHtml="">BloodType</label>
                      <select
                        className="w-full border-2 border-gray-300 rounded-md p-2"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        id=""
                      >
                        <option disabled>Select Blood Type</option>
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
      </Modal> */}

      <ModalComponent isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} />
    </main>
  );
};

export default Home;
