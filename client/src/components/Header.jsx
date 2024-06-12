import React, { useEffect, useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { showModal } from "../utils/modal";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import ModalComponent from "./Modal";
const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const { user, logOut } = useUser();

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  const openNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <header className="p-2 ">
      <div className=" max-w-[1040px] mx-auto flex justify-between items-center md:px-0 px-2">
        <Link to="/">
          <h1 className="text-base text-blue-500 font-medium">Life Cord</h1>
        </Link>
        <div>
          <div className=" text-sm md:flex font-medium hidden text-gray-800">
            <Link className="p-4" to="/">
              Home
            </Link>
            <Link className="p-4" to="/contact">
              Contact
            </Link>
            <Link className="p-4" to="/about">
              About
            </Link>
            <Link className="p-4" to="/donars">
              Donars
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <button
            onClick={handleModalToggle}
            className="bg-blue-500 font-semibold text-white py-2 items-center px-4 rounded-md"
          >
            Donate Now
          </button>
        </div>
      </div>

      {/* mobile */}
      <div onClick={openNav} className="md:hidden block">
        {navIsOpen ? (
          <button className="md:hidden absolute top-4 right-4">
            <BiMenuAltLeft className="text-2xl" />
          </button>
        ) : (
          <button className="md:hidden absolute top-4 right-4">
            <BiMenuAltRight className="text-2xl" />
          </button>
        )}

        {navIsOpen ? (
          <div className="md:hidden absolute top-10 right-0 rounded bg-black h-58  text-white ">
            <div className="font-bold flex flex-col">
              <Link className="p-4" to="/">
                Home
              </Link>
              <Link className="p-4" to="/contact">
                Contact
              </Link>
              <Link className="p-4" to="/about">
                About
              </Link>
              <Link className="p-4" to="/donars">
                Donars
              </Link>
              <button
                onClick={handleModalToggle}
                className="bg-blue-600 font-bold text-white py-2 items-center m-2 px-4 rounded-md"
              >
                Donate Now
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <ModalComponent isOpen={isOpen} onOpenChange={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
