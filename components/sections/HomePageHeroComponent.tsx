"use client";

import { useRouter } from "next/navigation";

const HomePageHeroComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:px-32 px-10">
      {/* Image column (visible on desktop and tablet) */}
      <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
        {/* Mobile View */}
        <div className="sm:hidden flex flex-col items-center mb-4">
          <img
            src="/images/logo/rainOne-logo.svg"
            alt="Image"
            width={0}
            height={0}
            className="w-[220px] h-1/2 mb-4"
          />

          <div className="w-1/2 mb-2">
            <p className="text-[18px] text-blue-600 mb-1 text-center">
              one plan for your<span className="font-bold"> home & phones</span>
            </p>
          </div>
        </div>

        {/* Desktop View */}
        <img
          src="/images/products/rainOne-blueberry.png"
          alt="Image"
          width={300}
          height={300}
          className="w-full"
        />
      </div>

      {/* Text column */}
      <div className="w-full sm:w-1/2 px-4 text-start">
        <img
          src="/images/logo/rainOne-logo.svg"
          alt="Image"
          width={200}
          height={200}
          className="hidden md:block w-1/2 md:mb-3 mb-8"
        />

        <p className="hidden md:block text-[26px] text-blue-600 mb-1">
          one plan for your<span className="font-bold"> home & phones</span>
        </p>

        <p className="md:items-start items-start text-[13px] text-blue-600 mb-1 md:mt-0 mt-5">
          <span className="font-bold">unlimited </span>5G home wifi +
          <span className="font-bold">FREE </span>monthly calls & data for 2
          phones & <span className="font-bold">the101</span>&trade; 5G smart
          router free-to-use.
        </p>
        <p
          className="text-[13px] text-blue-600 underline cursor-pointer"
          onClick={() => router.push("/legal")}
        >
          Ts & Cs apply.
        </p>
      </div>
    </div>
  );
};

export default HomePageHeroComponent;
