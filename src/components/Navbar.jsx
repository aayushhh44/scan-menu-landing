import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const NavFunction = () => {
    setNav(!nav);
  };

  console.log(nav);

  return (
    <div className="">
      <div className="flex justify-between px-40 py-6 items-center shadow-sm">
        {/* <h2 className='text-2xl text-headingColor'>TmBill Nepal</h2> */}

        <img className="w-36" src="/logo.png" alt="Logo" />

        <GiHamburgerMenu
          size={30}
          className="sm:hidden"
          onClick={NavFunction}
        />

        {nav ? (
          <div className="flex flex-col">
            <p className="font-poppins hover:text-hoverColor cursor-pointer">
              Home
            </p>
            <p className="font-poppins hover:text-hoverColor cursor-pointer">
              About
            </p>
            <p className="font-poppins hover:text-hoverColor cursor-pointer">
              Clients
            </p>
            <p className="font-poppins hover:text-hoverColor cursor-pointer">
              Pricing
            </p>
            <p className="font-poppins hover:text-hoverColor cursor-pointer">
              Get Started
            </p>
          </div>
        ) : (
          <div className="hidden sm:flex space-x-6">
            <p className="font-nunito hover:text-hoverColor cursor-pointer">
              Home
            </p>
            <p className="font-nunito hover:text-hoverColor cursor-pointer">
              About
            </p>
            <p className="font-nunito hover:text-hoverColor cursor-pointer">
              Clients
            </p>
            <p className="font-nunito hover:text-hoverColor cursor-pointer">
              Pricing
            </p>
            <p className="font-nunito hover:text-hoverColor cursor-pointer">
              Get Started
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
