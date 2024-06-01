import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import CustomButtonComponent from "../common/CustomButtonComponent";
import Image from "next/image";

const SidebarComponent = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();

  const navItems = [
    { name: "shop", path: "/" },
    { name: "my rain", path: "/my-rain" },
    { name: "our network", path: "/our-network" },
    { name: "4G mobile", path: "/4g-mobile" },
    { name: "support", path: "/support" },
    { name: "legal", path: "/legal" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div className="bg-blue-600 fixed rounded-e-md top-0 left-0 h-full w-1/2 z-50 transform transition-transform duration-300 shadow-lg">
      {/* Close Section */}
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <FaTimes className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col px-16">
        <span className="text-white font-extrabold text-[24px]">Welcome</span>
        <span className="text-white font-extrabold text-[24px] mb-3">
          to rain
        </span>

        <div className="w-28">
          <CustomButtonComponent
            text="Sign in"
            onClick={() => handleNavigation("/")}
            outline={false}
            normal={true}
          />
        </div>
      </div>

      {/* Link List Section */}
      <ul className="mt-12 bg-white pt-5 pb-20 px-8">
        {navItems.map((item) => (
          <li key={item.path} className="my-2 px-4">
            <button
              onClick={() => handleNavigation(item.path)}
              className="text-gray-700 text-[14px] font-[500] hover:text-blue-600"
            >
              {item.name}
            </button>
          </li>
        ))}

        <Image
          onClick={() => handleNavigation("/")}
          src={"/images/geforce.svg"}
          alt="geforce-image"
          width={200}
          height={180}
          className="ml-4 mt-5 cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default SidebarComponent;
