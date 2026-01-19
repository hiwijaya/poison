import type { Metadata } from "next";
import { Geist_Mono, Jost, Press_Start_2P } from "next/font/google";
import "./globals.css";


const jost = Jost({
  variable: "--font-jost",
  display: 'swap',
});

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  display: 'swap',
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: 'swap',
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Poison",
  description: "A venomous template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${pressStart.variable} ${geistMono.variable} antialiased`}>
        <div className="w-full max-w-2xl m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
