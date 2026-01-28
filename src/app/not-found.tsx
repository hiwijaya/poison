import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Could not find requested resource',
}

export default function NotFound() {
  return(
    <div className="my-16 text-center">
      <h2 className="text-lg font-heading text-highlight mb-2">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-sm text-primary">Go back</Link>
    </div>
  );
}