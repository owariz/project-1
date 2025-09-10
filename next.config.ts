import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // ✅ อนุญาตทุกโดเมน
      },
    ],
    unoptimized: true, // ✅ ปิดการ optimize รูปภาพของ Next.js
  },
  // เพิ่มตรงนี้เพื่อ ignore TS/ESLint errors ตอน build
  typescript: {
    ignoreBuildErrors: true, // ✅ จะ build แม้ TS error
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ จะ build แม้ ESLint error
  },
};

export default nextConfig;
