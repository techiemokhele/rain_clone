"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import CustomButtonComponent from "../common/CustomButtonComponent";

const MyRainBannerComponent = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row mt-6 px-4">
        {/* Logo Section */}
        <div className="flex w-full lg:w-1/3 justify-center items-center">
          <Image
            src={"/images/logo/my-rain-logo.png"}
            alt="my-rain-logo"
            width={1000}
            height={1000}
            className=" w-[195px] h-[195px] object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-[56%] mt-6">
          <h1 className="text-[26px] lg:text-[30px] text-blue-600 font-bold">
            about my rain
          </h1>

          <p className="text-[16px] text-gray-600 font-medium mt-1">
            On my<span className="font-bold">rain</span> you can manage your
            account, level up your 4G mobile phone lines, speed up your 5G wifi
            and stay up-to-date with your bill. With my
            <span className="font-bold">rain</span>, you’re in charge.
          </p>

          <div className="w-36 mt-4">
            <CustomButtonComponent
              text="sign in"
              onClick={() => router.push("/sign-in")}
              normal={true}
              outline={false}
            />
          </div>
        </div>
      </div>
      <div className="mt-[49px] border border-b-[1px] border-gray-300"></div>
    </>
  );
};

export default MyRainBannerComponent;
