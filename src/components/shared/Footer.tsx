import React from "react";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/logo2-footer.webp";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-sm sm:text-base">
        {/* Logo + Slogan */}
        <div>
          <Image src={logo} alt="logo" className="w-60 h-20 mb-6"></Image>
          <p className="text-white text-sm leading-loose">
            আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং প্রতিহারের একটি
            নির্ভরযোগ্য সম্মিশ্রণ।
          </p>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Explore More</h3>
          <ul className="space-y-1 text-gray-400 text-base">
            <li>
              <a href="#" className=" hover:text-primary">New Arrivals</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">About Us</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">Contact</a>
            </li>
          </ul>
        </div>

        {/* Client Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Client Experience</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li>
              <a href="#" className=" hover:text-primary">Track Your Order</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">Returns & Exchanges</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">Customer Reviews</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className=" hover:text-primary">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" text-xl font-semibold mb-5">GET IN TOUCH</h3>
          <p className="text-gray-400 font-semibold text-sm mb-1 hover:cursor-zoom-in hover:text-primary">
            মোবাইল নম্বর: <span className=" font-normal">(+88) 01855-375963</span>
          </p>
          <p className="text-gray-400 text-sm mb-5 font-semibold hover:text-primary">
            ইমেইল: <span className="font-normal">hello@glorebd.com</span>
          </p>
          <div className="flex items-center gap-8 mt-2">
            <a href="#" className="hover:text-primary">
              <FaFacebook size={"1.9rem"} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaFacebookMessenger size={"1.9rem"} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter size={"1.9rem"} />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram size={"1.9rem"} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white mt-6">
        © 2025 Powered by{" "} <span className=" text-base">  Cal<span className="text-orange-400 font-bold">Q</span>uick</span>
      
      </div>
    </footer>
  );
};

export default Footer;
