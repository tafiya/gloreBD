"use server";

export interface Product {
  _id: string;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  images: {
    public_id: string;
    secure_url: string;
    optimizeUrl: string;
  }[];
  video: {
    public_id: string;
    secure_url: string;
  };
  status: boolean;
  price: string;
  createdAt: string;
  updatedAt: string;
}

interface ProductApiResponse {
  status: number;
  succcess: boolean;
  message: string;
  data: Product[];
}

export const getAllProducts = async (): Promise<Product[] | Error> => {
  try {
    const res = await fetch(`https://glore-bd-backend-node-mongo.vercel.app/api/product`, {
      next: {
        tags: ["PRODUCTS"],
      },
    });

    const json: ProductApiResponse = await res.json();

    if (!json.succcess) {
      throw new Error(json.message || "Failed to fetch products.");
    }

    return json.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return Error(error.message);
  }
};
