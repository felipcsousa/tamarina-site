import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'blog.assistentedeviagem.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.gov.br',
      },
    ],
  },
};

export default nextConfig;
