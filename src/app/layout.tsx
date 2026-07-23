import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import LuxuryPreloader from "@/components/ui/LuxuryPreloader";
import "./globals.css";

const outfitFont = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const interFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "VISIONS MANAGEMENT | Premium Creative & Talent Agency",
  description: "We connect brands with exceptional creators through strategy, storytelling, and high-performing digital campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfitFont.variable} ${interFont.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#F8F7F4] text-[#171717] font-body selection:bg-[#C79B63] selection:text-white">
        <LuxuryPreloader />
        {children}
      </body>
    </html>
  );
}
