const Points4GComponent = () => {
  return (
    <div className="flex flex-col">
      {/* Phone Section */}
      <div className="mb-3">
        <p className="text-blue-600 text-[22px] font-bold">
          how do I get my phone number?
        </p>

        <ul className="list-disc mt-4 px-5 text-gray-400 text-[15px] font-medium">
          <li className="mb-1">
            After you insert your rain 4G mobile phone SIM into your phone, you
            will receive an SMS with your new number.
          </li>

          <li className="mb-1">
            If you do not receive the SMS, you may find your phone number on
            your{" "}
            <a href="/my-rain" className="text-blue-600 cursor-pointer">
              myrain
            </a>{" "}
            page.
          </li>

          <li className="mb-1">
            To maintain your old number, navigate to the port number section of
            your{" "}
            <a href="/my-rain" className="text-blue-600 cursor-pointer">
              myrain
            </a>{" "}
            page.
          </li>
        </ul>
      </div>

      {/* Balance Section */}
      <div className="mb-4">
        <p className="text-blue-600 text-[22px] font-bold">
          how do I check my balance & buy more?
        </p>

        <ul className="list-disc mt-4 px-5 text-gray-400 text-[15px] font-medium">
          <li className="mb-1">
            You can manage your account by visiting my
            <span className="font-bold">rain</span> or SMSing 'balance' to 136.
          </li>

          <li className="mb-1">
            If you run out of your free mobile data, minutes, and text messages,
            you can buy more on the move at{" "}
            <span className="text-blue-600 cursor-pointer">
              rain<span className="font-bold">GO</span>
            </span>
            .
          </li>

          <li className="mb-1">
            These 'buy more' purchases are one-time and do not expire.
          </li>
        </ul>
      </div>

      {/* Network Section */}
      <div className="mb-4">
        <p className="text-blue-600 text-[22px] font-bold">
          rain's mobile network is 4G only with VoLTE for voice calls.
        </p>

        <ul className="list-disc mt-4 px-5 text-gray-400 text-[15px] font-medium">
          <li className="mb-1">
            VoLTE is a technology that allows voice calls to be delivered via a
            4G/LTE network rather than traditional 2G or 3G networks.
          </li>

          <li className="mb-1">It allows you to make high-definition calls.</li>

          <li className="mb-1">Your calls connect faster.</li>

          <li className="mb-1">It uses less battery.</li>
        </ul>
      </div>

      {/* VoLTE Section */}
      <div className="mb-4">
        <p className="text-blue-600 text-[22px] font-bold">
          does my phone have VoLTE?
        </p>

        <ul className="list-disc mt-4 px-5 text-gray-400 text-[15px] font-medium">
          <li className="mb-1">
            Most current 4G/LTE smartphones enable VoLTE.
          </li>

          <li className="mb-1">Check if your software has been updated.</li>

          <li className="mb-1">
            You may also need to enable VoLTE in your phone's settings.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Points4GComponent;
