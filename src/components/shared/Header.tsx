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

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <div
        className={clsx(
          "fixed z-10 w-full transition-all text-black",
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
            <button className="flex items-center justify-center gap-2">
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
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        <ul className="space-y-4">
          <li className="border-b pb-2 text-base cursor-pointer hover:text-primary transition">
            Women Clothing
          </li>
          {/* Add more categories here if needed */}
        </ul>
      </div>
    </>
  );
};

export default Header;
