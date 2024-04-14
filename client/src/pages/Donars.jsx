import React from "react";
import { FaRegFaceLaughWink } from "react-icons/fa6";

const Donars = () => {
  return (
    <main className="max-w-[1040px] mx-auto min-h-screen">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
        <h1 className="text-green-600 text-3xl font-bold">Coming Soon!</h1>
        <p className="my-3 text-2xl">
          We are working on this page and it will be available soon. Thanks for
          your understanding and patience as we make sure everything is just
          right.
        </p>
        <FaRegFaceLaughWink className="text-green-600 text-5xl" />
      </div>
    </main>
  );
};

export default Donars;
