import FAQComponent from "@/components/sections/FAQComponent";
import ManageAccountComponent from "@/components/sections/ManageAccountComponent";
import MyRainBannerComponent from "@/components/sections/MyRainBannerComponent";
import NeedHelpComponent from "@/components/sections/NeedHelpComponent";

const MyRainPage = () => {
  return (
    <div className="flex flex-col h-auto w-full pb-8">
      {/* My Rain Banner Section */}
      <div className="container mx-auto mt-20 lg:mt-40">
        <MyRainBannerComponent />
      </div>

      {/* Manage Account Section */}
      <div className="mt-2 lg:mt-16">
        <ManageAccountComponent />
      </div>

      {/* FAQ Section */}
      <div className="mt-8 lg:mt-20">
        <FAQComponent />
      </div>

      {/* Need Help Section */}
      <div className="mt-20">
        <NeedHelpComponent />
      </div>
    </div>
  );
};

export default MyRainPage;
