import ManageAccountComponent from "@/components/sections/ManageAccountComponent";
import MyRainBannerComponent from "@/components/sections/MyRainBannerComponent";

const MyRainPage = () => {
  return (
    <div className="flex flex-col h-auto w-full pb-10">
      {/* My Rain Banner Section */}
      <div className="container mx-auto mt-20 lg:mt-40">
        <MyRainBannerComponent />
      </div>

      {/* Manage Account Section */}
      <div className="mt-2 lg:mt-16">
        <ManageAccountComponent />
      </div>
    </div>
  );
};

export default MyRainPage;
