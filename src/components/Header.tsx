import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-14">
      <Link className="font-heading text-primary" href="/">poison</Link>
      <nav className="flex space-x-6 text-highlight">
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}