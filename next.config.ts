import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/belly-fit-men-60",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
