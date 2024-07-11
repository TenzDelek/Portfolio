import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tenzin Delek",
  description: "Portfolio of Tenzin Delek for development and design",
  openGraph: {
    title: 'Tenzin Delek Portfolio',
    description: 'Portfolio of Tenzin Delek for development and design',
    url:'https://tenzindelekportfolio.vercel.app/',
    siteName:'Tenzin Portfolio',
    images: [
      {
        url: 'https://tenzindelekportfolio.vercel.app/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'PORTFOLIO 2024',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:w-[720px] md:w-[520px] w-[380px] m-auto  px-2  flex flex-col justify-between">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        

        </body>
    </html>
  );
}
