import Image from "next/image";

const UpgradeCallingComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row pt-2 lg:pt-10 pb-6 bg-[#eaf5fe] px-6">
      {/* Desktop Layout  */}
      <div className="hidden lg:flex lg:w-[20%] flex-col justify-center items-center space-y-4 mt-4 lg:mt-0 lg:justify-center lg:items-center">
        <Image
          src={"/images/devices/Raintalk_icon.svg"}
          alt="raintalk-icon"
          width={1000}
          height={1000}
          className="w-[180px] h-[180px] object-contain"
        />
        <p className="w-36 text-blue-600 text-[16px] font-bold text-center">
          Download from your app store.
        </p>
      </div>

      {/* Mobile Layout  */}
      <div className="lg:w-[80%] flex flex-col py-2">
        <p className="text-[24px] text-blue-600 font-bold mb-1">
          Upgrade your calling experience with raintalk!
        </p>

        <p className="text-blue-600 text-[16px] font-medium mb-4">
          An exclusive service available solely to rain
          <span className="font-bold">one</span> mobile customers.
        </p>

        <p className="text-blue-600 text-[16px] font-medium">
          rain's new 4G-only mobile network does not rely on outmoded 2G or 3G
          technology, allowing rain<span className="font-bold">one</span>{" "}
          subscribers to experience high-definition calling using VoLTE
          technology. If your mobile device is not VoLTE compliant, you can
          still use raintalk to make HD calls without upgrading your smartphone.
          raintalk is now unavailable for iOS. Most iPhones support VoLTE.
        </p>

        <div className="md:hidden flex flex-row space-x-6 mt-4 items-center">
          <Image
            src={"/images/devices/Raintalk_icon.svg"}
            alt="raintalk-icon"
            width={1000}
            height={1000}
            className="w-[90px] h-[90px] object-contain"
          />

          <p className="w-56 text-blue-600 text-[16px] font-bold">
            Download from your app store.
          </p>
        </div>

        <div className="flex flex-row space-x-6 mt-4">
          <Image
            src={"/images/devices/Google_Play.svg"}
            alt="google-play-icon"
            width={1000}
            height={1000}
            className="w-[170px] h-[60px] object-contain cursor-pointer"
          />

          <Image
            src={"/images/devices/App_Gallery.svg"}
            alt="app-gallery-icon"
            width={1000}
            height={1000}
            className="w-[170px] h-[60px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default UpgradeCallingComponent;
