import CallToActionComponent from "@/components/common/CallToActionComponent";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* CTA Section */}
      <div className="flex justify-center items-center">
        <CallToActionComponent />
      </div>
    </div>
  );
};

export default HomePage;
