import React from "react";
import { TiThMenuOutline } from "react-icons/ti";

const Header = () => {
  return (
    <header className=" text-green-600  p-2 ">
      <div className=" max-w-[1040px] mx-auto flex justify-between items-center  ">
        <div>
          <h1 className="text-2xl font-bold">Life Cord</h1>
        </div>
        <div>
          <ul className="md:flex font-bold hidden">
            <li className="p-4">Home</li>
            <li className="p-4">Contact</li>
            <li className="p-4">Become partner</li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <a
            className="bg-green-600 font-bold text-white py-2 items-center px-4 rounded-md"
            href=""
          >
            Donate Now
          </a>
        </div>
      </div>
      <button className="md:hidden absolute top-4 right-4">
        <TiThMenuOutline className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
