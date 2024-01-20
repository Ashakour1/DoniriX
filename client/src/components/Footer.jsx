import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1040px] mx-auto">
        <p className="text-white text-center">
          Developed with ❤️ by {" "}
          <Link className="underline" to="https://github.com/Ashakour1">
            Abdishakur
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
