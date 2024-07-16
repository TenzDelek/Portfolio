import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import localfont from 'next/font/local'
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
const satoshilight= localfont({
  src:[{
    path:"../../public/fonts/Satoshi-Regular.ttf",
    weight:"200"
  }],
  variable:"--font-satoshiregular"
})
const satoshi= localfont({
  src:[{
    path:"../../public/fonts/Satoshi-Bold.ttf",
    weight:"700"
  }],
  variable:"--font-satoshi"
})
const ppeditorial= localfont({
  src:[{
    path:"../../public/fonts/PPEditorialNew-Regular.otf",
    weight:"300"
  }],
  variable:"--font-editorial"
})
const ppeditoriallight= localfont({
  src:[{
    path:"../../public/fonts/PPEditorialNew-Ultralight.otf",
    weight:"100"
  }],
  variable:"--font-editoriallight"
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ppeditoriallight.variable} ${ppeditorial.variable} ${satoshi.variable} ${satoshilight.variable}`}>
        <div className="lg:w-[900px] md:w-[520px] w-[380px] m-auto  px-2  flex flex-col justify-between">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        

        </body>
    </html>
  );
}
