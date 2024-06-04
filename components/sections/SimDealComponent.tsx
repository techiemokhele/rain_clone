import { SimDealProps } from "@/types";

const SimDealComponent = ({
  isWork,
  logo,
  productImage,
  type,
  simCount,
  price,
}: SimDealProps) => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center lg:px-10 px-4">
      {/* Image column (visible on desktop and tablet) */}
      <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
        {/* Mobile Top View */}
        <div
          className={`sm:hidden flex flex-col items-center ${
            isWork ? "mb-6" : "mb-2"
          }`}
        >
          <img
            src={logo}
            alt="logo"
            width={0}
            height={0}
            className={`${isWork ? "w-[360px] mt-2" : "w-[255px]"} h-1/2 mb-0`}
          />
        </div>

        {/* Desktop Top View */}
        <img
          src={productImage}
          alt="product-image"
          width={1000}
          height={1000}
          className={`${
            isWork ? "w-full lg:w-[550px] mt-0 lg:mt-12" : "w-full"
          }`}
        />
      </div>

      {/* Text column */}
      <div className="w-full sm:w-1/2 px-4 text-start">
        <img
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className={`hidden md:block ${
            isWork ? "w-[380px]" : "w-1/2"
          } md:mb-3 mb-7`}
        />

        <p
          className={`items-start text-[20px] lg:text-[28px] text-blue-600 md:mt-4 ${
            isWork ? "mt-7" : "mt-6"
          }`}
        >
          <span className="font-bold">unlimited </span>5G {type} wifi
          <br /> +<span className="font-bold">FREE </span>monthly calls & data
          for {simCount} phones
        </p>

        <ul className={`list-disc ${isWork ? "mt-4" : "mt-5"} lg:mt-6 px-5`}>
          <li className="text-[18px] text-blue-600 lg:mb-1 mb-0">
            <span className="font-bold">Unlimited</span> 5G {type} wifi
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-1 mb-0">
            <span className="font-bold">the101&trade;</span> 5G smart router
            free-to-use
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-1 mb-0">
            <span className="font-bold">{simCount} FREE</span> 4G mobile SIMs
          </li>
          <li className="text-[18px] text-blue-600 lg:mb-1 mb-0">
            Each SIM comes with:
            <br />
            2GB | 60min | 100sms{" "}
            <span className="font-bold">FREE every month</span>
          </li>
        </ul>

        <p className="text-[60px] lg:text-[60px] font-extrabold text-blue-600 leading-none mt-2">
          R{price}
          <span className="block font-normal text-blue-600 text-[16px] leading-tight">
            month-to-month
          </span>
        </p>
      </div>
    </section>
  );
};

export default SimDealComponent;
