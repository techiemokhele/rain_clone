"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButtonComponent from "../common/CustomButtonComponent";

const RainGoDesktopComponent = () => {
  const router = useRouter();

  return (
    <section className=" flex flex-col lg:flex-row w-full h-full px-2 lg:mb-8 mb-0">
      <div className="w-full lg:h-[500px] md:flex lg:flex-col px-4 pt-[48px] lg:pt-[50px] pb-[45px] lg:p-8 bg-gray-100 rounded-3xl mb-6 lg:mb-0 lg:mr-6">
        {/* Top Section */}
        <div className="flex flex-row lg:mb-8 mb-2">
          {/* Text content */}
          <div className="flex flex-col justify-start items-start lg:mt-8 mb-[100px]">
            <Image
              src="/images/logo/rainGO-logo.svg"
              alt="rainGO-logo"
              width={100}
              height={100}
              className="w-[200px] lg:w-64 h-auto"
            />

            <p className="text-[24px] lg:text-[40px] leading-8 lg:leading-none text-blue-600 mt-5 lg:mt-8 text-start lg:w-[500px] w-56">
              <span className="font-semibold">buy more </span>
              data, minutes & sms, and{" "}
              <span className="font-semibold">assign </span>your mobile SIMs to
              others
            </p>
          </div>

          {/* Image content */}
          <div className="flex w-64 lg:w-full ml-4 lg:ml-0 lg:items-start lg:justify-start">
            <Image
              src="/images/rainGOPhone-11.png"
              alt="rainGoPhone-8-image"
              width={1000}
              height={1000}
              className="lg:h-[400px] lg:w-[400px] lg:object-contain "
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between items-center lg:-mt-16">
          <p
            className="text-[16px] text-blue-600 underline cursor-pointer mt-6 lg:mt-0"
            onClick={() => router.push("/legal")}
          >
            Ts & Cs apply.
          </p>

          <div className="mt-4 lg:mt-0">
            <CustomButtonComponent
              text="go to rainGO"
              onClick={() => router.push("/")}
              normal={true}
              outline={false}
              type="button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RainGoDesktopComponent;
