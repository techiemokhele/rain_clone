import Image from "next/image";

const PersonalisePurchaseStepsComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-2 lg:mt-20 px-6 space-x-0 lg:space-x-4">
      {/* Step 1 */}
      <div className="bg-[#f4f7f9] flex flex-row lg:flex-col w-full h-[138px] lg:w-[400px] lg:h-[470px] py-4 pr-6 rounded-3xl mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-center items-center">
          <Image
            src={"/images/products/steps/wizard-step-1.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[115px] w-[110px]"
          />
        </div>

        <div className="w-[53%] lg:w-full flex flex-col lg:px-4 lg:pt-10 lg:order-0">
          {/* Desktop Layout */}
          <p className="text-blue-600 text-[18px] lg:text-[26px] leading-none font-thin lg:pt-0 lg:px-4">
            step 1: pick the colour of your FREE{" "}
            <span className="font-bold">101 skin</span>
          </p>

          <div className="hidden lg:py-6 lg:flex justify-center items-center mt-[40px]">
            <Image
              src={"/images/products/steps/wizard-step-1.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[280px] lg:w-[280px]"
            />
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-[#f4f7f9] flex flex-row lg:flex-col w-full h-[138px] lg:w-[400px] lg:h-[470px] py-4 pr-5 rounded-3xl mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-center items-center">
          <Image
            src={"/images/products/steps/wizard-step-2.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[90px] w-[140px]"
          />
        </div>

        <div className="w-[53%] lg:w-full flex flex-col lg:px-4 lg:pt-10 lg:order-0">
          {/* Desktop Layout */}
          <p className="text-blue-600 text-[18px] lg:text-[26px] leading-none font-thin lg:pt-0 lg:px-4">
            step 2:
            <span className="font-bold"> speed up</span> your wifi if you want
          </p>

          <div className="hidden lg:py-6 lg:flex lg:justify-center lg:items-end lg:mt-[130px]">
            <Image
              src={"/images/products/steps/wizard-step-2.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[180px] lg:w-[290px]"
            />
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-[#f4f7f9] flex flex-row lg:flex-col w-full h-[138px] lg:w-[400px] lg:h-[470px] py-4 pr-6 rounded-3xl mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-center items-center">
          <Image
            src={"/images/products/steps/wizard-step-3.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[135px] w-[130px]"
          />
        </div>

        <div className="w-[53%] lg:w-full flex flex-col lg:px-4 lg:pt-10 lg:order-0">
          {/* Desktop Layout */}
          <p className="text-blue-600 text-[18px] lg:text-[26px] leading-none font-thin lg:pt-0 lg:px-4">
            step 3: level up your monthly the colour of your FREE{" "}
            <span className="font-bold">gigs & minutes </span>for mobile
          </p>

          <div className="hidden lg:py-6 lg:flex lg:justify-center lg:items-center">
            <Image
              src={"/images/products/steps/wizard-step-3.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[280px] lg:w-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalisePurchaseStepsComponent;
