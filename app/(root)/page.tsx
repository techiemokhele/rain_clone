"use client";

import CallToActionComponent from "@/components/sections/CallToActionComponent";
import HomePageHeroComponent from "@/components/sections/HomePageHeroComponent";
import SliderComponent from "@/components/sections/SliderComponent";
import MobileSimCardComponent from "@/components/sections/MobileSimCardComponent";
import RainGoComponent from "@/components/sections/RainGoComponent";
import RouterOptionComponent from "@/components/sections/RouterOptionComponent";
import SimDealComponent from "@/components/sections/SimDealComponent";

import {
  artCollectionRouterData,
  rainCollectionRouterData,
} from "../../components/assets/routerOptionData";

const HomePage = () => {
  const stepData = [artCollectionRouterData, rainCollectionRouterData];

  return (
    <div className="container mx-auto flex flex-col h-auto w-full pb-24">
      {/* Hero Section */}
      <div className="mt-[115px] lg:mt-[122px]">
        <HomePageHeroComponent />
      </div>

      {/* Slider Section */}
      <div className="mt-28 lg:mt-32 -z-50">
        <SliderComponent isHomePage={true} />
      </div>

      {/* Sim Deal Section */}
      <div className="my-[60px] lg:mt-[90px]">
        <SimDealComponent
          isWork={false}
          logo={"/images/logo/rainone-logo.svg"}
          productImage={"/images/products/rainOne-home-stone.png"}
          type="home"
          simCount={2}
          price={595}
        />
      </div>

      {/* Router Option Section */}
      <div className="mt-[10px] -mb-1 lg:mb-5 lg:mt-[40px]">
        <RouterOptionComponent
          stepData={stepData}
          sellingRouter={false}
          adOneImage="/images/products/Lifestyle1.png"
          adTwoImage="/images/products/Lifestyle2.png"
        />
      </div>

      {/* Mobile Sim Deal Section */}
      <div className="mt-4 lg:mt-6">
        <MobileSimCardComponent
          isWork={false}
          startingText="you get"
          endingText="calls & data every month"
          simCount={2}
          image="/images/products/4g-mobile-sim2.png"
        />
      </div>

      {/* Rain Go Section */}
      <div className="mt-[10px] lg:mt-6 -z-50">
        <RainGoComponent />
      </div>

      {/* CTA Section */}
      <CallToActionComponent />
    </div>
  );
};

export default HomePage;
