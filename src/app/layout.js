import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/SharedComp/Navbar";
import Footer from "./components/SharedComp/Footer";
import Copyright from "./components/SharedComp/Copyright";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Organ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#ffffff]">
        <Navbar />
        <div className="">
          {children}
        </div>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
