import React from "react";
import { showModal } from "../utils/modal";

const Home = () => {
  const modal = React.useRef(null);

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
            <button
              onClick={() => showModal(modal)}
              className="bg-black text-green-400 font-bold py-2 px-4 rounded mt-4"
            >
              donate Now
            </button>
            <button className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
              Contact Us
            </button>
          </div>
          <img className="w-32" src="/arrow.png" alt="" />
        </div>
        <div className="over-hidden">
          <img
            className="w-[430px] h-96 border-2 rounded-lg border-green-500 object-cover"
            src="/donate.png"
            alt="placeholder"
          />
        </div>
      </div>

      <dialog id="my_modal_2" className="modal" ref={modal}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </main>
  );
};

export default Home;
