import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App Router Playground",
  description: "RSC",
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
