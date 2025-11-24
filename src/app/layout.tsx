import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Support | NDIS Disability & Support Services Provider",
  description: "Trusted NDIS disability and support services provider in Australia. Offering daily living support, community nursing, physiotherapy, and more. Making navigating the NDIS easy.",
  keywords: "NDIS, disability support, aged care, community nursing, physiotherapy, Melbourne, Shepparton, Australia",
  authors: [{ name: "Bright Support" }],
  openGraph: {
    title: "Bright Support | NDIS Disability & Support Services Provider",
    description: "Trusted NDIS disability and support services provider in Australia",
    type: "website",
    locale: "en_AU",
    siteName: "Bright Support",
  },
  metadataBase: new URL('https://www.brightsupport.com.au'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="Organization" />
        <StructuredData type="LocalBusiness" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
