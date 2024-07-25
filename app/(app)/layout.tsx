import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { cn } from "@/lib/utils";
import Footer from "../components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresco",
  description: "All your foof needs sorted",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/head.png" sizes="any" />
      </head>
      <body  className={cn(
          "min-h-screen font-sans antialiased",inter.className)}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
