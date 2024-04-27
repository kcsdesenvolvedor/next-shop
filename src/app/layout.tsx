import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Next Shop usando Next 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ clsx(inter.className, 'bg-slate-700')} suppressHydrationWarning={true}>
        <NavBar />
        <main className="h-screen p-16">
          {children}
        </main>
      </body>
    </html>
  );
}
