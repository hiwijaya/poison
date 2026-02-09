import type { Metadata } from "next";
import { Geist_Mono, Jost, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


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
  title: "Poison · a venomous template",
  description: "Developer portfolio and blog template designed for creators who value clarity, performance, and character.",
  metadataBase: new URL('https://venomous-template.vercel.app'),
  alternates: {
    types: {
      "application/rss+xml": [
        {
          url: "/rss.xml",
          title: "RSS Feed"
        }
      ]
    }
  },
  openGraph: {
    title: "Poison · a venomous template",
    description: "Developer portfolio and blog template designed for creators who value clarity, performance, and character.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Poison',
    url: 'https://venomous-template.vercel.app',
    images: [
      {
        url: '/poison-og.png',
        width: 1200,
        height: 630,
        alt: 'Poison · a venomous template'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Poison · a venomous template",
    description: "Developer portfolio and blog template designed for creators who value clarity, performance, and character.",
    images: ['/poison-og.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${pressStart.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col w-full max-w-2xl min-h-screen m-auto px-4 md:px-0">
          <Header/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
