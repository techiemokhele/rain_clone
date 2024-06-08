"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const GoogleMapComponent = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col space-y-10">
      {/* Google Map TextInput */}
      <div
        className={`w-[200px] lg:w-[71%] ml-7 lg:ml-0 mt-4 mb-9 relative ${
          isFocused
            ? "border-blue-500 border-b-[2px]"
            : "border-gray-300 border-b-[1px]"
        }`}
      >
        <input
          type="text"
          className={`w-full border-none outline-none py-1 pl-8 ${
            isFocused ? "text-blue-600" : ""
          }`}
          placeholder="search address"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <span className="absolute inset-y-0 left-0 flex items-center">
          <CiSearch className="text-blue-600 size-7" />
        </span>
      </div>

      {/* Static Google Map Finder */}
      <div>
        <div className=" absolute bottom-[90px] lg:bottom-[140px] left-8 w-[190px] flex flex-row justify-between items-center px-2 py-[8px] rounded-md bg-white">
          <div className="w-1/2 flex flex-row space-x-2 items-center">
            <span className="w-5 h-5 rounded-full bg-blue-600"></span>
            <p className="text-blue-600 text-[10px] font-bold">5G home</p>
          </div>

          <div className="w-1/2 flex flex-row space-x-2 items-center">
            <span className="w-5 h-5 rounded-full bg-blue-400"></span>
            <p className="text-blue-600 text-[10px] font-bold">4G home</p>
          </div>
        </div>

        <iframe
          title="google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.9965955289367!2d18.418570115287203!3d-33.9094675806538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676bd8990b23%3A0x2494c17f4c0b4095!2s1st%20floor%2C%20Rain%20Office%2C%20Cape%20Quarter%20Lifestyle%20Village%2C%2027%20Somerset%20Rd%2C%20Green%20Point%2C%20Cape%20Town%2C%208001%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1668712403000!5m2!1sen!2sza!q=27+Somerset+Rd%2C+Green+Point%2C+Cape+Town%2C+8001!15sCg9zIGxvdmU!4m2!3d-33.9094676!4d18.4185701"
          width="auto"
          height="auto"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full h-[500px] lg:h-[600px]"
        ></iframe>

        <p className="text-blue-600 font-medium m-2">disclaimer</p>
      </div>
    </div>
  );
};

export default GoogleMapComponent;
