import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, price, oldPrice }) => {
  const discount = oldPrice ? `${Math.round(((oldPrice - price) / oldPrice) * 100)}%` : undefined;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden  relative">
      {discount && (
        <span className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
          Save: {discount}
        </span>
      )}
      <img src={imageUrl} alt={title} className="w-full object-cover rounded-md" />
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-pink-600 font-semibold">৳{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">৳{oldPrice}</span>
          )}
        </div>
        <button className="mt-2 px-4 py-1 bg-pink-500 text-white text-sm rounded hover:bg-pink-600 transition">
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};
export default Card;