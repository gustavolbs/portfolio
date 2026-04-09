import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gustavo Bispo | Frontend Engineer",
  description:
    "Bilingual portfolio for Gustavo Bispo, a frontend engineer focused on React, Next.js, TypeScript, motion, and product-driven interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#100a16] antialiased">
      <body className="min-h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,177,93,0.14),transparent_30%),radial-gradient(circle_at_10%_24%,rgba(255,106,169,0.09),transparent_22%),radial-gradient(circle_at_88%_70%,rgba(95,230,224,0.08),transparent_22%),linear-gradient(180deg,#16101d_0%,#100a16_52%,#0d0812_100%)] text-[#fff7f1] selection:bg-[#ffb15d] selection:text-[#180f22]">
        {children}
      </body>
    </html>
  );
}
