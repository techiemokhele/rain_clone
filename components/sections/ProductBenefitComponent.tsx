import Image from "next/image";

const ProductBenefitComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-8 lg:space-x-6">
      {/* Unlimited Benefits Section */}
      <div className="flex flex-row lg:flex-col w-full h-[228px] lg:w-[400px] lg:h-[470px] py-6 pr-6 border-[1px] border-gray-200 rounded-2xl shadow-md mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-start items-center">
          <Image
            src={"/images/products/benefits/cpe-screen.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[135px] w-full"
          />
        </div>

        <div className="w-[50%] lg:w-full flex flex-col pt-1">
          <p className="text-blue-600 text-[16px] lg:text-[24px] lg:text-center lg:justify-center lg:items-center leading-tight">
            <span className="font-bold">unlimited</span>
            <br />
            5G home wifi
          </p>

          {/* Desktop Layout */}
          <div className="hidden lg:block lg:py-6">
            <Image
              src={"/images/products/benefits/cpe-screen.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[200px] lg:w-[330px]"
            />
          </div>

          <p className="text-gray-500 text-[14px] lg:text-[16px] font-thin pt-3 lg:pt-0 lg:px-4">
            rain<span className="font-bold">one</span> comes with speeds up to
            <span className="font-medium"> 30Mbps</span>, you can choose to
            speed up to <span className="font-medium">60Mbps</span> or{" "}
            <span className="font-medium">100+Mbps</span> anytime you want.
          </p>
        </div>
      </div>

      {/* Smart Router Benefits Section */}
      <div className="flex flex-row lg:flex-col w-full h-[228px] lg:w-[400px] lg:h-[470px] py-6 pr-6 border-[1px] border-gray-200 rounded-2xl shadow-md mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-center items-center">
          <Image
            src={"/images/products/benefits/cpe-image-home-blueberry.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[140px] w-[145px]"
          />
        </div>

        <div className="w-[53%] lg:w-full flex flex-col pt-1">
          <p className="text-blue-600 text-[16px] lg:text-[24px] lg:text-center lg:justify-center lg:items-center leading-tight">
            <span className="font-bold">the101&trade; 5G smart router</span>
            <br />
            free-to-use
          </p>

          {/* Desktop Layout */}
          <div className="hidden lg:py-6 lg:flex lg:justify-center lg:items-center">
            <Image
              src={"/images/products/benefits/cpe-image-home-blueberry.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[200px] lg:w-[220px]"
            />
          </div>

          <p className="text-gray-500 text-[14px] lg:text-[16px] font-thin pt-3 lg:pt-0 lg:px-4">
            With{" "}
            <span className="font-medium">
              touch screen display, scan to connect & built-in speed test,
            </span>{" "}
            <span className="font-bold"> the101&trade;</span> 5G smart router
            has brains & beauty.
          </p>
        </div>
      </div>

      {/* Free Benefits Section */}
      <div className="flex flex-row lg:flex-col w-full h-[228px] lg:w-[400px] lg:h-[470px] py-6 pr-6 border-[1px] border-gray-200 rounded-2xl shadow-md mb-2">
        {/* Mobile Layout */}
        <div className="lg:hidden w-[46%] flex justify-center items-center">
          <Image
            src={"/images/products/benefits/twin-sim-icon.png"}
            alt="product-one"
            width={1000}
            height={1000}
            className="h-[140px] w-[130px]"
          />
        </div>

        <div className="w-[53%] lg:w-full flex flex-col pt-1">
          <p className="text-blue-600 text-[16px] lg:text-[24px] lg:text-center lg:justify-center lg:items-center leading-tight">
            <span className="font-bold">FREE monthly calls & data</span>
            <br />
            for 2 phones
          </p>

          {/* Desktop Layout */}
          <div className="hidden lg:py-6 lg:flex lg:justify-center lg:items-center">
            <Image
              src={"/images/products/benefits/twin-sim-icon.png"}
              alt="product-one"
              width={1000}
              height={1000}
              className="lg:h-[200px] lg:w-[200px]"
            />
          </div>

          <p className="text-gray-500 text-[14px] lg:text-[16px] font-thin pt-3 lg:pt-0 lg:px-4">
            On rain
            <span className="font-bold">one</span> you get 2 FREE 4G mobile
            SIMs. Each SIM comes with 2GB, 60min & 100sms FREE every month. You
            can buy more anytime on{" "}
            <span className="font-bold underline text-blue-600">rainGO</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefitComponent;
