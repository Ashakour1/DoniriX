import React from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  const openNav = () => {
    setNavIsOpen(!navIsOpen);
  };
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
          <div className="md:hidden absolute top-10 right-0 bg-black h-58  text-white">
            <ul className="font-bold">
              <li className="p-4">Home</li>
              <li className="p-4">Contact</li>
              <li className="p-4">Become partner</li>
              <li className="p-4">
                <a
                  className="bg-green-600 font-bold text-white py-2 items-center px-4 rounded-md"
                  href=""
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
