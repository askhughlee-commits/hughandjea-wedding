import type { NextConfig } from "next";

const repo = "hughandjea-wedding";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  ...(isProd
    ? {
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
    }
    : {}),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;