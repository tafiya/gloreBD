import Image from "next/image";
import React from "react";
import logo from "../../assets/logo-CoRENOR5.webp";
const Header = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4">
      <div className=" flex justify-between items-center">
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
