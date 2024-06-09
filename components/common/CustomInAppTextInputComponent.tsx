"use client";

import { useState } from "react";
import { CustomInAppTextInputProps } from "@/types";

const CustomInAppTextInputComponent = ({
  type,
  placeholder,
  value,
  onChange,
  required,
  maxLength,
}: CustomInAppTextInputProps) => {
  const [error, setError] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const validateInput = (input: string) => {
    let errorMsg = "";
    if (required && !input && type === "text") {
      errorMsg = "Name is required.";
    } else if (type === "email") {
      if (!/\S+@\S+\.\S+/.test(input)) {
        errorMsg = "Please enter a valid email address.";
      } else if (required && !input) {
        errorMsg = "Email is required.";
      }
    } else if (type === "tel") {
      if (!/^(\+27)[6-8][0-9]{8}$/.test(input)) {
        errorMsg = "Please enter a valid contact number starting with +27.";
      } else if (type === "tel" && !input) {
        errorMsg = "Contact number is required.";
      } else if (maxLength && input.length > maxLength) {
        errorMsg = `Contact number cannot exceed ${maxLength} digits.`;
      }
    }
    setError(errorMsg);
  };

  return (
    <div className="mb-6">
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setError("");
          setIsTyping(true);
        }}
        onBlur={() => {
          validateInput(value);
          setIsTyping(false);
        }}
        autoComplete="off"
        className={`bg-[#f4f7f9] font-medium w-full py-4 px-5 leading-tight focus:outline-none ${
          isTyping ? "text-blue-600" : value ? "text-gray-600" : "text-gray-700"
        } ${isTyping ? "border-b-2 border-blue-600" : ""}`}
      />
      {error && (
        <p className="text-red-500 text-[12px] font-medium mt-1 pl-5">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomInAppTextInputComponent;
