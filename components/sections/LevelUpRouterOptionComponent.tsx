"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import levelUpRouterData from "../assets/levelUpRouterData.json";
import { LevelUpRouterProps } from "@/types";

import CustomButtonComponent from "../common/CustomButtonComponent";
import RequestACallComponent from "./RequestACallComponent";

const LevelUpRouterOptionComponent = () => {
  const router = useRouter();

  const [requestACall, setRequestACall] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <>
      <div className="flex flex-col px-6">
        <div className="flex flex-col lg:flex-row flex-wrap">
          {levelUpRouterData.map((data: LevelUpRouterProps) => (
            <div
              key={data.id}
              className={
                "flex flex-col rounded-xl min-h-[65vh] w-full bg-[#fafafa] lg:mb-6 lg:w-[22%] lg:mx-4 mb-4 lg:my-0 shadow-xl" +
                (selectedItem === data.id ? "border-2 border-blue-950" : "") +
                " transition-transform duration-300"
              }
              onClick={() => setSelectedItem(data.id)}
            >
              {/* Title Section */}
              <div className="flex justify-center items-center rounded-t-xl h-[52px] bg-blue-600">
                <p className="text-white text-[20px]">
                  {data.title ? (
                    data.title
                  ) : (
                    <>
                      on rain<span className="font-bold">one</span>
                    </>
                  )}
                </p>
              </div>

              {/* Benefits Section */}
              <div className="px-4 pt-4 flex flex-col">
                {/* Your Benefit */}
                <div className="flex flex-col">
                  <p className="text-gray-400 text-[16px]">your</p>
                  <p className="text-blue-600 text-[16px] font-bold">
                    {data.yourBenefit}
                  </p>
                </div>

                {/* Get Benefits */}
                <div className="flex flex-col mt-5">
                  <p className="text-gray-400 text-[16px]">each get</p>
                  <p className="text-blue-600 text-[16px] font-bold">
                    {data.getBenefits}
                  </p>
                  <p className="text-blue-500 text-[16px] font-thin">
                    every month
                  </p>
                </div>

                {/* Separator */}
                <div className="w-full border-b-[1px] border-gray-200 mt-10"></div>

                {/* Render content based on item */}
                {data.id === 1 ? (
                  // Content for selected item
                  <>
                    <div className="mt-5">
                      <p className="text-gray-400 text-[16px] font-medium">
                        You get 5 free mobile SIMs with{" "}
                        <span className="text-blue-600 font-thin">rain</span>
                        <span className="text-blue-600 font-bold">
                          one work
                        </span>
                        . Put them in your phones & enjoy FREE calls and data
                        every month.
                      </p>
                    </div>

                    <div className="flex justify-center items-center mt-5">
                      <p className="text-blue-600 text-[24px] font-bold">
                        FREE
                      </p>
                    </div>
                  </>
                ) : (
                  // Content for other items
                  <div className="flex justify-center">
                    <div className="w-[60px] h-[60px] bg-blue-600 rounded-full mt-16 flex items-center justify-center">
                      <p className="text-white text-[36px] font-medium">
                        {data.id - 1}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="flex mt-[165px] lg:mt-0 mb-[94px]">
          {/* Desktop Buttons */}
          <div className="hidden md:flex justify-end w-full">
            <div className="flex flex-row justify-end w-1/2 items-end space-x-3">
              <CustomButtonComponent
                text="request a call"
                onClick={() => setRequestACall(true)}
                normal={false}
                hover={false}
                outline={true}
                type="button"
              />

              <CustomButtonComponent
                text="skip"
                onClick={() => router.push("/cart")}
                normal={false}
                hover={false}
                outline={true}
                type="button"
              />

              <CustomButtonComponent
                text="next"
                onClick={() => router.push("/cart")}
                normal={true}
                hover={false}
                outline={false}
                type="button"
              />
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:block lg:hidden flex flex-wrap lg:flex-row w-full space-x-3">
            <div className="flex flex-row w-full space-x-3 mb-3">
              <CustomButtonComponent
                text="skip"
                onClick={() => router.push("/cart")}
                normal={false}
                hover={false}
                outline={true}
                type="button"
              />

              <CustomButtonComponent
                text="next"
                onClick={() => router.push("/cart")}
                normal={true}
                hover={false}
                outline={false}
                type="button"
              />
            </div>

            <CustomButtonComponent
              text="request a call"
              onClick={() => setRequestACall(true)}
              normal={false}
              hover={false}
              outline={true}
              type="button"
            />
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

export default LevelUpRouterOptionComponent;
