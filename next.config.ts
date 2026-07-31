import type { NextConfig } from "next";

const isGitHubPages =
  process.env.GITHUB_ACTIONS === "true" &&
  process.env.GITHUB_REPOSITORY === "NickScherbakov/belly-fit-men-60";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/belly-fit-men-60" : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
