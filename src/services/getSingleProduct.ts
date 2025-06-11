/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/getSingleProduct.ts
"use server";

export const getSingleProduct = async (slug: string) => {
  try {
    const res = await fetch(`https://glore-bd-backend-node-mongo.vercel.app/api/product/${slug}`, {
      next: { tags: ["PRODUCT_DETAILS"] },
    });
    const data = await res.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
