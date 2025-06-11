"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { useState } from "react";

const SingleProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantityChange = (type: "inc" | "dec") => {
    setQuantity((prev) => {
      if (type === "inc") return prev + 1;
      if (type === "dec" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <div className="bg-pink-50 px-4 md:px-12 py-10">
      {/* Product Image & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex justify-center">
          <Image
            src="/dress.jpg" // replace with actual image URL
            alt="Product"
            width={400}
            height={600}
            className="rounded"
          />
        </div>

        <div className="text-gray-900">
          <h2 className="text-2xl font-semibold mb-2">
            unready made Indian Embroidery Party dress
          </h2>
          <div className="text-pink-700 text-2xl font-bold mb-1">৳ 2,200</div>
          <p className="text-sm mb-4">Category: unstitched party dress</p>

          {/* Quantity */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => handleQuantityChange("dec")}
              className="px-3 py-1 bg-gray-200 text-black rounded-l"
            >
              -
            </button>
            <span className="px-4 py-1 bg-white border border-gray-300">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("inc")}
              className="px-3 py-1 bg-gray-200 text-black rounded-r"
            >
              +
            </button>
          </div>

          {/* Order Button */}
          <button className="bg-pink-600 text-white font-semibold px-6 py-2 rounded w-full mb-6 hover:bg-pink-700 transition">
            অর্ডার করুন
          </button>

          {/* Features */}
          <ul className="text-sm space-y-2 mb-6">
            <li>✅ 100% Original Product</li>
            <li>🚚 Express Shipping</li>
            <li>💵 Cash on Delivery Available</li>
            <li>🔁 Easy return and exchange policy within 3 days</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 text-pink-600 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaWhatsapp />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">
          Elegant party dress with heavy embroidery. Comes with matching
          dupatta. Great for festivals and weddings.
        </p>
      </div>

      {/* Related Products */}
      <div>
        <h3 className="text-xl font-semibold mb-6 text-center">
          RELATED PRODUCTS
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow hover:shadow-md transition"
            >
              <Image
                src={`/related-${index + 1}.jpg`} // update with real images
                alt={`Related product ${index + 1}`}
                width={300}
                height={400}
                className="rounded mb-4"
              />
              <h4 className="text-sm font-semibold mb-1">
                শ্রিমার ইন্ডিয়ান আনস্টিচড পার্টি কালেকশন
              </h4>
              <div className="flex justify-between items-center">
                <button className="text-sm bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700">
                  অর্ডার করুন
                </button>
                <span className="text-pink-700 font-bold">৳ 2,200</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
