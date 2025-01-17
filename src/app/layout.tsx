import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Doctor from "@/components/Doctor";
import Testimonial from "@/components/Testimonial";
import Service from "@/components/Service";
import Contact from "@/components/Contact";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
       <Navbar/>
       <Hero/>
       <About/>
       <Doctor />
       <Service/>
       <Testimonial/>
       <Contact/>
        {children}</body>
    </html>
  );
}
