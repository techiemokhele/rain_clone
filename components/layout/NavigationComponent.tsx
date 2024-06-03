"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import SidebarComponent from "./SidebarComponent";

const NavigationComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setShowSidebar(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "home", path: "/" },
    { name: "work", path: "/work" },
    { name: "my rain", path: "/my-rain" },
    { name: "support", path: "/support" },
    { name: "sign in", path: "/sign-in" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 flex justify-between items-center px-4 py-[16px] bg-white transition-shadow ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex items-center">
          <button onClick={() => setShowSidebar(true)}>
            <img src="/icons/hamburger.svg" alt="Menu" className="w-7 h-7" />
          </button>

          <div className="flex flex-row -mt-2">
            <Image
              src={"/logo.png"}
              alt="logo-icon"
              width={1000}
              height={1000}
              onClick={() => router.push("/")}
              className="w-[50px] h-[25px] hidden sm:inline cursor-pointer ml-3"
            />
          </div>

          <div className="flex sm:hidden">
            <Link href="/" passHref>
              <span
                className={`ml-6 cursor-pointer text-[16px] font-[500] ${
                  pathname === "/" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                home
              </span>
            </Link>
            <Link href="/work" passHref>
              <span
                className={`ml-4 cursor-pointer text-[16px] font-[500] ${
                  pathname === "/work" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                work
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden sm:flex">
            {navItems.map((item, index) => (
              <Link key={item.path} href={item.path} passHref>
                <span
                  className={`${
                    index !== navItems.length - 1 ? "mr-4" : ""
                  } cursor-pointer text-[16px] font-[500] ${
                    pathname === item.path ? "text-blue-600" : "text-gray-400"
                  } hover:text-blue-600`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center mr-0">
            <Link href="/sign-in" passHref>
              <span
                className={`sm:hidden cursor-pointer text-[16px] font-[500] ${
                  pathname === "/sign-in" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                sign in
              </span>
            </Link>
            <span className="pipe"></span>
            <Link href="/cart" passHref>
              <p
                className={`cursor-pointer flex-row flex items-center text-[16px] font-[500] ${
                  pathname === "/cart" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                <span className="hidden md:inline">cart</span>
                <FaCartPlus className="w-5 h-5 ml-0 lg:ml-2" />
              </p>
            </Link>
          </div>
        </div>
      </nav>
      {showSidebar && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setShowSidebar(false)}
          />
          <SidebarComponent onClose={() => setShowSidebar(false)} />
        </>
      )}
    </>
  );
};

export default NavigationComponent;
