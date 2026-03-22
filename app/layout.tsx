import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepostAI — Repurpose Content in Seconds",
  description: "Transform any article or text into LinkedIn posts, Twitter threads, Instagram captions, and email snippets instantly with AI.",
  keywords: "content repurposing, AI content, LinkedIn post generator, Twitter thread generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f0f5]">{children}</body>
    </html>
  );
}
