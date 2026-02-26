import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen font-sans antialiased"
        style={{
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
