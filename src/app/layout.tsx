import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import Header from "@/components/Header";

export const metadata = {
  title: "RoleCommerce",
  description: "Mini e-ticaret uygulaması (User, Seller, Admin)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-800">
        <UserProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
