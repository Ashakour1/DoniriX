import React from "react";

const Home = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-12">
      <div className="flex justify-between gap-20 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl max-w-xl font-bold">
            At <span className="text-green-600">LifeCord</span> we're dedicated
            to saving lives through the power of blood donation.
          </h1>
          <p className="max-w-md text-md ">
            our mission is to save lives by connecting donors with those in need
            of life-saving blood transfusions. We believe that every drop of
            blood counts and can make a significant difference in someone's
            life..
          </p>
          <div className="flex gap-4">
            <a
              href=""
              className="bg-black text-green-600 font-bold py-2 px-4 rounded-md mt-4"
            >
              Donate Now
            </a>
            <a
              href=""
              className="bg-green-600 text-white font-bold py-2 px-4 rounded-md mt-4"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="">
          <img
            className="w-96 h-80 border-2 rounded-md border-green-500 object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
