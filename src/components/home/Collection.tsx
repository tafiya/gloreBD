import { getAllProducts } from '@/services/products';
import React from 'react';
import Card from '../products/Card';

const Collection = async() => {
    const products = await getAllProducts();

  if (products instanceof Error) {
    return <div className="text-red-600 font-medium">Error: {products.message}</div>;
  }
    return (
         <div className="bg-pink-50 min-h-screen py-10 px-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">LATEST COLLECTIONS</h2>
        <p className="text-pink-500 mt-2">✨ নতুন স্টাইলের ড্রেস উঠেছে ✨</p>
        <p className="text-sm text-gray-500">
          গ্লোরি পণ্যের সাথে থাকুন সর্বশেষ এবং সেরা পার্টি এমব্রয়ডারি গাউন, আপনার পছন্দের{" "}
          <span className="text-pink-600 font-semibold">GloreBD</span> এর সাথে ❤️
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <Card
            key={product._id}
            title={product.name}
            imageUrl={product.images[0]?.secure_url || ""}
            price={Number(product.price)}
          />
        ))}
      </div>
    </div>
    );
};

export default Collection;