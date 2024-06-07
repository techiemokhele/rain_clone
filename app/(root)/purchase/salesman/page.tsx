import Image from "next/image";

import ProductBenefitComponent from "@/components/sections/ProductBenefitComponent";
import SalesmanFooterComponent from "@/components/sections/SalesmanFooterComponent";

const SalesmanPage = () => {
  return (
    <div className="flex flex-col h-auto w-full mb-[18px] lg:mb-0">
      {/* Header Section */}
      <div className="container mx-auto flex flex-col justify-center items-center mt-16 lg:mt-10">
        <div className="flex flex-row justify-center items-center space-x-2">
          <p className="text-blue-600 text-[26px] lg:text-[46px]">
            welcome to{" "}
          </p>

          <span className="justify-center">
            <Image
              src={"/images/logo/rainone-logo.svg"}
              alt="logo-image"
              width={1000}
              height={1000}
              className="h-[85px] w-[85px] lg:h-[145px] lg:w-[170px] lg:ml-1"
            />
          </span>
        </div>

        <p className="text-[20px] lg:text-[26px] text-blue-600 -mt-5 lg:-mt-7">
          One plan for your{" "}
          <span className="text-blue-600 font-bold">home</span> &{" "}
          <span className="text-blue-600 font-bold">phones.</span>
        </p>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4">
        <ProductBenefitComponent />
      </div>

      {/* Footer Section */}
      <div className="mt-4">
        <SalesmanFooterComponent />
      </div>
    </div>
  );
};

export default SalesmanPage;
