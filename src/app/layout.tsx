import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-dm-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "BioMolds | Diagnostics & Molecular Research",
  description: "BioMolecular Discovery and Solutions Pvt. Ltd. — advancing diagnostics, drug discovery, and molecular research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} antialiased bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
