import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // 为docker部署优化
  async rewrites() {
    return [];
  },
};

export default nextConfig;
