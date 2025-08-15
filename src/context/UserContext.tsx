"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Role = "user" | "seller" | "admin";

type User = {
  email: string;
  role: Role;
};

type UserContextType = {
  user: User | null;
  login: (email: string, role: Role) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, role: Role) => setUser({ email, role });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
