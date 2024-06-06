"use client";

import React, { useState } from "react";
import { EmailInputProps } from "@/types";

const EmailInputComponent = ({ value, onChange, error }: EmailInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${
          focused
            ? "border-blue-600"
            : error
            ? "border-red-500 mb-6"
            : "border-gray-300 mb-3"
        } text-[14px] border-b-[1px] px-0 py-2 w-full focus:outline-none`}
      />
      <label
        className={`absolute left-0 transition-all ${
          focused || value
            ? "-top-5 text-[14px] font-medium"
            : "top-4 text-[14px] transform -translate-y-1/2"
        } text-gray-500`}
      >
        email
      </label>
      {error && <p className="text-red-500 text-[12px] -mt-5">{error}</p>}
    </div>
  );
};

export default EmailInputComponent;
