"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-CoRENOR5.webp";
import clsx from "clsx";
import { HiMenuAlt1 } from "react-icons/hi";
import { Search } from "lucide-react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Sidebar from "../others/Sidebar";
import CartSidebar from "../others/CartSidebar";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const [showSubMenu, setShowSubMenu] = useState(false);
  
  // const handleCloseSidebar = () => {
  //   setIsSidebarOpen(false);
  //   setShowSubMenu(false);
  // };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (isCartOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // Cleanup on unmount
  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [isCartOpen]);

  return (
    <>
      {/* Header */}
      <div
        className={clsx(
          "fixed z-10 w-full transition-all sm:block hidden text-black",
          scrolling && "bg-white shadow-lg shadow-gray text-black"
        )}
      >
        <div className="flex justify-between items-center lg:px-20 px-4 md:px-14 mx-auto py-4">
          {/* Left: Menu & Search */}
          <div className="flex items-center justify-center gap-8">
            <button
              className="flex items-center justify-center gap-2"
              onClick={() => setIsSidebarOpen(true)}
            >
              <HiMenuAlt1 size={"1.7rem"} />
              <h2 className="font-medium text-base">Menu</h2>
            </button>
            <button className="flex items-center justify-center gap-2">
              <Search />
              <h2 className="font-medium text-base">Search</h2>
            </button>
          </div>

          {/* Center: Logo */}
          <div>
            <Image src={logo} alt="logo" className="w-40 h-12" />
          </div>

          {/* Right: Shop & Cart */}
          <div className="flex items-center justify-center gap-6">
            <button className="flex items-center justify-center gap-2">
              <RiShoppingBag2Fill size={"1.7rem"} />
              <h2 className="font-medium text-base">Shop</h2>
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center justify-center gap-2"
            >
              <div className="relative scale-75">
                <HiOutlineShoppingBag size={"2.5rem"} />
                <span className="absolute top-6 left-6 rounded-full bg-primary p-0.5 px-2 text-sm text-red-50">
                  0
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

   <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {/* cartBar Overlay */}
   <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default Header;
