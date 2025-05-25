import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
// import Footer from "@/components/layout/footer";
import LayoutFooter from "@/components/layout/layoutFooter";
import { Toaster } from "@/components/ui/sonner";
import MobileHeader from "@/components/layout/mobileHeader";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panegna | Développeur web",
  description: "Bienvenue sur mon portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={` ${instrumentSerif.variable} ${geist.variable} ${geist.className} ${instrumentSerif.className}`}
    >
      <body className={` antialiased `}>
        <Header className="hidden md:flex" />
        <MobileHeader className="md:hidden" />
        {children}
        <Toaster />
        <LayoutFooter />
      </body>
    </html>
  );
}
