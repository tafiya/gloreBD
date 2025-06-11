import { useEffect, useState } from "react";
import Card from "./Card";


type Props = {
  currentId: string;
};
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
export default function RelatedProducts({ currentId }: Props) {
      const [products, setProduct] = useState<Product | null>(null);
      const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();

        const foundProduct = data.data.filter((item: Product) => item._id !== currentId );
        setProduct(foundProduct);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [currentId]);
//   const filtered = all.filter((p: any) => p._id !== currentId).slice(0, 3);
  console.log("related products",products)


  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {products?.map((product:Product) => (
          <Card
            key={product._id}
            id={product._id}
            title={product.name}
            imageUrl={product.images[0]?.secure_url || ""}
            price={Number(product.price)}
          />
        ))}
    </div>
  );
}
