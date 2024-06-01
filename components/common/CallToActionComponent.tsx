"use client";

import { useRouter } from "next/navigation";
import CustomButtonComponent from "./CustomButtonComponent";

const CallToActionComponent = () => {
  const router = useRouter();

  return (
    <div className="absolute bottom-10 px-4 py-2 bg-white rounded-full shadow-xl">
      <div className="flex flex-row justify-between items-center">
        {/* Text section */}
        <div className="hidden sm:flex items-center mr-6">
          <p className="text-blue-600 text-[14px]">
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
              onClick={() => router.push("/")}
              outline={true}
              normal={false}
            />
          </div>
          <div>
            <CustomButtonComponent
              text="buy now"
              onClick={() => router.push("/")}
              outline={false}
              normal={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionComponent;
