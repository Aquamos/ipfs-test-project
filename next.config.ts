import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Modified configurations for IPFS compatibility:
  basePath: "",
  trailingSlash: true, // Add trailing slashes for proper path resolution
};

export default nextConfig;
