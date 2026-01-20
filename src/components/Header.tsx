'use client'
import { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [open, setOpen] = useState(false);

  const renderMenuItem = () => (
    <>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </>
  );

  const renderMobileMenu = () => (
    <>
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="relative h-4 w-6 flex-col justify-center flex xs:hidden z-50">
        <span
          className={`
            absolute h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out
            ${open ? 'rotate-45' : '-translate-y-1'}
          `}/>
        <span
          className={`
            absolute h-0.5 w-full bg-foreground transition-all duration-300 ease-in-out
            ${open ? '-rotate-45' : 'translate-y-1'}
          `}/>
      </button>

      <div id="mobile-menu"
        className={`
          fixed inset-x-0 top-0 z-40 bg-background
          transform transition-all duration-300 ease-out
          ${open
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'}
        `}>

        <nav className="flex-col items-end space-y-6 text-highlight p-4 pt-20 flex xs:hidden">
          {renderMenuItem()}
        </nav>
      </div>
    </>
  );

  return (
    <header className="flex flex-row justify-between items-center h-14">
      <Link className="font-heading text-primary z-50" href="/">poison</Link>
      <nav className="space-x-6 text-highlight hidden xs:flex">
        {renderMenuItem()}
      </nav>

      {renderMobileMenu()}
    </header>
  );
}