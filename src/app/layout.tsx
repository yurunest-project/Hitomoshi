import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ひともし | 人の心に、ぽっと優しい灯火をともす。",
  description:
    "個人事業「ひともし」の公式サイト。癒やし系Webサービス・アプリのハブ。ゆるネストなど、心に寄り添うサービスをお届けします。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
