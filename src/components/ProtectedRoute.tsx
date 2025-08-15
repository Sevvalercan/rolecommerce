"use client";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

type Role = "user" | "seller" | "admin";

type Props = {
  children: ReactNode;
  role: Role;
};

export default function ProtectedRoute({ children, role }: Props) {
  const { user } = useUser();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (user.role !== role) {
      router.push("/home");
    } else {
      setChecking(false);
    }
  }, [user, role, router]);

  if (checking) return <p>Yükleniyor...</p>;

  return <>{children}</>;
}
