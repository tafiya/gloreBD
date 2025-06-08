import React from "react";
import banner from "../../assets/hero-o4bu130g.webp";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-accent  p-20">
      <div className=" bg-secondary rounded-3xl  flex px-14 gap-24 ">
        <div className="  flex flex-col gap-8 justify-center items-center">
          <h2 className=" font-bold text-5xl">নতুন</h2>
          <h2 className=" font-bold text-5xl">কালেকশন</h2>
          <p>
            ✨ GloreBD - এর সাথে ফ্যাশনে পা রাখুন নতুন দিগন্তে! ❤️ আমাদের
            এক্সক্লুসিভ নতুন কালেকশন এখন উপলব্ধ! আপনার প্রিয় ফ্যাশন স্টাইল
            খুঁজে নিন আর নিজেকে সাজান অনন্যভাবে। ❤️
          </p>
          <button>অর্ডার করুন</button>
        </div>
        <div className="pt-5">
          <Image src={banner} alt="hero" className=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
