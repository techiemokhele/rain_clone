"use client";

import { IoIosClose } from "react-icons/io";
import { formConfirmationProps } from "@/types";

import CustomButtonComponent from "../common/CustomButtonComponent";

const FormConfirmationComponent = ({
  name,
  onClose,
}: formConfirmationProps) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="absolute bg-white rounded-3xl px-6 py-6 w-[95%] lg:w-[50%]">
        {/* Close Section */}
        <div className="w-full flex justify-end">
          <button
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
          >
            <IoIosClose className="text-gray-600 size-6" />
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-blue-600 text-[36px] font-bold text-center mt-4">
            thank you, {name}!
          </p>

          <div className=" w-80 lg:w-[70%] mt-4 flex justify-center items-center">
            <p className="text-gray-500 text-[16px] font-medium text-center">
              We've received your ticket. An agent will contact you as soon as
              they are available.
            </p>
          </div>

          <div className="w-28 lg:w-32 flex justify-center mt-8">
            <CustomButtonComponent
              type="button"
              text="got it"
              onClick={onClose}
              outline={false}
              normal={true}
              hover={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormConfirmationComponent;
