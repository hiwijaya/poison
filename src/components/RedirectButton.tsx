import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

const RedirectButton: React.FC<ButtonProps> = ({
  children,
  href = "#"
}) => {
  return (
    <Link href={href} rel="noopener noreferrer" target="_blank"
      className="inline-flex bg-primary rounded-full px-6 h-10 cursor-pointer">
      <div className="text-xs text-background font-bold inline-flex items-center">
        {children}
        <svg className="fill-background stroke-4 w-3 ml-2" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/>
        </svg>
      </div>
    </Link>
  );
};
export default RedirectButton;