import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  assetPrefix: "./", // Use relative paths for assets
  basePath: "",
  trailingSlash: true, // Add trailing slashes to ensure proper relative path resolution
};

export default nextConfig;
