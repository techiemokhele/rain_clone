import CallToActionComponent from "@/components/common/CallToActionComponent";
import SliderComponent from "@/components/sections/SliderComponent";

const WorkPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full pb-24">
      {/* Slider Section */}
      <div className="mt-20 lg:mt-32">
        <SliderComponent isHomePage={false} isWorkPage={true} />
      </div>

      {/* CTA Section */}
      <CallToActionComponent />
    </div>
  );
};

export default WorkPage;
