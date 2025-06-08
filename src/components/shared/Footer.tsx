import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircleMore,
} from "lucide-react";
import logo from "../../assets/logo2-footer.webp";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm sm:text-base">
        {/* Logo + Slogan */}
        <div>
           <Image src={logo} alt="logo" className="w-60 h-20 mb-6"></Image>
          <p className="text-white text-sm leading-loose">
            আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং প্রতিহারের একটি নির্ভরযোগ্য সম্মিশ্রণ।
          </p>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="font-semibold mb-3">Explore More</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Client Experience */}
        <div>
          <h3 className="font-semibold mb-3">Client Experience</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Track Your Order</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Customer Reviews</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">GET IN TOUCH</h3>
          <p className="text-gray-300 mb-1">
            মোবাইল নম্বর: <span className="text-white">(+88) 01855-375963</span>
          </p>
          <p className="text-gray-300 mb-3">
            ইমেইল: <span className="text-white">hello@glorebd.com</span>
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-pink-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <MessageCircleMore size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © 2025 Powered by <span className="text-orange-400 font-bold">CalQuick</span>
      </div>
    </footer>
  );
};

export default Footer;
