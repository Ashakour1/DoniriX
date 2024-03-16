import React from "react";

const Contact = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-5">
      <div className=" md:flex-row flex-col flex">
        <div className="max-w-[550px] flex flex-col gap-5 mt-4 md:px-0 px-4">
          <h1 className="text-3xl font-bold">
            <span className="text-green-600">LifeCord</span> Contact
          </h1>
          <p className="text-2xl">
            life-Cord website. Together, we can elevate our collective influence
            and offer unparalleled experiences to donors, recipients, and
            healthcare providers. Join hands with us and be a part of this noble
            cause.
          </p>
        </div>
        <div className="p-5 w-full">
          <form>
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 border border-gray-500 p-2 rounded"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 border border-gray-500 p-2 rounded"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-2 border border-gray-500 p-2 rounded"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="font-bold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                className="border border-gray-500 rounded"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <button className="w-full bg-green-500 text-white rounded mt-4 p-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
