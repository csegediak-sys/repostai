import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepostAI — Repurpose Content in Seconds",
  description: "Transform any article or text into LinkedIn posts, Twitter threads, Instagram captions, and email snippets instantly with AI. Save hours every week.",
  keywords: "content repurposing tool, AI content repurposing, LinkedIn post generator, Twitter thread generator, Instagram caption generator, repurpose blog post, content marketing tool 2026",
  authors: [{ name: "RepostAI" }],
  creator: "RepostAI",
  metadataBase: new URL("https://repostai.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RepostAI — One Article. Four Platforms. 30 Seconds.",
    description: "Transform any article into LinkedIn posts, Twitter threads, Instagram captions, and email snippets instantly. Free to start.",
    url: "https://repostai.netlify.app",
    siteName: "RepostAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RepostAI — Repurpose Content in Seconds",
    description: "One article → LinkedIn, Twitter, Instagram & Email in 30 seconds. Free AI content repurposing tool.",
    creator: "@repostai",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f0f0f5]">{children}</body>
    </html>
  );
}
