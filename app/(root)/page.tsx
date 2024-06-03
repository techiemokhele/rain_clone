import CallToActionComponent from "@/components/common/CallToActionComponent";
import HomePageHeroComponent from "@/components/sections/HomePageHeroComponent";
import SliderComponent from "@/components/sections/SliderComponent";
import MobileSimCardComponent from "@/components/sections/MobileSimCardComponent";
import RainGoComponent from "@/components/sections/RainGoComponent";
import RouterOptionComponent from "@/components/sections/RouterOptionComponent";
import SimDealComponent from "@/components/sections/SimDealComponent";

const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full pb-24">
      {/* Hero Section */}
      <div className="mt-[115px] lg:mt-[122px]">
        <HomePageHeroComponent />
      </div>

      {/* Slider Section */}
      <div className="mt-28 lg:mt-32">
        <SliderComponent isHomePage={true} />
      </div>

      {/* Sim Deal Section */}
      <div className="my-[60px] lg:mt-[90px]">
        <SimDealComponent />
      </div>

      {/* Router Option Section */}
      <div className="mt-[10px] -mb-1 lg:mb-5 lg:mt-[40px]">
        <RouterOptionComponent />
      </div>

      {/* Mobile Sim Deal Section */}
      <div className="mt-4 lg:mt-6">
        <MobileSimCardComponent />
      </div>

      {/* Rain Go Section */}
      <div className="mt-[10px] lg:mt-6">
        <RainGoComponent />
      </div>

      {/* CTA Section */}
      <CallToActionComponent />
    </div>
  );
};

export default HomePage;
