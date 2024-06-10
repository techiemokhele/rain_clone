"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import RequestACallComponent from "@/components/sections/RequestACallComponent";

const SpeedUpRouterPage = () => {
  const router = useRouter();

  const [speed, setSpeed] = useState(30);
  const [requestACall, setRequestACall] = useState(false);

  const speeds = [30, 60, 100];

  const setSpeedTo = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return (
    <>
      <div className="md:container md:mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-[90px] lg:mt-[60px]">
        {/* Desktop Router Image Item */}
        <div className="hidden md:block flex-grow lg:flex-grow-0 lg:w-1/1 lg:-ml-[200px]">
          <Image
            src={`/images/products/router_collections/art_collection/cMain1.png`}
            alt="selected-router-image"
            width={3500}
            height={3500}
            className="w-full h-[680px]"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col lg:w-2/1">
          {/* Title Section */}
          <div className="w-full flex flex-col px-[15px] items-center justify-center lg:mt-16">
            <p className="text-blue-600 text-[26px] lg:text-[40px] text-center mb-2">
              <span className="font-bold">step 2</span>: speed up your work wifi
            </p>

            <p className="text-blue-600 text-[18px] leading-tight mt-1 lg:mt-4 lg:text-[26px] text-center">
              You get up to <span className="font-bold">30 Mbps </span> with
              rain
              <span className="font-bold">one.</span>
              <br /> <span className="font-bold">Speed up</span> anytime for{" "}
              <span className="font-bold">R200</span> a level.
            </p>
          </div>

          {/* Speed Up Image */}
          <div className="w-full mt-10 block lg:hidden">
            <Image
              src={`/images/products/router_collections/speed/${speed}.png`}
              alt="speed-image"
              width={3500}
              height={3500}
              className="w-full h-[240px] object-cover"
            />
          </div>

          {/* Speed Up Buttons */}
          <div className="w-full lg:h-[420px] flex flex-row lg:flex-col px-10 justify-between lg:justify-center items-center mt-8 lg:bg-[#f8f9fa] lg:rounded-3xl">
            <p className="text-blue-500 text-[36px] hidden md:block">
              select your speed
            </p>

            <div className="flex flex-row space-x-12 lg:space-x-3 w-full lg:w-auto lg:justify-center lg:items-center lg:mt-10">
              {speeds.map((s) => (
                <div key={s}>
                  <div
                    onClick={() => setSpeedTo(s)}
                    className={`flex flex-col cursor-pointer leading-none shadow-2xl lg:leading-tight w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] justify-center items-center rounded-full border ${
                      speed === s
                        ? "bg-blue-600 text-white border-white border-[4px]"
                        : "bg-white text-gray-400 border-gray-400 lg:shadow-inner"
                    }`}
                  >
                    <p className="hidden md:block font-thin text-[20px]">
                      Up to
                    </p>
                    <p className="font-bold text-[20px]">
                      {s === 100 ? "100+" : s}
                    </p>
                    <p className="font-thin text-[20px]">Mbps</p>
                  </div>

                  <div className="hidden md:block">
                    {speed && s === speed ? (
                      <p className="text-blue-600 text-[26px] text-center leading-tight mt-4">
                        {s === 60 ? (
                          <>
                            +R200 <br /> a month
                          </>
                        ) : s === 100 ? (
                          <>
                            +R400 <br /> a month
                          </>
                        ) : (
                          <>
                            included in <br />
                            rain<span className="font-bold">one</span>
                          </>
                        )}
                      </p>
                    ) : (
                      <p className="mt-10 text-transparent">
                        nothing to show here
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Step Button */}
          <div className="h-[50px] w-full mb-12 mt-4 lg:mt-10 lg:pl-[240px] px-3 justify-between items-center space-x-3">
            <div className="flex flex-row w-full space-x-3 lg:w-[400px] lg:justify-center lg:items-end">
              <CustomButtonComponent
                text="request a call"
                onClick={() => setRequestACall(true)}
                normal={false}
                hover={false}
                outline={true}
                type="button"
              />

              <CustomButtonComponent
                text="next"
                onClick={() => router.push("/")}
                normal={true}
                hover={false}
                outline={false}
                type="button"
              />
            </div>
          </div>
        </div>
      </div>

      {requestACall && (
        <div className="fixed inset-0 z-40 flex justify-center items-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <RequestACallComponent onClose={() => setRequestACall(false)} />
        </div>
      )}
    </>
  );
};

export default SpeedUpRouterPage;
