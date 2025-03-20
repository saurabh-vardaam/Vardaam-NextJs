import type { NextConfig } from "next";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vardaam-site-backend.test',
      },
    ], // Add your backend domain here
  },
  
};

export default nextConfig;
