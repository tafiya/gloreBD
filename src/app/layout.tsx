import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Outfit } from 'next/font/google';
import BottomNavbar from "@/components/shared/BottomNavbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const outfit = Outfit({
  subsets: ['latin'],
 // Optional: customize weights
  variable: '--font-outfit',           // Optional: use CSS variable
  // display: 'swap',
});

export const metadata: Metadata = {
  title: "Glore BD",
  description: "A clothing shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}>
      <body
        
      >
       
     <Header></Header>
      
   
        {children}
        <Footer></Footer>
             <BottomNavbar />
      </body>
    </html>
  );
}
