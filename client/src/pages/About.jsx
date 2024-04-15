import React from "react";
import { BsRocketTakeoffFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

const About = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-5 min-h-screen">
      <div className="p-4">
        <h1 className=" text-2xl font-bold">About LifeCord</h1>
        <p className="text-justify mt-4 text-xl">
          LifeCord is a modern solution for blood donation, created by
          <span className="font-bold  text-green-600 ">
            {" "}
            Abdishakur Mohamed{" "}
          </span>
          with the aim of simplifying the process of saving lives. Our
          innovative platform seamlessly connects individuals willing to donate
          blood with those urgently in need, ensuring swift and efficient access
          to lifesaving transfusions. With a dedication to humanitarian efforts,
          we continually strive to expand our reach and enhance the impact of
          our lifesaving mission.
        </p>
      </div>
      <div className="p-4 grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="flex flex-col md:border-r-2 md:border-t-0 border-t-2 p-4 rounded ">
          <div className="flex items-center">
            <BsRocketTakeoffFill className="text-2xl text-green-600" />
            <h2 className="text-2xl font-bold pl-2 ">Our Mission</h2>
          </div>

          <p className="text-justify text-base pt-2 ">
            LifeCord's mission is to save lives through blood donation. We make
            it easy for donors to give blood and for patients to receive it
            quickly.
          </p>
        </div>
        <div className="flex flex-col md:border-r-2 md:border-t-0 border-t-2 p-4 rounded ">
          <div className="flex items-center">
            <FaRegEye className="text-2xl text-green-600" />
            <h2 className="text-2xl font-bold pl-2 ">Our Vision</h2>
          </div>
          <p className="text-justify text-base pt-2">
            LifeCord aims to swiftly provide lifesaving blood, making donation
            easy for donors and access fast for patients, saving lives
            efficiently.
          </p>
        </div>
        <div className="flex flex-col md:border-r-2 md:border-t-0 border-t-2 p-4 rounded ">
          <div>
            <div className="flex items-center">
              <IoMdPersonAdd className="text-2xl text-green-600" />
              <h2 className="text-2xl font-bold pl-2 ">Join Us</h2>
            </div>
          </div>

          <p className="text-justify text-bas pt-2">
            Join LifeCord as a donor, recipient, or supporter to save lives and
            build a healthier future.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
