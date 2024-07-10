import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar  from "@/componets/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zim E-Passports",
  description: "ZIm E-Passports created by HudsonWayne",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

