import type { Metadata, Viewport } from "next";
import { Funnel_Display, Funnel_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-funnel-display",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iam.linearcraft.dev"),
  title: {
    default: "Gustavo Bispo, Senior Frontend, Product & Forward Deployed Engineer",
    template: "%s · Gustavo Bispo",
  },
  description:
    "Senior Frontend, Product & Forward Deployed Engineer turning product complexity into clear, resilient interfaces.",
  applicationName: "Gustavo Bispo",
  authors: [{ name: "Gustavo Bispo" }],
  creator: "Gustavo Bispo",
  publisher: "Gustavo Bispo",
  openGraph: {
    type: "website",
    siteName: "Gustavo Bispo",
    locale: "en_US",
    title: "Gustavo Bispo, Senior Frontend, Product & Forward Deployed Engineer",
    description:
      "Senior Frontend, Product & Forward Deployed Engineer turning product complexity into clear, resilient interfaces.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Bispo, Senior Frontend, Product & Forward Deployed Engineer",
    description:
      "Senior Frontend, Product & Forward Deployed Engineer turning product complexity into clear, resilient interfaces.",
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0a0c0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelSans.variable} ${funnelDisplay.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
