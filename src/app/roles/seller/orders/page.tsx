"use client";

import { useState } from "react";
import OrderItem from "./OrderItem";
import ProtectedRoute from "@/components/ProtectedRoute";

type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
  id: number;
  productName: string;
  quantity: number;
  status: OrderStatus;
};

const dummyOrders: Order[] = [
  { id: 1, productName: "Ürün 1", quantity: 2, status: "pending" },
  { id: 2, productName: "Ürün 2", quantity: 1, status: "pending" },
  { id: 3, productName: "Ürün 3", quantity: 5, status: "shipped" },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(dummyOrders);

  const updateStatus = (id: number, status: OrderStatus) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <ProtectedRoute role="seller">
      <h2 className="text-2xl font-bold mb-4">Siparişler</h2>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} onUpdateStatus={updateStatus} />
      ))}
    </ProtectedRoute>
  );
}
