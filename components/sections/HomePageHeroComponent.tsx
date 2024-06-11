"use client";

import { useRouter } from "next/navigation";

const HomePageHeroComponent = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col sm:flex-row items-center justify-center lg:px-10 px-4">
      {/* Image column (visible on desktop and tablet) */}
      <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
        {/* Mobile Top View */}
        <div className="sm:hidden flex flex-col items-center mb-2">
          <img
            src="/images/logo/rainone-logo.svg"
            alt="Image"
            width={0}
            height={0}
            className="w-[255px] h-1/2 mb-4"
          />

          <div className=" w-52 mb-2">
            <p className="text-[24px] text-blue-600 mb-1 text-center">
              one plan for your<span className="font-bold"> home & phones</span>
            </p>
          </div>
        </div>

        {/* Desktop Top View */}
        <img
          src="/images/products/rainOne-blueberry.png"
          alt="Image"
          width={0}
          height={0}
          className="w-full"
        />
      </div>

      {/* Text column */}
      <div className="w-full sm:w-1/2 px-4 text-start">
        <img
          src="/images/logo/rainone-logo.svg"
          alt="Image"
          width={200}
          height={200}
          className="hidden md:block w-1/2 md:mb-3 mb-8"
        />

        <p className="hidden md:block text-[40px] text-blue-600 mb-1 w-96">
          one plan for your<span className="font-bold"> home & phones</span>
        </p>

        <p className="items-start text-[19px] lg:text-[28px] text-blue-600 md:mt-4 mt-9">
          <span className="font-bold">unlimited </span>5G home wifi
          <br /> +<span className="font-bold">FREE </span>monthly calls & data
          for 2 phones & <span className="font-bold">the101</span>&trade; 5G
          smart router free-to-use.
        </p>

        <p
          className="text-[16px] text-blue-600 underline cursor-pointer mt-4"
          onClick={() => router.push("/legal")}
        >
          Ts & Cs apply.
        </p>
      </div>
    </section>
  );
};

export default HomePageHeroComponent;
