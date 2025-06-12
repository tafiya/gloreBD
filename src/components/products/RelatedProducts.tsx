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
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://glore-bd-backend-node-mongo.vercel.app/api/product");
        const data = await res.json();

        const foundProduct = data.data.filter((item: Product) => item._id !== currentId);
        setProducts(foundProduct);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [currentId]);

  if (loading) {
    return <div>Loading...</div>;
  }



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
