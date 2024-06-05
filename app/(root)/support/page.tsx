import SupportOptionComponent from "@/components/sections/SupportOptionComponent";

const SupportPage = () => {
  return (
    <div className="container mx-auto flex flex-col h-auto w-full">
      <div className="mt-[78px] px-12 lg:px-0">
        <p className="text-[24px] text-blue-600 font-semibold">
          we're here to help
        </p>
      </div>

      {/* Support Option Section */}
      <SupportOptionComponent />
    </div>
  );
};

export default SupportPage;
