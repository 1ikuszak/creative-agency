import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.youtube.com", // For YouTube thumbnails
      "drewmp.s3.eu-north-1.amazonaws.com", // For S3 hosted images
      // Add any other domains you need
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "drewmp.s3.eu-north-1.amazonaws.com",
        pathname: "/**",
      },
      // Add any other remote patterns you need
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
