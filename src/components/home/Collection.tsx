import { getAllProducts } from "@/services/products";
import React from "react";
import Card from "../products/Card";

const Collection = async () => {
  const products = await getAllProducts();

  if (products instanceof Error) {
    return (
      <div className="text-red-600 font-medium">Error: {products.message}</div>
    );
  }
  return (
    <div className="bg-secondary min-h-screen pt-20 pb-32 ">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-4">
          <h2 className="text-3xl font-medium text-gray-700">
            <span className=" text-[#6b7280]">LATEST</span> COLLECTIONS{" "}
          </h2>
          <div className="w-12 h-0.5 bg-gray-700" />
        </div>

        <p className="text-gray-700 mt-4">✨ নতুন স্টাইলের ড্রেস উঠেছে ✨</p>
        <p className="text-base text-gray-700">
          ট্রেন্ডিং পণ্যগুলোর সাথে থাকুন সবসময় এক ধাপ এগিয়ে! আপনার ফ্যাশন,
          আপনার পরিচয়{" "}
          <span className="text-primary  font-semibold">GloreBD</span> এর সাথে
          ❤️
        </p>
      </div>
      <h2 className=" text-2xl my-4 font-semibold">Women Clothing</h2>
      <div className="grid grid-cols-2 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
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
