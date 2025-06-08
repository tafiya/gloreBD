"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo-CoRENOR5.webp";
import clsx from "clsx";
const Header = () => {
      const [scrolling, setScrolling] = useState(false);
      useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={clsx(
        'fixed z-10 w-full transition-all text-black',
        scrolling && 'bg-white shadow-lg shadow-gray text-black',
      )} >
      <div className=" flex justify-between items-center max-w-[1240px] mx-auto py-4">
        {/* menu */}
        <div className=" flex">
          <h2>Menu</h2>
          <button>search</button>
        </div>
        <div>
          <Image src={logo} alt="logo" className="w-44 h-14"></Image>
        </div>
        <div className=" flex">
            <button>shop</button>
            <button>cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
