import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono, Magra } from "next/font/google";

import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
  adjustFontFallback: true,
});

const magra = Magra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-magra",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavobispo.com"),
  title: {
    default: "Gustavo Bispo, Senior Frontend & Product Engineer",
    template: "%s · Gustavo Bispo",
  },
  description:
    "Senior Frontend & Product Engineer turning product complexity into clear, resilient interfaces.",
  applicationName: "Gustavo Bispo",
  authors: [{ name: "Gustavo Bispo" }],
  creator: "Gustavo Bispo",
  publisher: "Gustavo Bispo",
  openGraph: {
    type: "website",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Gustavo Bispo, Senior Frontend & Product Engineer",
    description:
      "Senior Frontend & Product Engineer turning product complexity into clear, resilient interfaces.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Bispo, Senior Frontend & Product Engineer",
    description:
      "Senior Frontend & Product Engineer turning product complexity into clear, resilient interfaces.",
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${jetbrains.variable} ${magra.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
