import type { NextConfig } from "next";

// Static export served by a Cloudflare Worker (see worker.js for redirects).
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
