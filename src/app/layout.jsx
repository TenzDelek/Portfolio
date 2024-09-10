import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import localfont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tenzindelekportfolio.vercel.app"),
  title: "Tenzin Delek",
  description: "Portfolio of Tenzin Delek for development and design",
  
};

const overused = localfont({
  src: [
    {
      path: "../../public/fonts/OverusedGrotesk-VF.woff2",
      weight: "800",
    },
  ],
  variable: "--font-overused",
});
const satoshilight = localfont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.ttf",
      weight: "200",
    },
  ],
  variable: "--font-satoshiregular",
});
const satoshi = localfont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});
const ppeditorial = localfont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Regular.otf",
      weight: "300",
    },
  ],
  variable: "--font-editorial",
});
const ppeditoriallight = localfont({
  src: [
    {
      path: "../../public/fonts/PPEditorialNew-Ultralight.otf",
      weight: "100",
    },
  ],
  variable: "--font-editoriallight",
});
const applefont1 = localfont({
  src: [
    {
      path: "../../public/fonts/sf-pro-display_semibold.woff2",
      weight: "500",
    },
  ],
  variable: "--font-applefont1",
});
const mainfont=localfont({
  src: [
    {
      path: "../../public/fonts/ABCMonumentGrotesk-Regular-Trial.otf",
      weight: "100",
    },
  ],
  variable: "--font-mainfont",
})
const mediummainfont=localfont({
  src: [
    {
      path: "../../public/fonts/ABCMonumentGrotesk-Medium-Trial.otf",
      weight: "400",
    },
  ],
  variable: "--font-mediummainfont",
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mediummainfont.variable} ${mainfont.variable} ${applefont1.variable} ${overused.variable} ${ppeditoriallight.variable} ${ppeditorial.variable} ${satoshi.variable} ${satoshilight.variable}`}
      >
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className=" m-auto   flex flex-col justify-between">
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
