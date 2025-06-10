"use client"
import {  Users,  ShoppingCart, Headset } from 'lucide-react';
import { FaHome } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';

import { RiShoppingBag2Fill } from 'react-icons/ri';
import Sidebar from '../others/Sidebar';
import CartSidebar from '../others/CartSidebar';
import { useEffect, useState } from 'react';

export default function BottomNavbar() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const [isCartOpen, setIsCartOpen] = useState(false);
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
      {/* Floating Cart Button */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-20 sm:hidden">
        <button className="relative bg-white p-3 rounded-full shadow-lg"
         onClick={() => setIsCartOpen(true)}>
          <ShoppingCart className="text-black" />
          <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </button>
      </div>

      {/* Bottom Navbar for Small Devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-6 py-2.5 sm:hidden z-40">
        <button className="flex flex-col items-center text-black"
          onClick={() => setIsSidebarOpen(true)}>
             <HiMenuAlt1 size={"2rem"} />
          <span className="text-xs">Menu</span>
        </button>
        <button className="flex flex-col items-center text-black">
       <RiShoppingBag2Fill size={"2rem"} />
          <span className="text-xs">Shop</span>
        </button>

        {/* Center Home Button */}
        <div className="relative -mt-14">
          <button className="hover:bg-[#e5e7eb] bg-gray-100 text-primary p-3.5 rounded-full shadow-lg">
            <FaHome size={30} color='primary' />
          </button>
        </div>

        <button className="flex flex-col items-center text-black">
          <Users size={26} />
          {/* <PiUsersThreeBold size={20} /> */}
          <span className="text-xs">About Us</span>
        </button>
        <button className="flex flex-col items-center text-black">
            <Headset size={28} />
          {/* <PhoneCall size={20} /> */}
          <span className="text-xs">Contact</span>
        </button>
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
}
