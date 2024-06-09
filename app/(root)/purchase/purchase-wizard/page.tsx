"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import PersonalisePurchaseStepsComponent from "@/components/sections/PersonalisePurchaseStepsComponent";
import RequestACallComponent from "@/components/sections/RequestACallComponent";

const PurchaseWizardPage = () => {
  const router = useRouter();
  const [requestACall, setRequestACall] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-[90px]">
        <div className="w-80 lg:w-full flex flex-col leading-none items-center justify-center">
          {/* Desktop view */}
          <p className="text-blue-600 text-[26px] lg:text-[48px] text-center hidden lg:block">
            Personalise your rain<span className="font-bold">one</span> in{" "}
            <span className="font-bold">3 easy steps</span>
          </p>

          {/* Mobile view */}
          <p className="text-blue-600 text-[26px] lg:text-[48px] text-center block lg:hidden">
            Personalise your
            <br />
            rain<span className="font-bold">one</span> in{" "}
            <span className="font-bold">3 easy steps</span>
          </p>
        </div>

        {/* Steps Section */}
        <div className="mt-6">
          <PersonalisePurchaseStepsComponent />
        </div>

        {/* Next Step Button */}
        <div className="flex flex-row h-[100px] w-full lg:w-[600px] lg:h-[280px] px-6 pt-10 pb-6 lg:pb-2 justify-between items-center space-x-3">
          <div className="flex flex-row w-full space-x-3 lg:absolute lg:w-[400px] lg:right-16 lg:justify-center lg:items-end">
            <CustomButtonComponent
              text="request a call"
              onClick={() => setRequestACall(true)}
              normal={false}
              hover={false}
              outline={true}
              type="button"
            />

            <CustomButtonComponent
              text="get started"
              onClick={() => router.push("/skin-selector")}
              normal={true}
              hover={false}
              outline={false}
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

export default PurchaseWizardPage;
