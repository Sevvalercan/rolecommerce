"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Role = "user" | "seller" | "admin";

type User = { email: string; role: Role } | null;

type UserContextType = {
  user: User;
  login: (email: string, role: Role) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (email: string, role: Role) => setUser({ email, role });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
