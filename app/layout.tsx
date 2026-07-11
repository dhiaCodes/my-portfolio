import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhia Eddine Abddelli — Mobile Product Engineer",
  description:
    "Building thoughtful mobile experiences with Flutter. Premium mobile applications crafted with care.",
  keywords: [
    "Flutter developer",
    "mobile engineer",
    "product engineer",
    "iOS",
    "Android",
    "mobile applications",
  ],
  openGraph: {
    title: "Dhia Eddine Abdelli — Mobile Product Engineer",
    description:
      "Building thoughtful mobile experiences with Flutter. Premium mobile applications crafted with care.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhia Eddine Abdelli — Mobile Product Engineer",
    description:
      "Building thoughtful mobile experiences with Flutter. Premium mobile applications crafted with care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
