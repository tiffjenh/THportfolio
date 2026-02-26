import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tiffany Huang | Product Manager",
  description:
    "Personal portfolio of Tiffany Huang, Product Manager in San Francisco.",
  openGraph: {
    title: "Tiffany Huang | Product Manager",
    description:
      "Personal portfolio of Tiffany Huang, Product Manager in San Francisco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
