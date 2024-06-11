import GoogleMapComponent from "@/components/sections/GoogleMapComponent";

const OurNetworkPage = () => {
  return (
    <div className="flex flex-col mt-[85px] lg:mt-[100px] px-6 mb-10">
      <p className="text-blue-600 text-[38px] lg:text-[48px] font-extrabold">
        our network
      </p>

      <div className="mt-4">
        <p className="text-blue-600 text-[18px] font-[500]">
          our 4G & 5G home network
        </p>
        <p className="text-[16px] text-gray-500 font-medium">
          Our 4G/5G home network is also fast expanding, with new places added
          each day. If you are not now covered by our home network, please check
          back soon because we are continually striving to increase our coverage
          area.
        </p>
        <p className="text-[16px] text-gray-500 font-medium mt-4">
          Check your home's coverage below.
        </p>
      </div>

      {/* Google Map Section */}
      <div className="mt-8 -z-50">
        <GoogleMapComponent />
      </div>

      <p className="text-[16px] text-gray-400 font-medium mt-6 text-justify">
        This coverage map provides general information and does not guarantee
        actual coverage. While we strive to keep the information accurate and up
        to date, some elements determining coverage change over time, such as
        geography. Other considerations include, but are not limited to, a
        person's habitation in relation to the cellular enabled mobile device
        location, as well as poor radio conditions in a person's local region
        caused by environmental elements beyond rain's control. rain makes no
        guarantees or warranties, either stated or implied, regarding the
        coverage map's completeness, accuracy, reliability, suitability, or
        availability. Factors beyond our control may have an impact on your
        indoor coverage's accuracy of coverage approximation.
      </p>
    </div>
  );
};

export default OurNetworkPage;
