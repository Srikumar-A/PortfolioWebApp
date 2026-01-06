import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/ui/globals.css"
import Link from "next/link"



export const metadata: Metadata = {
  title: "Srikumar Arivalgan | Portfolio",
  description: "Auto Updating portfolio from github projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="border-b border-gray-800 p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
