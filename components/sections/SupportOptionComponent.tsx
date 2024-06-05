import Image from "next/image";
import { TiMessages } from "react-icons/ti";
import { IoCall } from "react-icons/io5";

const SupportOptionComponent = () => {
  return (
    <section className="flex flex-col lg:flex-row mx-4 lg:mx-0 mt-6 lg:space-x-6">
      {/* Account Section */}
      <div className="h-[318px] w-full lg:w-[460px] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-lg">
        <p className="text-[20px] text-blue-600 font-semibold mb-6">myrain</p>
        <Image
          src={"/images/logo/my-rain-logo.png"}
          alt="myrain-logo"
          width={1000}
          height={1000}
          className="w-[100px] h-[100px] object-contain mb-6"
        />
        <p className="w-40 text-gray-400 text-[16px] text-center font-medium">
          <a className="text-blue-600 underline">Sign in</a> to manage your
          account.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="h-[318px] w-full lg:w-[460px] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-lg">
        <p className="text-[20px] text-blue-600 font-semibold mb-6">FAQs</p>
        <Image
          src={"/images/icons/icon-faq.svg"}
          alt="faq-icon"
          width={1000}
          height={1000}
          className="w-[100px] h-[100px] object-contain mb-6"
        />
        <p className="w-40 text-gray-400 text-[16px] text-center font-medium">
          Check out our FAQs to obtain the answers you need..
        </p>
      </div>

      {/* Account Section */}
      <div className="h-[318px] w-full lg:w-[460px] flex flex-col justify-center items-center mb-5 py-10 shadow-xl rounded-lg">
        <p className="text-[20px] text-blue-600 font-semibold mb-6">call us</p>
        <Image
          src={"/images/icons/icon-call.svg"}
          alt="call-icon"
          width={1000}
          height={1000}
          className="w-[100px] h-[100px] object-contain mb-6"
        />
        <p className="w-40 text-gray-400 text-[16px] text-center font-medium">
          Call{" "}
          <a
            href="tel:0648473363"
            className="text-blue-600 hover:text-blue-800"
          >
            064 837 3363
          </a>{" "}
          to speak with a helpful agent.
        </p>
      </div>
    </section>
  );
};

export default SupportOptionComponent;
