import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DentAdvisor - Your Guide to Paintless Dent Repair",
    template: "%s | DentAdvisor",
  },
  description: "Expert guidance on paintless dent repair (PDR). Learn about hail damage, finding qualified technicians, insurance claims, and get connected with certified PDR professionals.",
  keywords: ["paintless dent repair", "PDR", "hail damage repair", "dent removal", "auto body repair", "car dent fix"],
  authors: [{ name: "DentAdvisor" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dentadvisor.org",
    siteName: "DentAdvisor",
    title: "DentAdvisor - Your Guide to Paintless Dent Repair",
    description: "Expert guidance on paintless dent repair. Find qualified technicians and make informed decisions about your vehicle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentAdvisor - Your Guide to Paintless Dent Repair",
    description: "Expert guidance on paintless dent repair. Find qualified technicians and make informed decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
