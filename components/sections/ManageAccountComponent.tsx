import Image from "next/image";

const ManageAccountComponent = () => {
  return (
    <section className="w-full flex flex-col">
      {/* Manage Account Section */}
      <div className="flex flex-col lg:flex-row bg-[#e8f5ff] py-0 lg:pt-8 lg:pb-10">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center lg:w-2/3 lg:items-start lg:justify-center text-center lg:text-left lg:order-last">
          <h1 className="text-blue-600 text-[24px] lg:text-[30px] font-bold">
            manage your account
          </h1>
          <p className="w-96 lg:w-full text-gray-600 font-medium mt-[10px]">
            Update your details, view and manage your billing.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center items-center lg:ml-40 lg:w-1/3 lg:justify-start lg:items-start lg:order-first">
          <div className="w-60 h-[165px] lg:w-[340px] lg:h-auto pt-[18px]">
            <Image
              src={"/images/myrain/my_account_VISUAL.svg"}
              alt="my-account-image"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>

      {/* Level Up Section */}
      <div className="flex flex-col lg:flex-row bg-white pb-4 lg:pt-8 lg:pb-10">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center lg:w-2/3 lg:items-start lg:justify-center text-center lg:text-left lg:order-last">
          <h1 className="text-blue-600 text-[24px] lg:text-[30px] font-bold w-96 lg:w-full">
            level up 4G mobile phone lines
          </h1>
          <p className="w-96 lg:w-full text-gray-600 font-medium mt-[10px]">
            Level up to upgrade your plan by adding gigs, minutes & sms.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center items-center lg:ml-40 lg:w-1/3 lg:justify-start lg:items-start lg:order-first">
          <div className="w-60 h-[165px] lg:w-[340px] lg:h-auto pt-[18px]">
            <Image
              src={"/images/myrain/about-my-rain-level-up-icon.png"}
              alt="my-account-image"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>

      {/* Speed Up Section */}
      <div className="flex flex-col lg:flex-row bg-[#e8f5ff] py-0 lg:pt-8 lg:pb-10">
        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center lg:w-2/3 lg:items-start lg:justify-center text-center lg:text-left lg:order-last">
          <h1 className="text-blue-600 text-[24px] lg:text-[30px] font-bold">
            speed up 5G wifi
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-full flex justify-center items-center lg:ml-40 lg:w-1/3 lg:justify-start lg:items-start lg:order-first">
          <div className="w-60 h-[165px] lg:w-[340px] lg:h-auto pt-[18px]">
            <Image
              src={"/images/myrain/speed-up-block.png"}
              alt="my-account-image"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageAccountComponent;
