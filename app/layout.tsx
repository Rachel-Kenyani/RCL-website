import React from "react";

import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "../components";
import { Navbar } from "../components";


export const metadata: Metadata = {
  title: "RCL Rentals",
  description: "A Laptop Rental Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
