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
    <div className="bg-blue-600 fixed rounded-e-md top-0 left-0 h-full w-full lg:w-[475px] z-50 transform transition-transform duration-300 shadow-lg">
      {/* Close Section */}
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <FaTimes className=" w-8 h-8 lg:w-6 lg:h-6 text-white" />
        </button>
      </div>

      <div className="flex flex-col px-6 lg:px-20">
        <span className="text-white font-extrabold text-[30px] lg:text-[24px]">
          Welcome
        </span>
        <span className="text-white font-extrabold text-[30px] lg:text-[24px] mb-5 lg:mb-3">
          to rain
        </span>

        <div className="w-32">
          <CustomButtonComponent
            text="Sign in"
            onClick={() => handleNavigation("/")}
            outline={false}
            normal={false}
          />
        </div>
      </div>

      {/* Link List Section */}
      <ul className="mt-[38px] lg:mt-12 h-full bg-white pt-10 lg:pt-5 pb-20 px-3 lg:px-16">
        {navItems.map((item) => (
          <li key={item.path} className="mt-2 mb-4 px-4">
            <button
              onClick={() => handleNavigation(item.path)}
              className="text-gray-500 text-[18px] lg:text-[20px] font-[500] hover:text-blue-600"
            >
              {item.name}
            </button>
          </li>
        ))}

        <Image
          onClick={() => handleNavigation("/")}
          src={"/images/geforce.svg"}
          alt="geforce-image"
          width={330}
          height={300}
          className="ml-4 mt-5 cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default SidebarComponent;
