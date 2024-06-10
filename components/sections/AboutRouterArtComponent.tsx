import { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";

import { RouterImageData } from "@/types";
import CustomButtonComponent from "../common/CustomButtonComponent";

const AboutRouterArtComponent = ({
  artImage,
  artAuthor,
  artDescription,
  artMoreInfo,
  onClose,
}: RouterImageData & { onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    onClose();
  };

  useEffect(() => {
    setIsClosing(false);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md lg:max-w-[60%] w-full h-full lg:h-auto overflow-y-auto flex flex-col relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
        >
          <IoIosClose className="text-gray-600 text-lg" />
        </button>

        <div className="flex flex-col lg:flex-row lg:[60%] lg:space-x-6">
          <div className="relative w-[370px] lg:w-1/2 h-[360px] mb-6 mt-4">
            {artImage && (
              <Image
                src={artImage}
                alt="Art Image"
                width={1000}
                height={1000}
                className="w-full h-full object-cover lg:object-contain"
              />
            )}
          </div>

          <div className="lg:flex lg:flex-col lg:lg:w-1/2 lg:justify-center lg:items-start">
            <p className="text-[14px] text-blue-600 font-normal mb-4">
              {artAuthor}
            </p>
            <p className="text-[18px] font-thin text-gray-400 mb-6">
              {artDescription}
            </p>
            <p className="text-[18px] font-thin text-gray-400 mb-6">
              {artMoreInfo}
            </p>
          </div>
        </div>

        <div className="w-full flex items-end justify-end">
          <div className="flex justify-end items-end">
            <CustomButtonComponent
              type="button"
              text="close"
              onClick={handleClose}
              normal={true}
              hover={false}
              outline={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRouterArtComponent;
