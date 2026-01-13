import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export const metadata: { title: string } = {
  title: "Welcome to John Keane Studios"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
