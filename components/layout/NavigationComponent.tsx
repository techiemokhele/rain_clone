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
        className={`sticky top-0 z-50 flex justify-between items-center px-4 py-3 bg-white transition-shadow ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        {/* Sidebar & Logo */}
        <div className="flex items-center">
          <button onClick={() => setShowSidebar(true)}>
            <img src="/icons/hamburger.svg" alt="Menu" className="w-6 h-6" />
          </button>

          {/* Logo Section */}
          <div className="flex flex-row">
            <Image
              src={"/logo.png"}
              alt="logo-icon"
              width={40}
              height={25}
              onClick={() => router.push("/")}
              className="hidden sm:inline cursor-pointer ml-3"
            />
          </div>

          {/* Show In Mobile View */}
          <div className="flex sm:hidden">
            <Link href="/" passHref>
              <span
                className={`ml-6 cursor-pointer text-[12px] font-[500] ${
                  pathname === "/" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                Home
              </span>
            </Link>
            <Link href="/work" passHref>
              <span
                className={`ml-4 cursor-pointer text-[12px] font-[500] ${
                  pathname === "/work" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                Work
              </span>
            </Link>
          </div>
        </div>

        {/* Navigation Items Section */}
        <div className="flex items-center">
          <div className="hidden sm:flex">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} passHref>
                <span
                  className={`mr-4 cursor-pointer text-[12px] font-[500] ${
                    pathname === item.path ? "text-blue-600" : "text-gray-400"
                  } hover:text-blue-600`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Cart Section */}
          <div className="flex items-center mr-0">
            <Link href="/sign-in" passHref>
              <span
                className={`sm:hidden cursor-pointer text-[12px] font-[500] ${
                  pathname === "/sign-in" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                Sign In
              </span>
            </Link>

            <span className="mr-2 text-gray-400">|</span>
            <Link href="/cart" passHref>
              <span
                className={`cursor-pointer flex-row flex items-center text-[12px] font-[500] ${
                  pathname === "/cart" ? "text-blue-600" : "text-gray-400"
                } hover:text-blue-600`}
              >
                Cart
                <FaCartPlus className="w-4 h-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
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
