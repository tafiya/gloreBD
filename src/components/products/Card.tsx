import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, price, oldPrice }) => {
  // const discount = oldPrice
  //   ? `${Math.round(((oldPrice - price) / oldPrice) * 100)}%`
  //   : undefined;

  return (
 <div className="bg-white shadow-md flex flex-col rounded-xl overflow-hidden">
  {/* Image */}
  <div className=" overflow-hidden w-full rounded-t-sm">
    <img
      src={imageUrl}
      alt={title}
      className="w-full object-cover transition-transform duration-400 hover:scale-125 hover:-translate-y-1"
    />
  </div>

  {/* Title */}
  <h3 className="px-4 pt-3 text-sm font-medium text-gray-800">{title}</h3>

  {/* Price & Button at the bottom */}
  <div className="mt-auto p-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <span className="text-primary font-semibold">৳{price}</span>
      {oldPrice && (
        <span className="text-sm text-gray-500 line-through">
          ৳{oldPrice}
        </span>
      )}
    </div>
    <button className="px-4 py-1 bg-primary text-white text-sm rounded hover:bg-primary transition">
      অর্ডার করুন
    </button>
  </div>
</div>

  );
};
export default Card;
