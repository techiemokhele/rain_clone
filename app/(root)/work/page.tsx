import CallToActionComponent from "@/components/sections/CallToActionComponent";
import MobileSimCardComponent from "@/components/sections/MobileSimCardComponent";
import RainGoDesktopComponent from "@/components/sections/RainGoDesktopComponent";
import RouterOptionComponent from "@/components/sections/RouterOptionComponent";
import SimDealComponent from "@/components/sections/SimDealComponent";
import SliderComponent from "@/components/sections/SliderComponent";

const WorkPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full pb-24">
      {/* Slider Section */}
      <div className="mt-20 lg:mt-32 -z-50">
        <SliderComponent isHomePage={false} isWorkPage={true} />
      </div>

      {/* Sim Deal Section */}
      <div className="mb-[60px] mt-[40px] lg:mt-[90px]">
        <SimDealComponent
          isWork={true}
          logo={"/images/logo/rainOne-work-logo.svg"}
          productImage={"/images/products/rainOne-work-silver.png"}
          type="work"
          simCount={5}
          price={795}
        />
      </div>

      {/* Router Option Section */}
      <div className="mt-[10px] -mb-1 lg:mb-5 lg:mt-[40px]">
        <RouterOptionComponent
          adOneImage="/images/products/lifestyle_01_Work.jpg"
          adTwoImage="/images/products/lifestyle_02_Work.jpg"
        />
      </div>

      {/* Mobile Sim Deal Section */}
      <div className="mt-4 lg:mt-6">
        <MobileSimCardComponent
          isWork={true}
          startingText="keep collaborating"
          endingText="calls & data for 5 phones"
          simCount={5}
          image="/images/products/4g-mobile-sim.png"
        />
      </div>

      {/* Rain Go Section */}
      <div className="mt-[10px] lg:mt-6">
        <RainGoDesktopComponent />
      </div>

      {/* CTA Section */}
      <CallToActionComponent />
    </div>
  );
};

export default WorkPage;
