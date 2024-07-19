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

const overused= localfont({
  src:[{
    path:"../../public/fonts/OverusedGrotesk-VF.woff2",
    weight:"800"
  }],
  variable:"--font-overused"
})
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
      <body className={`${inter.className} ${overused.variable} ${ppeditoriallight.variable} ${ppeditorial.variable} ${satoshi.variable} ${satoshilight.variable}`}>
        <div className=" m-auto  flex flex-col justify-between">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        

        </body>
    </html>
  );
}
