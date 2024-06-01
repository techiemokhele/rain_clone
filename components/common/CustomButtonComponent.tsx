import { CustomButtonProps } from "@/types";

const CustomButtonComponent = ({
  text,
  onClick,
  outline,
  normal,
}: CustomButtonProps) => {
  return (
    <div
      className={`flex w-full justify-center items-center rounded-full ${
        outline
          ? "border border-blue-600 bg-transparent p-3"
          : normal
          ? "bg-white p-1"
          : "bg-blue-600 p-3"
      }`}
      onClick={onClick}
    >
      <p
        className={`text-white cursor-pointer ${
          normal ? "text-blue-700 text-[10px]" : "text-[12px]"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CustomButtonComponent;
