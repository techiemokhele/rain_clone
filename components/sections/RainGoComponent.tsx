"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButtonComponent from "../common/CustomButtonComponent";

const RainGoComponent = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col lg:flex-row w-full h-full lg:px-[140px] px-3">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full md:flex lg:flex-col p-4 lg:p-8 bg-gray-200 rounded-3xl mb-6 lg:mb-0 lg:mr-6">
        {/* Top Section */}
        <div className="flex flex-row px-0 lg:px-0 lg:mb-8 mb-0">
          <div className="mb-4 lg:mb-0 lg:mr-4 flex flex-col justify-center items-start">
            <Image
              src="/images/logo/rainGO-logo.svg"
              alt="rainGO-logo"
              width={50}
              height={50}
              className="w-36 h-auto"
            />
            <p className="text-[30px] text-blue-600 mt-3 text-start lg:w-80">
              <span className="font-semibold">buy more </span>
              data & minutes on the go
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/images/rainGOPhone-8.png"
              alt="rainGoPhone-8-image"
              width={500}
              height={300}
              className="w-full h-84 lg:h-72 object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-center">
          <p
            className="text-[13px] text-blue-600 underline cursor-pointer mt-6 lg:mt-0"
            onClick={() => router.push("/legal")}
          >
            Ts & Cs apply.
          </p>

          <div className="mt-4 lg:mt-0">
            <CustomButtonComponent
              text="go to rainGo"
              onClick={() => router.push("/")}
              normal={true}
              outline={false}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full h-72 rounded-3xl overflow-hidden lg:h-auto relative">
        <Image
          src="/images/geforce-banner.jpg"
          alt="Right Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        <Image
          src="/images/geforce.svg"
          alt="RainOne Logo"
          width={200}
          height={100}
          className="w-32 h-auto absolute top-8 left-4"
        />

        <p className="text-white text-[16px] absolute top-16 left-4">
          GeForce NOW <br />
          <span className="font-bold">powered by rain</span>
        </p>

        <button className="absolute bottom-4 right-4 bg-white text-blue-600 font-medium text-[12px] p-2 px-4 rounded-full hover:opacity-65">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default RainGoComponent;
