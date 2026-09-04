import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pangasinan Heritage | Discover the Heart of Pangasinan",
  description:
    "Explore the cultural heritage, natural wonders, and iconic destinations of Pangasinan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}