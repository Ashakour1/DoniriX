import React from "react";
import { Link } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";
import { MdContactPhone, MdContentPasteSearch } from "react-icons/md";

const HowItworks = () => {
  return (
    <main className="max-w-[1140px] mx-auto">
      <div className="min-h-screen">
        <div className="text-center pt-20">
          <h1 className="text-3xl font-bold text-green-600">
            How does it Work?
          </h1>
          <p className="pt-4">
            Here's How the process works for donors on LifeCord:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ">
          <div className="bg-slate-400 p-7 text-center flex flex-col items-center rounded">
            <FaRegAddressCard className="text-4xl" />

            <h2 className="text-2xl font-bold text-green-600 pt-2">
              Register as a donor
            </h2>
            <p className="pt-2">
              Donors easily register on LifeCord's platform, providing their
              personal details and blood type.
            </p>
          </div>
          <div className="bg-slate-400 p-7 rounded text-center flex flex-col items-center">
            <MdContentPasteSearch className="text-4xl" />

            <h2 className="text-2xl font-bold pt-2 text-green-600">
              Donor Search
            </h2>
            <p className="pt-2">
              Administrators search the donor database when a patient needs
              blood,
            </p>
          </div>
          <div className="bg-slate-400 p-7 rounded text-center flex flex-col items-center">
            <MdContactPhone
 className="text-4xl" />

            <h2 className="text-2xl font-bold pt-2 text-green-600">
              Donor Contact
            </h2>
            <p className="pt-2">
              Donors are contacted and invited to donate blood to save a life.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowItworks;
