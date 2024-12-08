import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.morpho.org',
        pathname: '/v2/assets/images/**',
      },
    ],
  },
};

export default nextConfig;
