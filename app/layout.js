import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BurnRate",
  description:
    "Kalkulatory kosztów samochodu. Oblicz koszt auta, OC, trasę oraz porównanie EV z autem spalinowym.",
  keywords: [
    "koszt utrzymania auta",
    "kalkulator kosztu auta",
    "kalkulator OC",
    "koszt trasy samochodem",
    "EV vs spalinowe",
    "BurnRate",
  ],
  verification: {
    google: "xMlh3ZbUFQh6ClF8Y0MA6J3xQFSgk-HlEdZdTl0fzRE",
  },
};
  title: "BurnRate",

  description:
    "Kalkulatory kosztów samochodu. Oblicz koszt auta, OC, trasę oraz porównanie EV z autem spalinowym.",

  keywords: [
    "koszt utrzymania auta",
    "kalkulator kosztu auta",
    "kalkulator OC",
    "koszt trasy samochodem",
    "EV vs spalinowe",
    "BurnRate",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Navbar />

        <div className="flex-1">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}