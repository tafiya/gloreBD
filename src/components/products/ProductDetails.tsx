/* eslint-disable @next/next/no-img-element */
type ProductProps = {
  product: {
    _id: string;
    name: string;
    price: string;
    images: { secure_url: string }[];
    category: { name: string };
    description: string;
  };
};

export default function ProductDetails({ product }: ProductProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img src={product.images[0]?.secure_url} alt={product.name} className="w-full h-auto object-cover rounded-md" />
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <p className="text-pink-600 text-lg font-bold">৳ {product.price}</p>
        <p className="text-sm text-gray-600">Category: {product.category.name}</p>

        {/* Quantity control */}
        <div className="flex items-center space-x-3">
          <button className="border px-3">-</button>
          <span>1</span>
          <button className="border px-3">+</button>
        </div>

        <button className="w-full py-2 bg-primary text-white rounded hover:bg-pink-700 transition">অর্ডার করুন</button>

        {/* Extra info */}
        <ul className="text-sm text-gray-700 space-y-1 pt-4">
          <li>✅ 100% Original Product.</li>
          <li>🚚 Express Shipping</li>
          <li>💵 Cash on Delivery Available</li>
          <li>🔁 Easy return & exchange policy within 3 days</li>
        </ul>

        {/* Social icons */}
        <div className="pt-4 space-x-4 text-xl text-gray-600">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
