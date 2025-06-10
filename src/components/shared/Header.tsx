"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-CoRENOR5.webp";
import clsx from "clsx";
import { HiMenuAlt1 } from "react-icons/hi";
import { Search } from "lucide-react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setShowSubMenu(false);
  };
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

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-80 h-full bg-white shadow-lg z-40 p-6 transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Categories</h2>
          <button
            onClick={handleCloseSidebar}
            // onClick={() => setIsSidebarOpen(false)}
            className="text-sm font-extrabold"
          >
            X
           {/* <RiCloseFill className="font-bold" size={}/> */}
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <button
              className="w-full text-left border-b border-b-primary pb-2 text-base font-medium cursor-pointer hover:text-primary transition flex justify-between items-center"
              onClick={() => setShowSubMenu(!showSubMenu)}
            >
              Women Clothing
            </button>
            {showSubMenu && (
              <ul className="mt-2 ml-4 space-y-2 text-sm text-gray-700">
                <li className="cursor-pointer hover:text-primary transition">
                  Jamdhani Sharee
                </li>
                <li className="cursor-pointer hover:text-primary transition">
                  Three Pieces
                </li>
                <li className="cursor-pointer hover:text-primary transition">
                  Unstitched Party Dress
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {/* cartBar Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black opacity-45 z-30"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
         <div
        className={clsx(
          "fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-40 transition-transform duration-800 ease-in-out",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pt-5 px-5">
 <div className="flex justify-between bg-[#e5e7eb] px-3 py-2.5 rounded-md items-center mb-6">
          <h2 className="text-base">Shopping Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-xl font-semibold text-gray-500"
          >
            ✕
          </button>
        </div>
        </div>
       
        {/* cart item div */}
        <div className="flex flex-col h-full ">
          <div className="flex-1 overflow-y-auto  p-6 ">
            {/* Display cart items or empty state here */}
         
          </div>
          <div className="border-t t border-t-gray-300 pb-28 px-5">
            <div className="flex justify-between my-3 text-lg font-semibold">
              <span>Subtotal:</span>
              <span>৳ 0</span>
            </div>
            <div className="flex gap-4">
              <button className="w-full bg-gray-200 py-2 rounded">
                Clear All
              </button>
              <button className="w-full bg-primary text-white py-2 rounded">
                Checkout →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
