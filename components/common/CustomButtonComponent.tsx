import { CustomButtonProps } from "@/types";

const CustomButtonComponent = ({
  text,
  onClick,
  outline,
  normal,
  hover,
  type,
}: CustomButtonProps) => {
  return (
    <button
      className={`flex w-full justify-center items-center rounded-full cursor-pointer ${
        outline
          ? "border font-[500] border-blue-600 bg-transparent text-blue-600 py-3 px-5 lg:px-10"
          : !normal
          ? "bg-white p-1 text-blue-600"
          : hover
          ? "border border-blue-600 hover:bg-blue-600 bg-transparent py-1 px-8"
          : "bg-blue-600 py-3 px-6 lg:px-10"
      }`}
      onClick={onClick}
      type={type}
    >
      <p
        className={` ${
          !normal
            ? "text-blue-600 text-[14px]"
            : hover
            ? "text-blue-600 hover:text-white text-[14px]"
            : "text-white text-[14px]"
        }`}
      >
        {text}
      </p>
    </button>
  );
};

export default CustomButtonComponent;
