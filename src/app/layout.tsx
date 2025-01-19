import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Identa Stomatološka Ordinacija Niš | Dental Services in Serbia",
  description:
    "Identa Dental Clinic in Niš offers top-notch dental services, including preventive, aesthetic, and implant dentistry. Your smile is our priority.",
  keywords: [
    "dental clinic Niš",
    "stomatološke usluge Niš",
    "zubar u Nišu",
    "zubar Niš",
    "zubar",
    "dental services Serbia",
    "aesthetic dentistry Niš",
    "implant dentistry Serbia",
    "teeth cleaning Niš",
    "teeth whitening Serbia",
    "dental implants Niš",
    "preventive dentistry Serbia",
  ],
  alternates: {
    languages: {
      en: "/en",
      sr: "/sr",
    },
  },
  openGraph: {
    title: "Identa Dental Clinic | Comprehensive Dental Care in Niš",
    description:
      "Visit Identa Dental Clinic in Niš, Serbia for advanced dental care services. Our expert team specializes in modern and personalized treatments for your dental health.",
    url: "https://www.identa.rs",
    images: [
      {
        url: "https://www.identa.rs/images/clinic-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Identa Dental Clinic in Niš",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
