import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Græsberg",
  description: "The portfolio of Henry Græsberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
