import type { Metadata } from "next";
import { Jost, Press_Start_2P } from "next/font/google";
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

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return(
    <html lang="en">
      <body className={`${jost.variable} ${pressStart.variable} antialiased`}>
        <div className="flex items-center w-full h-screen">
          <div className="flex flex-col space-x-4 mx-4 xs:pl-20">
            <div className="font-heading text-primary text-6xl xs:text-8xl mb-8">404</div>
            <div>
              <h1>Page not found.</h1>
              <a href="/">
                <div className="inline-flex text-sm text-primary">
                  Go back
                  <svg className="stroke-2 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}