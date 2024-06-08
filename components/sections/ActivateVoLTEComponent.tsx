import Image from "next/image";
import volteDeviceData from "../assets/volteDeviceData.json";

const ActivateVoLTEComponent = () => {
  return (
    <section className="flex flex-col">
      <div className="mb-3">
        <p className="text-blue-600 text-[22px] font-bold">
          how do I activate VoLTE?
        </p>

        <p className="text-gray-400 text-[16px] font-medium mt-5">
          Here are the general procedures for enabling VoLTE: Go to your
          device's settings menu and pick "Mobile Networks" or a similar option.
        </p>
      </div>

      {/* Activate VoLTE Options */}
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {volteDeviceData.map((item, index) => (
          <div
            key={index}
            className={`${
              index === 2 ? "h-[265px] lg:h-[260px]" : "h-[230px] lg:h-[260px]"
            } lg:w-[385px] px-6 py-4 mb-6 bg-white border-[1px] border-gray-200 rounded-xl`}
          >
            <div className="flex flex-row space-x-4 lg:space-x-5 justify-start items-center">
              <Image
                src={item.logo}
                alt={item.os}
                width={1000}
                height={1000}
                className="h-[50px] w-[50px] object-contain mb-4"
              />

              <p className="text-[16px] text-blue-600 font-bold">{item.os}</p>
            </div>

            <div className="mt-3 px-4">
              {item.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-6 justify-start items-center"
                >
                  <div className="flex rounded-full justify-center items-center bg-blue-600 h-[20px] w-[20px] overflow-hidden">
                    <p className="text-[11px] text-white font-medium">
                      {index + 1}
                    </p>
                  </div>

                  <div>
                    <p className="text-[16px] text-gray-400 font-medium">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivateVoLTEComponent;
