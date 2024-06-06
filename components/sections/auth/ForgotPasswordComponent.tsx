"use client";

import React, { useState, useEffect } from "react";
import { ForgotPasswordProps } from "@/types";

import EmailInputComponent from "@/components/common/auth/EmailInputComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";

const ForgotPasswordComponent = ({
  setShowForgotPassword,
}: ForgotPasswordProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    } else {
      setError("");
      setMessage("Password reset sent");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setShowForgotPassword(false);
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, setShowForgotPassword]);

  return (
    <div
      className={`flex flex-col w-[400px] px-4 shadow-xl rounded-lg ${
        message ? "py-6" : "min-h-[210px] pt-6 pb-7"
      }`}
    >
      {!message ? (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 pt-2">
          <p className="text-blue-600 font-medium pt-1 pb-4">
            Please provide your <span className="font-bold">email address</span>{" "}
            to reset your password
          </p>

          <EmailInputComponent
            value={email}
            onChange={setEmail}
            error={!email && error ? "Email is required" : ""}
          />

          <div
            className={`flex flex-col items-center justify-center ${
              error ? "space-y-8 pt-8" : "space-y-8 pt-3"
            }`}
          >
            <CustomButtonComponent
              text="submit"
              normal={true}
              onClick={() => {}}
              type="submit"
            />

            <button
              type="button"
              className="text-blue-500 text-[12px] pt-0"
              onClick={() => setShowForgotPassword(false)}
            >
              Back to <span className="underline">login</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-blue-600 text-[16px] font-bold">{message}</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordComponent;
