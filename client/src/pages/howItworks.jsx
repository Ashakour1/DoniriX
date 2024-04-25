import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";
import { MdContactPhone, MdContentPasteSearch } from "react-icons/md";
import { Button } from "@nextui-org/react";
import ModalComponent from "../components/Modal";
const HowItworks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className=" bg-gradient-to-br from-[#F0F9FF] to-[#FFFBEB] ">
      <div className="max-w-[1140px] mx-auto min-h-screen">
        <div className="text-center pt-10">
          <h1 className="text-4xl md:px-0 px-3 font-bold text-blue-500">
            How does it Work?
          </h1>
          <p className="pt-4">
            Here's How the process works for donors on LifeCord:
          </p>
        </div>

        <div className="grid px-3 grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
          <div className="bg-blue-500 p-7 text-center flex flex-col items-center rounded">
            <FaRegAddressCard className="text-4xl  text-white" />

            <h2 className="md:text-2xl text-xl font-bold text-white pt-2">
              Register as a donor
            </h2>
            <p className="pt-2">
              Donors easily register on LifeCord's platform, providing their
              personal details and blood type.
            </p>
          </div>
          <div className="p-7  text-center flex flex-col items-center">
            <div className="bg-green-200 p-2 rounded-full">
              <MdContentPasteSearch className="text-xl text-green-500" />
            </div>

            <h2 className="md:text-lg text-lg font-bold pt-2 text-black">
              Donor Search
            </h2>
            <p className="pt-2">
              Administrators search the donor database when a patient needs
              blood.
            </p>
          </div>
          <div className=" p-7 rounded text-center flex flex-col items-center">
            <div className="bg-blue-200 p-2 rounded-full">
              <MdContactPhone className="text-xl text-blue-500" />
            </div>

            <h2 className="md:text-lg text-lg font-bold pt-2 text-black">
              Donor Contact
            </h2>
            <p className="pt-2">
              Donors are contacted and invited to donate blood to save a life.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Button
            onClick={handleModalToggle}
            className="bg-blue-500 text-white font-bold py-4 my-10 px-8 rounded mt-4"
          >
            donate Now
          </Button>
        </div>
      </div>
      <ModalComponent isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} />
    </main>
  );
};

export default HowItworks;
