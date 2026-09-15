import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      "/work/:path*",
      "/about",
      "/craft",
      "/notes",
      "/colophon",
      "/contact",
      "/_design",
    ].map((source) => ({
      source,
      destination: "/",
      permanent: true,
    }));
  },
};

export default nextConfig;
