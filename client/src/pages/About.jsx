import React from "react";

const About = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-5">
    <div className=" md:flex-row flex-col flex md:px-0 px-4 pb-4">
      <div className="max-w-[550px] flex flex-col gap-5 mt-4">
        <h1 className="text-3xl font-bold">
          <span className="text-green-600">LifeCord</span> Contact
        </h1>
        <p className="text-2xl">
          blood donation website. Together, we can elevate our collective
          influence and offer unparalleled experiences to donors, recipients,
          and healthcare providers. Join hands with us and be a part of this
          noble cause.
        </p>
        <h1 className="text-2xl font-bold">
          <span className="text-green-600">LifeCord</span> Contact
        </h1>
        <p className="text-xl">
          blood donation website. Together, we can elevate our collective
          influence and offer unparalleled experiences to donors, recipients,
          and healthcare providers. Join hands with us and be a part of this
          noble cause.
        </p>
      </div>
      <div className="pt-3 w-full">
       <img  className="w-[600px] h-[300px] object-cover rounded" src="https://via.placeholder.com/640x360" alt="" />
      </div>
    </div>
  </main>
  );
};

export default About;
