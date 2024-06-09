import RouterOptionComponent from "@/components/sections/RouterOptionComponent";

const SkinSelectorPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-[90px]">
      <div className="w-full flex flex-col px-[15px] items-center justify-center">
        <p className="text-blue-600 text-[26px] lg:text-[48px] text-center">
          <span className="font-bold">step 1</span>: pick your{" "}
          <span className="font-bold">101 skin&trade;</span>
        </p>

        <p className="text-blue-600 text-[18px] leading-none mt-1 lg:text-[48px] text-center">
          You get a free <span className="font-bold">101 skin&trade;</span>.
          It's easy to stick on and peel off.
        </p>
      </div>

      <div className="mt-[10px] -mb-1 lg:mb-5 lg:mt-[40px]">
        <RouterOptionComponent />
      </div>
    </div>
  );
};

export default SkinSelectorPage;
