/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface CardProps {
  id:string;
  title: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
}

const Card: React.FC<CardProps> = ({ id,title, imageUrl, price, oldPrice }) => {
  // const discount = oldPrice
  //   ? `${Math.round(((oldPrice - price) / oldPrice) * 100)}%`
  //   : undefined;

  return (
 <div className="bg-white shadow-md flex flex-col rounded-xl overflow-hidden">
  {/* Image */}
  <div className=" overflow-hidden w-full rounded-t-sm">
    <Link href={`/single-product/${id}`}>
       <img
      src={imageUrl}
      alt={title}
      className="w-full object-cover transition-transform duration-400 hover:scale-125 hover:-translate-y-1"
    />
    </Link>
 
  </div>

  {/* Title */}
  <h3 className="px-4 pt-3 text-base font-semibold text-gray-800">{title}</h3>

  {/* Price & Button at the bottom */}
  <div className="mt-auto p-4 flex items-center justify-between">
     <button className="px-4 py-2 bg-primary text-white font-semibold text-sm rounded hover:bg-primary transition">
      অর্ডার করুন
    </button>
    <div className="flex items-center space-x-2">
      <span className="text-primary font-semibold">৳{price}</span>
      {oldPrice && (
        <span className="text-sm text-gray-500 line-through">
          ৳{oldPrice}
        </span>
      )}
    </div>
   
  </div>
</div>

  );
};
export default Card;
