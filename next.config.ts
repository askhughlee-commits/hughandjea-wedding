import type { NextConfig } from "next";

// const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // 일단 보관

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // 커스텀 도메인(hughandjea.cloud) 붙일 거라서 일단 basePath 관련은 끔
  // ...(basePath
  //   ? {
  //       basePath,
  //       assetPrefix: `${basePath}/`,
  //     }
  //   : {}),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;