import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CloudWeave - Modern Cloud Infrastructure Management",
  description: "Simplify your cloud infrastructure with CloudWeave. Seamless deployment, monitoring, and scaling for modern applications.",
  keywords: "cloud infrastructure, deployment, monitoring, scaling, DevOps, cloud management",
  openGraph: {
    title: "CloudWeave - Modern Cloud Infrastructure Management",
    description: "Simplify your cloud infrastructure with CloudWeave.",
    url: "https://cloudweave.io",
    siteName: "CloudWeave",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudWeave - Modern Cloud Infrastructure Management",
    description: "Simplify your cloud infrastructure with CloudWeave.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950`}>
        {children}
      </body>
    </html>
  );
}
