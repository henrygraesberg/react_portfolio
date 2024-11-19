import type { Metadata } from "next";
import { Inter, Ultra } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Græsberg",
  description: "The portfolio of Henry Græsberg",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const ultra = Ultra({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ultra",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${ultra.variable}`}>
      <head>

      </head>

      <body className="font-inter">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
