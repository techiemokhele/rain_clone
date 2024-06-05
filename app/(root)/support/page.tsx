import { TiMessages } from "react-icons/ti";

import SupportOptionComponent from "@/components/sections/SupportOptionComponent";
import FAQComponent from "@/components/sections/FAQComponent";
import NeedHelpComponent from "@/components/sections/NeedHelpComponent";

const SupportPage = () => {
  return (
    <div className="container mx-auto lg:mx-[25px] flex flex-col h-auto w-full">
      <div className="mt-[78px] px-12 lg:px-0">
        <p className="text-[24px] text-blue-600 font-semibold">
          we're here to help
        </p>
      </div>

      {/* Support Option Section */}
      <SupportOptionComponent />

      {/* FAQ Section */}
      <div className="flex flex-row items-center px-4 lg:px-0 mt-4 mb-2">
        <div className="flex justify-center items-center p-[10px] border-[1px] border-blue-600 rounded-full">
          <TiMessages className="text-blue-600 size-7" />
        </div>
        <p className="text-[24px] text-blue-600 font-semibold ml-3">FAQs</p>
      </div>

      <FAQComponent addTitle={false} />

      <div className="mt-14 mb-6">
        <NeedHelpComponent isOnlySignUp={true} />
      </div>
    </div>
  );
};

export default SupportPage;
