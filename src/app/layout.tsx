import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "배성현 | AI 응용 개발자",
  description: "AI 도구 활용 전문 개발자 배성현의 포트폴리오 웹사이트",
  keywords: ["배성현", "AI 개발자", "포트폴리오", "Next.js", "React", "TypeScript"],
  authors: [{ name: "배성현" }],
  creator: "배성현",
  publisher: "배성현",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://bae-sunghyun.com",
    title: "배성현 | AI 응용 개발자",
    description: "AI 도구 활용 전문 개발자 배성현의 포트폴리오 웹사이트",
    siteName: "배성현 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "배성현 | AI 응용 개발자",
    description: "AI 도구 활용 전문 개발자 배성현의 포트폴리오 웹사이트",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navigation />
        <main>{children}</main>
        <footer className="bg-gray-50 dark:bg-gray-900 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600 dark:text-gray-400">
              <p>&copy; 2025 배성현. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
