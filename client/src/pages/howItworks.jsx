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
        <div className="text-center pt-24">
          <h1 className="md:text-3xl text-xl md:px-0 px-3 font-bold text-black">
            How does it Work?
          </h1>
          <p className="pt-4 md:px-4">
            Here's How the process works for donors on LifeCord:
          </p>
        </div>

        <div className="grid px-3 grid-cols-1 md:grid-cols-3 gap-5 py-16 md:pt-10 ">
          <div className="p-7 text-center flex flex-col items-center">
            <div className="bg-yellow-200 p-2 rounded-full">
              <FaRegAddressCard className="text-xl text-yellow-500" />
            </div>

            <h2 className="md:text-lg text-lg font-bold text-black pt-2">
              Register as a donor
            </h2>
            <p className="pt-2 text-base">
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
            <p className="pt-2 text-base">
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
            <p className="pt-2 text-base">
              Donors are contacted and invited to donate blood to save a life.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowItworks;
