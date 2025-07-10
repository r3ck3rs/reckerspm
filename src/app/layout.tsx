import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Peter Reckers - ReckersPM",
  description: "Digitale transformatie voor kleine bedrijven - van strategie tot educatie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-inter antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
