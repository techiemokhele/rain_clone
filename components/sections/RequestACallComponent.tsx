// components/RequestACallComponent.tsx

"use client";

import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { RiLoader4Line } from "react-icons/ri";

import CustomInAppTextInputComponent from "../common/CustomInAppTextInputComponent";
import CustomInAppTextAreaComponent from "../common/CustomInAppTextAreaComponent";
import FormConfirmationComponent from "./FormConfirmationComponent";

const RequestACallComponent = ({ onClose }: { onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 1000);
  };

  useEffect(() => {
    setIsClosing(false);
  }, []);

  const checkFormValidity = () => {
    if (name && email && phone && message) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = () => {
    if (isFormValid) {
      setIsSubmitting(true);

      // Simulate API call or any asynchronous operation
      setTimeout(() => {
        console.log("Form submitted successfully:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);

        setSubmittedName(name);

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        setSubmitted(true);
        setIsSubmitting(false);
      }, 5000);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [name, email, phone, message]);

  return (
    <>
      {submitted ? (
        <FormConfirmationComponent name={submittedName} onClose={handleClose} />
      ) : (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative w-full h-full max-h-screen mx-4 lg:mx-[75px] p-6 bg-white border-[1px] border-gray-600 rounded-3xl overflow-auto">
            {/* Close Section */}
            <div className="w-full flex justify-end">
              <button
                onClick={handleClose}
                className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
              >
                <IoIosClose className="text-gray-600 size-6" />
              </button>
            </div>

            {/* Form content goes here */}
            <div className="flex flex-col lg:px-10">
              <p className="text-[36px] text-blue-600 mb-10">
                how can we <span className="font-bold">help</span>?
              </p>

              <p className="text-[16px] text-gray-400 font-medium">
                Please submit your information below, and one of our agents will
                contact you shortly.
              </p>

              {/* Form Items */}
              <div className="pl-2 mt-6">
                <CustomInAppTextInputComponent
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={setName}
                  required={true}
                />
                <CustomInAppTextInputComponent
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={setEmail}
                  required={true}
                />
                <CustomInAppTextInputComponent
                  type="tel"
                  placeholder="Contact number"
                  value={phone}
                  onChange={setPhone}
                  required={true}
                />
                <CustomInAppTextAreaComponent
                  placeholder="How can we help?"
                  value={message}
                  onChange={setMessage}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end items-center">
                <button
                  type="submit"
                  className={` ${
                    isFormValid ? "bg-blue-600" : "bg-gray-400"
                  } px-12 py-3 rounded-full`}
                  onClick={handleSubmit}
                  disabled={!isFormValid}
                >
                  <p className="flex flex-row items-center text-white font-medium text-[14px]">
                    submit{" "}
                    {isSubmitting && (
                      <RiLoader4Line className="animate-spin ml-2" />
                    )}
                  </p>
                </button>
              </div>

              {/* Disclaimer */}
              <p className="text-gray-400 text-[15px] font-medium mt-3 lg:mt-6">
                By requesting a sales call, you agree to the call being recorded
                for quality purposes. This website is protected by reCAPTCHA,
                and the Google{" "}
                <span className="text-blue-600">Privacy Policy</span> and
                <span className="text-blue-600"> Terms of Service</span> apply.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestACallComponent;
