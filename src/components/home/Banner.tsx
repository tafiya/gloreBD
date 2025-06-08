import React from "react";
import banner from "../../assets/hero-o4bu130g.webp";
import Image from "next/image";
import logo from "../../assets/logo-CoRENOR5.webp";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="bg-accent lg:py-20 lg:px-20 px-4 py-8 sm:py-20 md:py-20 md:px-14">
      <div className="bg-secondary rounded-3xl flex flex-row items-center justify-between gap-0 sm:gap-3 px-0 sm:px-8 md:px-12  overflow-hidden">
        {/* Text Section */}
        <div className="flex flex-col justify-center sm:basis-1/2  items-center shrink min-w-0 pl-0 md:pl-10 lg:pl-12">
          <div className="sm:hidden flex">
            <Image src={logo} alt="logo" className="w-40 h-12 mb-4"></Image>
          </div>

          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            নতুন
          </h2>
          <h2 className="font-bold md:mb-0 mb-4 py-0 md:py-8 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary">
            কালেকশন
          </h2>
          <p className="text-[13px] sm:text-lg text-center">
            ✨<span className="text-primary "> GloreBD</span> - এর সাথে ফ্যাশনে
            পা রাখুন নতুন দিগন্তে! ❤️
          </p>
          <p className="text-sm text-center sm:text-lg hidden sm:flex">
            আমাদের এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! <br />
            আপনার প্রিয় ফ্যাশন স্টাইল খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
          </p>
          <div className="pt-4 md:pt-8 ">
            <Link href={'/collections'}>     <button
              className="bg-primary hover:shadow-lg duration-300 ease-in-out 
              hover:-translate-y-1 hover:scale-105 text-white font-bold px-4 py-2 md:py-4 md:px-10 text-sm sm:text-base rounded-xl"
            >
              অর্ডার করুন
            </button></Link>
       
          </div>
        </div>

        {/* Image Section */}
        <div className=" shrink min-w-0 flex justify-end">
          <Image
            src={banner}
            alt="hero"
            className="max-w-[200px]  sm:max-w-[240px] pt-5 md:max-w-[300px] lg:max-w-[350px]   xl:max-w-[450px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
