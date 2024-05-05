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
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1815b3] to-[#ba1b80] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-[550px] flex flex-col gap-3">
          <h1 className="text-4xl font-bold">
            At <span className="text-blue-500">LifeCord</span> we're dedicated
            to saving lives through the power of LifeCord.
          </h1>
          <p className="text-base">
            Our mission is to save lives by connecting donors with people who
            need blood transfusions. We believe every drop of blood can make a
            big difference in someone's life.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleModalToggle}
              className="bg-black text-white font-bold py-2 px-4  mt-4"
            >
              donate Now
            </button>
            
            <Link to="/contact">
              <button className="border-1 border-black text-blue-500 font-bold py-2 px-4  mt-4">
                Contact Us
              </button>
            </Link>
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1815b3] to-[#ba1b80] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <ModalComponent isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} />
    </main>
  );
};

export default Home;
