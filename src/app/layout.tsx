import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import LuxuryPreloader from "@/components/ui/LuxuryPreloader";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const outfitFont = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "VISIONS MANAGEMENT | Premier Partnership Agency",
  description: "Connecting your business with global brand networks, strategic markets, and top-tier talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: Readonly<React.ReactNode>;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfitFont.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#F8F7F4] text-[#171717] selection:bg-[#C79B63] selection:text-white font-sans">
        <LuxuryPreloader />
        {children}
      </body>
    </html>
  );
}
