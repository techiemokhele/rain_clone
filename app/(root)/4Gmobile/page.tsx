import Image from "next/image";

import ActivateVoLTEComponent from "@/components/sections/ActivateVoLTEComponent";
import Points4GComponent from "@/components/sections/Points4GComponent";
import UpgradeCallingComponent from "@/components/sections/UpgradeCallingComponent";

const ConnectionMobile = () => {
  return (
    <div className="flex flex-col mt-[85px] lg:mt-[100px]">
      <p className="px-6 text-blue-600 text-[36px] lg:text-[48px] font-extrabold">
        4G mobile
      </p>

      {/* Points Section */}
      <div className="container mx-auto lg:mx-1 mt-6 px-6">
        <Points4GComponent />
      </div>

      {/* Activate VoLTE Section */}
      <div className="container mx-auto lg:mx-1 mt-3 px-6">
        <ActivateVoLTEComponent />
      </div>

      <div className="container mx-auto lg:mx-1 px-6 flex flex-col mt-6 mb-4">
        <p className="text-blue-600 text-[22px] font-bold">
          what if my phone isn't VoLTE compatible ?
        </p>

        <div className="-mt-1 flex flex-row items-center">
          <p className="text-gray-400 font-medium">
            Not a problem! Simply download the{" "}
            <span className="inline-flex items-center">
              <Image
                src={"/images/logo/rain-talk.png"}
                alt="rain-talk-logo"
                width={1000}
                height={1000}
                className="w-[50px] h-[50px] object-cover inline pt-10"
              />
            </span>{" "}
            app. It functions similarly to your phone's built-in phone software,
            allowing you to make high-quality calls.
          </p>
        </div>
      </div>

      {/*Upgrade Calling Section */}
      <div className="mt-3">
        <UpgradeCallingComponent />
      </div>
    </div>
  );
};

export default ConnectionMobile;
