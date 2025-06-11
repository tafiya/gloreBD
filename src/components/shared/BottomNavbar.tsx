"use client";
import { Users, ShoppingCart, Headset } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiShoppingBag2Fill } from "react-icons/ri";
import Sidebar from "../others/Sidebar";
import CartSidebar from "../others/CartSidebar";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BottomNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("home");
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
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    setIsSidebarOpen(false);
    setIsCartOpen(false);
  };
  return (
    <div className="">
      {/* Floating Cart Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 sm:hidden">
        <button
          className="relative bg-white p-3 cursor-pointer rounded-full shadow-lg"
          onClick={() => {
            setIsCartOpen(true);
            setIsSidebarOpen(false);
            setActiveButton("cart");
          }}
        >
          <ShoppingCart className="text-black" />
          <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </button>
      </div>

      {/* Bottom Navbar for Small Devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-2.5 sm:hidden z-40">
        <button
          className={`flex flex-col items-center cursor-pointer ${
            activeButton === "menu" ? "text-primary" : "text-black"
          }`}
          onClick={() => {
            setIsSidebarOpen(true);
            setIsCartOpen(false);
            setActiveButton("menu");
          }}
        >
          <HiMenuAlt1 size={"2rem"} />
          <span className="text-xs">Menu</span>
        </button>

        <button
          className={`flex flex-col items-center cursor-pointer ${
            activeButton === "shop" ? "text-primary" : "text-black"
          }`}
          onClick={() => handleButtonClick("shop")}
        >
          <RiShoppingBag2Fill size={"2rem"} />
          <span className="text-xs">Shop</span>
        </button>

        {/* Center Home Button */}
        <div className="relative -mt-14">
          <Link href="/">
            <button
            className={`hover:bg-[#e5e7eb] bg-gray-100 cursor-pointer p-3.5 rounded-full shadow-lg ${
              activeButton === "home" ? "bg-white text-primary" : ""
            }`}
                  onClick={() => handleButtonClick("home")}
          >
            <FaHome size={30} />
          </button>
          </Link>
        
        </div>

        <button
          className={`flex flex-col items-center cursor-pointer ${
            activeButton === "about" ? "text-primary" : "text-black"
          }`}
           onClick={() => handleButtonClick("about")}
        >
          <Users size={26} />
          <span className="text-xs">About Us</span>
        </button>

        <button
          className={`flex flex-col items-center cursor-pointer ${
            activeButton === "contact" ? "text-primary" : "text-black"
          }`}
            onClick={() => handleButtonClick("contact")}
        >
          <Headset size={28} />
          <span className="text-xs">Contact</span>
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
