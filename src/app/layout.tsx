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
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Ultra&display=swap" rel="stylesheet" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
