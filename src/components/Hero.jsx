import React, { useState } from "react";
import heroImage from "/image.png";
import Opening from "./Opening";



const Hero = () => {
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="p-16">
      <div className="flex flex-col gap-10 sm:gap-0 items-center justify-center sm:flex-row sm:justify-around ">
        <div className="max-w-full sm:w-2/5 flex flex-col gap-8">
          <h1 className="text-2xl text-gray-700 text-center sm:text-left font-nunito sm:text-5xl font-bold leading-tight">
            Advanced Digital Smart Menu,
            <span className="text-[#FF5500]">
              QR Code Solutions for Restaurants
            </span>
          </h1>

          {openModal && <Opening onClose={toggleModal} />}

          <p className="text-paragraphColor text-base font-poppins">
            Unlock Your Restaurant With Digital Ordering!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-1">
            <button
              smooth={true}
              to="form"
              className="bg-gray-700 text-white cursor-pointer font-poppins text-nowrap font-nunito p-3 rounded-sm"
            >
              Take Free Demo
            </button>
          </div>
        </div>

        <div className="w-full sm:w-1/3">
          <img className="w-full" src="/hero.png" alt="Hero Image" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Hero;
