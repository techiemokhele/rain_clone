import MyRainBannerComponent from "@/components/sections/MyRainBannerComponent";

const MyRainPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full pb-24">
      {/* Slider Section */}
      <div className="mt-20 lg:mt-32">
        <MyRainBannerComponent />
      </div>
    </div>
  );
};

export default MyRainPage;
