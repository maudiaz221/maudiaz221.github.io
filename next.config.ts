import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better GitHub Pages compatibility
};

export default nextConfig;
