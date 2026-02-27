import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // 없으면 로컬은 ""로 빌드됨

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  ...(basePath
    ? {
      basePath,
      assetPrefix: `${basePath}/`,
    }
    : {}),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;