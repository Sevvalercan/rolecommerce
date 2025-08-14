"use client";
import { ReactNode, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  role: "user" | "seller" | "admin";
};

export default function ProtectedRoute({ children, role }: Props) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    else if (user.role !== role) router.push("/home");
  }, [user, role, router]);

  if (!user || user.role !== role) return null;

  return <>{children}</>;
}
