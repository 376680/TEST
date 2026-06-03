import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "小鼠帝国总务管理局 - 让官僚主义变得前所未有的便捷",
  description: "小鼠帝国总务管理局官方门户网站，提供小鼠居民各类政务服务、信息查询和在线办事功能。",
  keywords: ["小鼠帝国", "政府网站", "政务服务", "小鼠帝国总务管理局"],
  authors: [{ name: "小鼠帝国总务管理局" }],
  icons: {
    icon: "/TEST/mouse-logo.png",
  },
  openGraph: {
    title: "小鼠帝国政府网 - 官方门户网站",
    description: "小鼠帝国政府官方门户网站，提供小鼠居民各类政务服务、信息查询和在线办事功能。",
    type: "website",
    siteName: "小鼠帝国政府网",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
