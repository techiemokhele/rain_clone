"use client";

import { useRouter } from "next/navigation";
import { IoIosCall } from "react-icons/io";

import CustomButtonComponent from "../common/CustomButtonComponent";

const NeedHelpComponent = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      {/* Call Number Section */}
      <div className="flex flex-col justify-center items-center pt-6 pb-9 bg-[#fbfbfb]">
        <p className="text-gray-400 font-medium">
          If you still need help, please give us a call.
        </p>

        <div className="flex flex-row justify-center items-center mt-6">
          <div className="p-2 border-[1px] border-blue-600 rounded-full">
            <IoIosCall className="text-blue-600 size-7" />
          </div>
          <p className="text-3xl text-blue-600 hover:text-blue-800 ml-2">
            081 610 1000
          </p>
        </div>
      </div>

      {/* Get Help Button Section */}
      <div className="flex flex-col justify-center items-center mt-3">
        <p className="text-3xl text-blue-600 font-semibold">get started</p>

        <div className="w-64 flex flex-row justify-center items-center space-x-6 mt-6">
          <CustomButtonComponent
            text="sign in"
            onClick={() => router.push("/sign-in")}
            normal={true}
            outline={false}
            hover={true}
          />

          <CustomButtonComponent
            text="shop"
            onClick={() => router.push("/")}
            normal={true}
            outline={false}
            hover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NeedHelpComponent;
