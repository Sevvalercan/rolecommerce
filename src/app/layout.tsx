import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RoleCommerce",
  description: "Mini e-ticaret uygulaması (User, Seller, Admin)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>c
    </html>
  );
}
