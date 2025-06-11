"use client"
import ProductDetails from "@/components/products/ProductDetails";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import RelatedProducts from "@/components/products/RelatedProducts";



type Product = {
  _id: string;
  name: string;
  description: string;
  category: {
    _id: string;
    name: string;
  };
  images: { secure_url: string }[];
  price: string;
};

export default  function ProductPage() {
    const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();

        const foundProduct = data.data.find((item: Product) => item._id === id);
        setProduct(foundProduct);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="bg-pink-50 py-24 px-4 md:px-20">
      <ProductDetails product={product} />
      <div className="mt-16">
        <h2 className="text-center text-xl font-semibold mb-8">
          <span className="border-b-2 border-black">RELATED</span> PRODUCTS
        </h2>
        <RelatedProducts currentId={product._id} />
      </div>
    </div>
  );
}
