import React from "react";

const Plans = () => {
  return (
    <div className="p-8 font-poppins">
      <div className=" rounded-lg p-4">
        <h1  className="text-3xl text-gray-700 font-poppins sm:text-4xl font-bold py-8 text-center">
          We have different plans, please select which one u prefer
        </h1>
        <p className="text-center my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          maiores distinctio exercitationem consequatur nobis in ipsa iste
          repudiandae ex assumenda.
        </p>

        <div className="grid grid-cols-4 gap-4 p-8">
          <div className="border rounded-md p-4">
            <h1 className="leading-8 font-bold text-2xl text-[#FF5500]">1 Month</h1>
            <p className="leading-8">NPR 2,000/ month</p>

            <p className="mt-4">What's included:</p>

            <p>✓ Five free messages per day</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
          </div>

          <div className="border rounded-md p-4">
            <h1 className="leading-8 font-bold text-2xl text-[#FF5500]">3 Months</h1>
            <p className="leading-8">NPR 2,000/ month</p>

            <p className="mt-4">What's included:</p>

            <p>✓ Five free messages per day</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
          </div>

          <div className="border rounded-md p-4">
            <h1 className="leading-8 font-bold text-2xl text-[#FF5500]">6 Months</h1>
            <p className="leading-8">NPR 2,000/ month</p>

            <p className="mt-4">What's included:</p>

            <p>✓ Five free messages per day</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
          </div>

          <div className="border rounded-md p-4">
            <h1 className="font-bold text-2xl text-[#FF5500]">1 Year</h1>
            <p className="leading-8">NPR 2,000/ month</p>

            <p className="mt-4">What's included:</p>

            <p>✓ Five free messages per day</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
            <p className="leading-8">✓ Unlimited public projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
