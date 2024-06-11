import LevelUpRouterOptionComponent from "@/components/sections/LevelUpRouterOptionComponent";

const LevelUpPage = () => {
  return (
    <div className="container mx-auto flex flex-col mt-[90px]">
      {/* Title Section */}
      <div className="w-full flex flex-col px-[35px] lg:px-[30px] items-center justify-center leading-none">
        <p className="text-blue-600 text-[26px] lg:text-[40px] text-center mb-2">
          <span className="font-bold">step 3</span>: level up your mobile
        </p>

        <p className="text-blue-600 text-[22px] leading-tight lg:mt-4 lg:text-[26px] text-center">
          Your 5 mobile lines get 2 gigs & 60 minutes
          <span className="font-bold"> FREE every month </span> If you need
          more,
          <span className="font-bold"> level up </span>for{" "}
          <span className="font-bold">R150</span> a level
        </p>
      </div>

      {/* Level Up Option Section */}
      <div className="mt-[78px] container mx-auto flex flex-col">
        <LevelUpRouterOptionComponent />
      </div>
    </div>
  );
};

export default LevelUpPage;
