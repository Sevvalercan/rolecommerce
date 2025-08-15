"use client";

type Order = {
  id: number;
  productName: string;
  quantity: number;
  status: "pending" | "shipped" | "delivered";
};

type Props = {
  order: Order;
  onUpdateStatus: (id: number, status: Order["status"]) => void;
};

export default function OrderItem({ order, onUpdateStatus }: Props) {
  return (
    <div className="border p-4 rounded shadow mb-2 flex justify-between items-center">
      <div>
        <p className="font-bold">{order.productName}</p>
        <p>Miktar: {order.quantity}</p>
        <p>Durum: {order.status}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => onUpdateStatus(order.id, "shipped")}
          disabled={order.status !== "pending"}
        >
          Shipped
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          onClick={() => onUpdateStatus(order.id, "delivered")}
          disabled={order.status !== "shipped"}
        >
         Delivered
        </button>
      </div>
    </div>
  );
}
