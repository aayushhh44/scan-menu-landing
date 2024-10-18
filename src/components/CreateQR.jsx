import React from "react";

const CreateQR = () => {
  return (
    <div className="p-6 sm:px-32 sm:pt-24">
        <h1 className="text-3xl sm:text-4xl font-bold py-8 text-gray-700 text-center">
          Scan the QR code to preview your Menu
        </h1>
      <div className="bg-[#92b555] rounded-xl p-4">
        <div className="flex justify-center items-center p-4">
            <div>
                <img className="h-52 object-contain" src="https://www.menutiger.com/_next/static/media/qr_code_scan.9237a00c.svg" alt="" />
            </div>

            <div>
                <img className="h-96 object-contain" src="https://www.menutiger.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmenu_moblie_view.0f682208.webp&w=750&q=75" alt="" />
            </div>

        </div>

        <div className="flex flex-col items-center gap-6">

        <p className="text-center font-poppins text-gray-800">Our smart digital menu for restaurants is powered by technology that has <br />been used in the hospitality business since 2018</p>


        <button className="bg-[#FE8A42] w-60 font-poppins text-sm sm:w-96 p-3 rounded-md text-white ">Create QR code menu for your Restaurant</button>
        </div>
      </div>
    </div>
  );
};

export default CreateQR;
