import React from 'react'

const Demo = () => {
  return (
    <div id="form" className="p-4">
    <h1 className="text-3xl text-gray-700 font-poppins sm:text-4xl font-bold py-8 text-center">
      Take a Free Demo
    </h1>

    <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row p-6 justify-around">
      <div className="md:w-2/5 w-full ">
        <form  className="">
          <div className="flex flex-col gap-4">
            <input
            //   value={restaurantName}
              required
            //   onChange={(e) => setRestaurantName(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="text"
              placeholder="Restaurant Name"
            />
            <input
              required
            //   value={ownerName}
            //   onChange={(e) => setOwnerName(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="text"
              placeholder="Owner Name"
            />
            <input
              required
            //   value={ownerEmail}
            //   onChange={(e) => setOwnerEmail(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="email"
              placeholder="Owner Email"
            />
            <input
              required
            //   value={ownerNumber}
            //   onChange={(e) => setOwnerNumber(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="number"
              placeholder="Owner Number"
            />
            <input
            //   value={city}
              required
            //   onChange={(e) => setCity(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="text"
              placeholder="Enter City"
            />
            <input
              required
            //   value={address}
            //   onChange={(e) => setAddress(e.target.value)}
              className="p-2 placeholder:font-nunito font-nunito  border focus:outline-none"
              type="text"
              placeholder="Enter Address"
            />
          </div>
          <button
            type="submit"
            className="bg-[#15423C] px-8  py-2 font-nunito  rounded-sm mt-4 flex justify-start text-white"
          >Submit{
            //   loading ? "Submitting...." : "Submit" 
            // Submit
          }
          
          </button>
        </form>
      </div>

      <div className="md:w-2/5 w-full">
        <img src="https://www.tmbill.com/img/tmbill_request_for_demo.png" alt="Image" />
      </div>
    </div>
  </div>
  )
}

export default Demo
