import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "czipioneacmyqkjdkuaz.supabase.co",
        pathname: "/storage/v1/object/public/showcase/**",
      },
    ],
  },
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
