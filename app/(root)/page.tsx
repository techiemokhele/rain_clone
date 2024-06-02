import CallToActionComponent from "@/components/common/CallToActionComponent";
import HomePageHeroComponent from "@/components/sections/HomePageHeroComponent";
import HomeSliderComponent from "@/components/sections/HomeSliderComponent";
import RainGoComponent from "@/components/sections/RainGoComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col h-auto w-full pb-24">
      {/* Hero Section */}
      <div className="container mx-auto flex justify-center items-center lg:py-16 py-14">
        <HomePageHeroComponent />
      </div>

      {/* Slider Section */}
      <div className="container mx-auto flex justify-center items-center mt-6">
        <HomeSliderComponent />
      </div>

      {/* Rain Go Section */}
      <div className="container mx-auto flex justify-center items-center">
        <RainGoComponent />
      </div>

      {/* CTA Section */}
      <CallToActionComponent />
    </div>
  );
};

export default HomePage;
