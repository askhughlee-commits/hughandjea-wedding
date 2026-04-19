import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/lib/gsap/register";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
import BGMPlayer from "@/components/BGMPlayer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "혁기 ❤️ 영재 결혼식에 초대합니다",
  description: "2026년 6월 14일 오후 2시 셀럽앤어셈",
  openGraph: {
    title: "혁기 ❤️ 영재 결혼식에 초대합니다",
    description: "2026년 6월 14일 오후 2시 셀럽앤어셈",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Noto+Serif+KR:wght@300;400;500;600&family=Lavishly+Yours&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BGMPlayer />
        <SmoothScroll />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}