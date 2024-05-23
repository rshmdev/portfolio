import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/custom-cursor";
import FloatHeader from "@/components/float-header";
import "react-vertical-timeline-component/style.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Rian Moraes - Portfólio",
  description: "Portfólio de Rian Moraes, desenvolvedor full stack", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FloatHeader/>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
