import React from "react";

const Features = () => {
  return (
    <div className="p-6 sm:p-10 md:px-32 md:pt-24">
      <div className="bg-[#f1f1f1] rounded-xl p-4">
        <h1 className="text-3xl mb-8 text-gray-700 sm:text-4xl font-bold  py-8 text-center">
          Everything you need to get the kitchen in order
        </h1>
        <div className="grid grid-cols-2 gap-8 sm:gap-16 items-center sm:grid-cols-3 md:grid-cols-5">
          <div className="flex flex-col gap-2 items-center">
            <img className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_1.2f0c7c52.svg"
              alt=""
            />
            <p className="font-poppins text-sm sm:text-base">Ordering Dashboard</p>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <img className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_2.a045e461.svg"
              alt=""
            />
            <p className="font-poppins text-sm sm:text-base">Sales Analytics</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_3.5100844f.svg"
              alt=""
            />
            <p className="font-poppins text-sm sm:text-base">Purchase Analytics</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-13"
              src="https://www.menutiger.com/_next/static/media/feature_4.8069e200.svg"
              alt=""
            />
            <p className="font-poppins text-sm sm:text-base">POS Integration</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_5.d564f966.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">QR Code Menu Creation</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_6.886b65d7.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">
              Customer Order Management
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_7.2bc470e0.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">
              Menu Analytics and Insights
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_8.cf37b7b2.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">Restaurant Branding</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_9.86192d71.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">Customer Feedback</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <img  className="w-16"
              src="https://www.menutiger.com/_next/static/media/feature_1.2f0c7c52.svg"
              alt=""
            />
            <p className="font-poppins text-center text-sm sm:text-base">Multilingual Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
