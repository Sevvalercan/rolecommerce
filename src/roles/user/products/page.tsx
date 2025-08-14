"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { useUser } from "@/context/UserContext";
import ProtectedRoute from "@/components/ProtectedRoute";


const dummyProducts = [
  { id: 1, name: "Ürün 1", price: 50 },
  { id: 2, name: "Ürün 2", price: 75 },
  { id: 3, name: "Ürün 3", price: 100 },
];

export default function ProductPage(){
const [cart, setCart] = useState<number[]>([]);
const { user } = useUser();


const addToCart = (id: number) => {
    setCart((prev) => [...cart, id]);
};

    return (
       <ProtectedRoute role="user">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            
            {dummyProducts.map((product) => (
                <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                />
            ))}

        </div>
        <p className="mt-4 font-bold">Sepet: {cart.length}</p>

       </ProtectedRoute>
    );
}