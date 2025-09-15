// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import localFont from 'next/font/local';
import LayoutWrapper from "@/components/layout/LayoutWrapper"; // Import the new wrapper
import "./globals.css";
import path from "path";
import { style } from "framer-motion/client";

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const herofont = localFont({  
  src: [
    { 
      path: '../assets/fonts/font23.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-herofont',
});

// Site metadata
export const metadata: Metadata = {
  title: "ზოო მაღაზია",
  description: "საუკეთესო პროდუქტები და აქსესუარები თქვენი ოთხფეხა მეგობრებისთვის",
};

// Main Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${herofont.variable} antialiased`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}