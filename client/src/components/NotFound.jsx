import React from "react";
import { CiFaceSmile } from "react-icons/ci";
const NotFound = () => {
  return (
    <div className="text-center flex flex-col items-center  ">
      <h1 className="text-3xl font-bold">404 - Not Found</h1>
      <p className="text-2xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <CiFaceSmile className="text-green-500 text-5xl" />
    </div>
  );
};

export default NotFound;
