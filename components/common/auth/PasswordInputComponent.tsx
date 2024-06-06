"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { PasswordInputProps } from "@/types";

const PasswordInputComponent = ({
  value,
  onChange,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${
          focused
            ? "border-blue-600"
            : error
            ? "border-red-500"
            : "border-gray-300"
        } mb-3 text-[14px] border-b-[1px] px-0 py-2 w-full focus:outline-none`}
      />
      <label
        className={`absolute left-0 transition-all ${
          focused || value
            ? "-top-5 text-[14px] font-medium"
            : "top-4 text-[14px] transform -translate-y-1/2"
        } text-gray-500`}
      >
        password
      </label>
      <div
        className="absolute right-0 top-4 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <AiOutlineEye className=" size-6 text-gray-400" />
        ) : (
          <AiOutlineEyeInvisible className=" size-6 text-gray-400" />
        )}
      </div>
      {error && <p className="text-red-500 text-[12px] -mt-2">{error}</p>}
    </div>
  );
};

export default PasswordInputComponent;
