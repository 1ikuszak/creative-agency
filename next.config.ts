/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
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
    ],
  },
};

module.exports = nextConfig;
