import React from "react";

const Home = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-12">
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl max-w-[550px] font-bold">
            At <span className="text-green-600">LifeCord</span> we're dedicated
            to saving lives through the power of LifeCord.
          </h1>
          <p className="max-w-[550px] text-md text-justify ">
            Our mission is to safeguard lives by facilitating the vital
            connection between compassionate donors and individuals in critical
            need of life-saving blood transfusions. We firmly believe that every
            single drop of blood holds the power to make a profound and positive
            impact in someone's life.
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
          <img className="w-32" src="/arrow.png" alt="" />
        </div>
        <div className="">
          <img
            className="w-[430px] h-96 border-2 rounded-lg border-green-500 object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
