"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EmailInputComponent from "@/components/common/auth/EmailInputComponent";
import PasswordInputComponent from "@/components/common/auth/PasswordInputComponent";
import ForgotPasswordComponent from "./ForgotPasswordComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";

const AuthFormComponent = () => {
  const router = useRouter();

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (email === email && password === password) {
      setError("");
      alert("Logged in successfully!");

      setPassword("");
      setEmail("");

      router.push("/");
    } else {
      setError("Incorrect email or password");
    }
  };

  if (showForgotPassword) {
    return (
      <ForgotPasswordComponent setShowForgotPassword={setShowForgotPassword} />
    );
  }

  return (
    <div className="flex flex-col w-[400px] min-h-[210px] pt-9 pb-7 px-4 shadow-xl rounded-lg">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col ${error ? "space-y-5" : "space-y-3"}`}
      >
        <EmailInputComponent
          value={email}
          onChange={setEmail}
          error={!email && error ? "Email is required" : ""}
        />
        <PasswordInputComponent
          value={password}
          onChange={setPassword}
          error={!password && error ? "Password is required" : ""}
        />

        <div
          className={`flex flex-col items-center justify-center space-y-6 ${
            error ? "pt-4" : "pt-2"
          }`}
        >
          <CustomButtonComponent text="submit" normal={true} type="submit" />
          <button
            type="button"
            className="text-blue-500 text-[12px] font-medium underline"
            onClick={() => setShowForgotPassword(true)}
          >
            forgot password
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthFormComponent;
