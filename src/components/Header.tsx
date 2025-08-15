"use client";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Header() {
  const { user, logout } = useUser();

  // Eğer admin veya seller ise Header minimal, Sidebar ayrı gösterilecek
  if (user && (user.role === "admin" || user.role === "seller")) {
    return null;
  }

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">RoleCommerce</h1>
      <nav className="flex gap-4">
        <Link href="/home" className="hover:text-blue-600">Home</Link>
        {!user && <Link href="/login" className="hover:text-blue-600">Login</Link>}
        {user && user.role === "user" && (
          <>
            <Link href="/rolers/user/products">Ürünler</Link>
            <Link href="/rolers/user/cart">Sepet</Link>
            <button onClick={logout} className="text-red-600 hover:underline">Logout</button>
          </>
        )}
      </nav>
    </header>
  );
}
