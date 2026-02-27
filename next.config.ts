import type { NextConfig } from "next";

const repo = "hughandjea-wedding";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages subpath 대응
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;