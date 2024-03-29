import React from "react";

const Contact = () => {
  return (
    <main className="max-w-[1040px] mx-auto mt-5 min-h-screen">
      <div className=" md:flex-row flex-col flex mt-5 gap-4">
        <div className="max-w-[500px] flex flex-col gap-2 mt-5 md:px-0 px-4">
          <h2 className="text-2xl font-bold text-green-600">
            Connect with Life Cord - Your Blood Donation Partner
          </h2>
          <p className="text-md font-normal text-gray-600">
            Got questions or need assistance? We're here to provide support
            every step of the way! Whether you're a donor, recipient, or
            healthcare provider, we're dedicated to ensuring your experience
            with Life Cord is seamless and impactful. Reach out to us today, and
            let's collaborate to make a real difference in the lives of those in
            need. Together, we can create positive change and leave a lasting
            impact. Join us in our mission and become a valued part of something
            truly meaningful.
          </p>
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 mt-2 rounded-full object-cover"
              src="/image.jpg"
              alt="image"
            />
            <div className="flex flex-col">
              <h1 className="text-md font-medium">A.shakour Mohamed </h1>
              <p className="text-xs">@Founder</p>
            </div>
            <div></div>
          </div>
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
