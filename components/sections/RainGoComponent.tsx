"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButtonComponent from "../common/CustomButtonComponent";

const RainGoComponent = () => {
  const router = useRouter();

  return (
    <div className=" flex flex-col lg:flex-row w-full h-full px-2 lg:mb-8 mb-0">
      {/* Left Section */}
      <div className="lg:w-2/3 w-full lg:h-[500px] md:flex lg:flex-col px-4 pt-[60px] pb-[45px] lg:p-8 bg-gray-100 rounded-3xl mb-6 lg:mb-0 lg:mr-6">
        {/* Top Section */}
        <div className="flex flex-row lg:mb-8 mb-4">
          {/* Text content */}
          <div className="flex flex-col justify-start items-start lg:mt-8 mt-0">
            <Image
              src="/images/logo/rainGO-logo.svg"
              alt="rainGO-logo"
              width={100}
              height={100}
              className="w-48 lg:w-64 h-auto"
            />

            <p className="text-[34px] lg:text-[55px] leading-9 lg:leading-none text-blue-600 mt-8 text-start lg:w-80 w-48">
              <span className="font-semibold">buy more </span>
              data & minutes on the go
            </p>
          </div>

          {/* Image content */}
          <div className="flex w-full ml-16 lg:items-center lg:justify-end">
            <Image
              src="/images/rainGOPhone-8.png"
              alt="rainGoPhone-8-image"
              width={1000}
              height={1000}
              className="object-contain lg:h-[360px] lg:w-full"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-center">
          <p
            className="text-[16px] text-blue-600 underline cursor-pointer mt-6 lg:mt-0"
            onClick={() => router.push("/legal")}
          >
            Ts & Cs apply.
          </p>

          <div className="mt-4 lg:mt-0">
            <CustomButtonComponent
              text="go to rainGO"
              onClick={() => router.push("/")}
              normal={true}
              outline={false}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full h-[500px] rounded-3xl overflow-hidden relative">
        <Image
          src="/images/geForceNowSide3.png"
          alt="Right Image"
          width={1500}
          height={1500}
          className="w-full h-full object-cover"
        />

        <div className="absolute top-8 left-4">
          <Image
            src="/images/geforce.svg"
            alt="RainOne Logo"
            width={200}
            height={100}
            className="w-56 lg:w-72 h-auto"
          />

          <p className="text-white text-[30px] leading-7 mt-8 lg:top-28">
            GeForce NOW <br />
            <span className="font-bold">powered by rain</span>
          </p>
        </div>

        <button className="absolute bottom-8 right-4 bg-white text-blue-600 font-medium text-[16px] py-4 px-12 rounded-full hover:opacity-65">
          join now
        </button>
      </div>
    </div>
  );
};

export default RainGoComponent;
