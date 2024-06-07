import ActivateVoLTEComponent from "@/components/sections/ActivateVoLTEComponent";
import Points4GComponent from "@/components/sections/Points4GComponent";

const ConnectionMobile = () => {
  return (
    <div className="flex flex-col container mx-auto mt-[85px] lg:mt-[100px] px-6">
      <p className="text-blue-600 text-[36px] lg:text-[48px] font-extrabold">
        4G mobile
      </p>

      {/* Points Section */}
      <div className="mt-6">
        <Points4GComponent />
      </div>

      {/* Activate VoLTE Section */}
      <div className="mt-3">
        <ActivateVoLTEComponent />
      </div>
    </div>
  );
};

export default ConnectionMobile;
