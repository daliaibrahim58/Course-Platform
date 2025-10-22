import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import './globals.css'


export const metadata: Metadata = {
  title: "ITLegend LMS | Learn Anytime",
  description:
    "Interactive learning platform built with Next.js and TypeScript",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar /> <main className="min-h-screen">{children}</main> 
      </body>
    </html>
  );
}
