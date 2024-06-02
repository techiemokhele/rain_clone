import { CustomButtonProps } from "@/types";

const CustomButtonComponent = ({
  text,
  onClick,
  outline,
  normal,
}: CustomButtonProps) => {
  return (
    <div
      className={`flex w-full justify-center items-center rounded-full cursor-pointer ${
        outline
          ? "border font-[500] border-blue-600 bg-transparent text-blue-600 p-2 px-6"
          : !normal
          ? "bg-white p-1 text-blue-600"
          : "bg-blue-600 p-2 px-6"
      }`}
      onClick={onClick}
    >
      <p
        className={` ${
          !normal ? "text-blue-700 text-[10px]" : "text-white text-[12px]"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CustomButtonComponent;
