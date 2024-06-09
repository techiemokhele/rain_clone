import { CustomInAppTextAreaInputProps } from "@/types";

const CustomInAppTextAreaComponent = ({
  placeholder,
  value,
  onChange,
}: CustomInAppTextAreaInputProps) => {
  return (
    <div className="mb-6">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={8}
        className="text-gray-500 font-medium bg-[#f4f7f9] w-full py-4 px-5 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default CustomInAppTextAreaComponent;
