"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomButtonComponent from "../common/CustomButtonComponent";
import RequestACallComponent from "./RequestACallComponent";

const CallToActionComponent = () => {
  const router = useRouter();
  const [requestACall, setRequestACall] = useState(false);

  return (
    <>
      <div className="fixed self-center bottom-14 px-4 py-2 bg-white rounded-full shadow-xl z-10">
        <div className="flex flex-row justify-between items-center">
          {/* Text section */}
          <div className="hidden sm:flex items-center mr-6">
            <p className="text-blue-600 text-[16px]">
              rain<span className="font-semibold">one</span> for{" "}
              <span className="font-semibold">home</span> &{" "}
              <span className="font-semibold">phones</span>
            </p>
          </div>

          {/* Button section */}
          <div className="flex flex-row items-center">
            <div className="mr-2">
              <CustomButtonComponent
                text="request a call"
                onClick={() => setRequestACall(true)}
                outline={true}
                normal={false}
                type="button"
              />
            </div>
            <div>
              <CustomButtonComponent
                text="buy now"
                onClick={() => router.push("/purchase/salesman")}
                outline={false}
                normal={true}
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

export default CallToActionComponent;
