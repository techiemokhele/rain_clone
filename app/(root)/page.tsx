import CallToActionComponent from "@/components/common/CallToActionComponent";
import HomePageHeroComponent from "@/components/sections/HomePageHeroComponent";
import HomeSliderComponent from "@/components/sections/HomeSliderComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Hero Section */}
      <div className="container mx-auto flex justify-center items-center lg:py-16 py-14">
        <HomePageHeroComponent />
      </div>

      {/* Slider Section */}
      <div className="container mx-auto flex justify-center items-center mt-6">
        <HomeSliderComponent />
      </div>

      {/* CTA Section */}
      <div className="flex justify-center items-center">
        <CallToActionComponent />
      </div>
    </div>
  );
};

export default HomePage;
