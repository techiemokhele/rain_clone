"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomButtonComponent from "../common/CustomButtonComponent";
import RequestACallComponent from "./RequestACallComponent";

const SalesmanFooterComponent = () => {
  const router = useRouter();

  const [requestACall, setRequestACall] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center pt-5 px-20 bg-[#f8f9fa] py-2">
        {/* Empty space for large devices */}
        <div className="hidden lg:block flex-1"></div>

        {/* Text content */}
        <div className="flex flex-col justify-center items-center lg:flex-1 space-y-1">
          <p className="text-[26px] text-blue-600 font-bold">
            ask for a sales call
          </p>
          <p className="text-[20px] lg:text-[16px] text-gray-500 text-center pt-1 lg:pt-0 ">
            <span className="font-bold">Got questions?</span> Ask one of our
            sales team to call you
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row lg:flex-1 w-full justify-center items-center mt-6 lg:mt-0">
          <div className="w-44 pt-1 lg:pt-0 lg:w-48 mb-8 lg:mb-0">
            <button
              onClick={() => setRequestACall(true)}
              className="py-3 px-8 border-[1px] border-blue-600 bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-full"
            >
              <p>request a call</p>
            </button>
          </div>

          <div className=" w-80 pt-1 lg:pt-0 lg:w-48 mb-8 lg:mb-0">
            <CustomButtonComponent
              text="buy"
              onClick={() => router.push("/purchase/purchase-wizard")}
              outline={false}
              hover={false}
              normal={true}
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

export default SalesmanFooterComponent;
