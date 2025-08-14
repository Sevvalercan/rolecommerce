"use client";

type Product = {
  id: number;
  name: string;
  price: number;
};

type Props = {
  product: Product;
  onAddToCart: (id: number) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
  return (
       <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>

      <button
     onClick={() => onAddToCart(product.id)}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >Add to Cart</button>
    </div>
  );
}