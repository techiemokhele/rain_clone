"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  artStepCollectionRouterData,
  rainStepCollectionRouterData,
} from "../../../components/assets/routerStepOptionData";

import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import RouterOptionComponent from "@/components/sections/RouterOptionComponent";
import RequestACallComponent from "@/components/sections/RequestACallComponent";

const SkinSelectorPage = () => {
  const router = useRouter();

  const stepData = [artStepCollectionRouterData, rainStepCollectionRouterData];
  const [requestACall, setRequestACall] = useState(false);

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center mt-[90px]">
        <div className="w-full flex flex-col px-[15px] items-center justify-center">
          <p className="text-blue-600 text-[26px] lg:text-[36px] text-center">
            <span className="font-bold">step 1</span>: pick your{" "}
            <span className="font-bold">101 skin&trade;</span>
          </p>

          <p className="text-blue-600 text-[18px] leading-none mt-1 lg:mt-4 lg:text-[22px] text-center">
            You get a free <span className="font-bold">101 skin&trade;</span>.
            It's easy to stick on and peel off.
          </p>
        </div>

        <div className="mt-8 flex justify-center items-center">
          <RouterOptionComponent stepData={stepData} sellingRouter={true} />
        </div>

        {/* Next Step Button */}
        <div className="flex flex-row h-[50px] w-full lg:w-[600px] lg:h-[280px] mb-5 px-3 justify-between items-center space-x-3">
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
              text="next"
              onClick={() => router.push("/speed-up")}
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

export default SkinSelectorPage;
