"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

const dummyProducts: Product[] = [
  { id: 1, name: "Ürün 1", price: 49.99, stock: 10 },
  { id: 2, name: "Ürün 2", price: 29.99, stock: 5 },
  { id: 3, name: "Ürün 3", price: 19.99, stock: 0 },
];

export default function HomePage() {
  const [products] = useState<Product[]>(dummyProducts);
  const { addToCart, cart } = useCart();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ürünler</h1>
      <p>Sepette {cart.reduce((a, c) => a + c.quantity, 0)} adet ürün var</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow flex flex-col justify-between"
          >
            <div>
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p>Fiyat: {product.price.toFixed(2)} TL</p>
              <p>Stok: {product.stock}</p>
            </div>
            <button
              className={`mt-2 px-3 py-1 rounded text-white ${
                product.stock > 0
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={product.stock === 0}
              onClick={() => addToCart(product)}
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
