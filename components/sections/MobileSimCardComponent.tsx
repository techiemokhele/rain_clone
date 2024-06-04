"use client";

import { MobileSimProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MobileSimCardComponent = ({
  isWork,
  startingText,
  endingText,
  simCount,
  image,
}: MobileSimProps) => {
  const router = useRouter();

  return (
    <section className="flex flex-col md:flex-row justify-between items-center mx-2 px-6 py-[10px] rounded-3xl bg-gray-100">
      {/* Text section for mobile */}
      <div
        className={`md:w-1/2 w-full ${isWork ? "pt-4 pb-2" : "py-3"} lg:py-1`}
      >
        <p
          className={`w-[350px] lg:w-full ${
            isWork ? "text-[22px]" : "text-[24px]"
          } lg:text-[40px] text-blue-600`}
        >
          {isWork ? (
            <>
              <span className="font-bold">{startingText}</span> with{" "}
            </>
          ) : (
            startingText
          )}{" "}
          <span className="font-bold">FREE</span> {endingText}
        </p>

        <ul className="list-disc mt-2 lg:mt-6 px-5">
          <li className="text-[18px] text-blue-600 lg:mb-3 mb-0">
            <span className="font-bold">{simCount} FREE</span> 4G mobile SIMs
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-3 mb-0">
            Each SIM comes with:
            <br />
            2GB | 60min | 100sms{" "}
            <span className="font-bold">FREE every month</span>
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-3 mb-0">
            National 4G mobile coverage
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-3 mb-0">
            HD voice calls with VoLTE
          </li>
        </ul>

        {/* Terms and conditions and image */}
        <div className="flex justify-between mt-4 ml-6">
          <p
            className="mt-36 lg:mt-0 text-[16px] w-full text-blue-600 underline cursor-pointer"
            onClick={() => router.push("/legal")}
          >
            Ts & Cs apply.
          </p>
          <div className="md:hidden flex justify-end w-full">
            <Image
              src={image}
              width={200}
              height={200}
              alt="4g mobile sim card"
              className="mt-2 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Image section for tablet and desktop */}
      <div className="hidden md:block md:w-1/2 w-full mt-10">
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="4g mobile sim card"
          className="w-full h-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default MobileSimCardComponent;
