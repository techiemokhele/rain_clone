"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CustomButtonComponent from "../common/CustomButtonComponent";

const EmptyCartComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Image
        src={"/images/icons/empty-cart.svg"}
        alt="empty-cart-icon"
        width={1000}
        height={1000}
        className="h-[120px] w-[120px] object-contain"
      />

      <p className="text-[16px] text-gray-400 font-medium pt-5 pb-6">
        You have no items in your cart
      </p>

      <p className="text-[16px] text-gray-400 text-center font-medium pb-10">
        Shop or{" "}
        <span
          className="text-blue-600 underline"
          onClick={() => router.push("/sign-in")}
        >
          sign in
        </span>{" "}
        and go to 'my orders' to complete any pending orders you might have.
      </p>

      <div className="w-full lg:w-64 px-8 lg:px-0">
        <CustomButtonComponent
          text="shop"
          normal={true}
          outline={false}
          hover={false}
          type="button"
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default EmptyCartComponent;
