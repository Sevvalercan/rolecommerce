"use client";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Header() {
  const { user, logout } = useUser();

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">RoleCommerce</h1>
      <nav className="flex gap-4">
        <Link href="/home" className="hover:text-blue-600">
          Home
        </Link>
        {!user && (
          <Link href="/login" className="hover:text-blue-600">
            Login
          </Link>
        )}

        {user && (
          <>
            {user.role === "user" && (
              <Link href="/rolers/user/products">Ürünler</Link>
            )}
            {user.role === "seller" && (
              <Link href="/rolers/seller/orders">Siparişler</Link>
            )}
            {user.role === "admin" && (
              <Link href="/rolers/admin/users">Admin</Link>

            )}
            <button onClick={logout} className="text-red-600 hover:underline">
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
