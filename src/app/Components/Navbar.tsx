"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="w-full bg-black text-white h-[4rem]">
        <div className="mx-auto flex items-center justify-between px-[2rem] leading-[4rem] 2xl:w-[1500px]">
          <h1 className="text-[32px] font-sans">BLOG</h1>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex list-none space-x-4">
            <li className="text-[18px] font-sans">
              <Link href="/">HOME</Link>
            </li>
            <li className="text-[18px] font-sans">
              <Link href="/About">ABOUT</Link>
            </li>
            <li className="text-[18px] font-sans">
              <Link href="/Blog">BLOG</Link>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="sm:hidden" onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${isOpen ? "block" : "hidden"} bg-black text-white px-[2rem] py-4`}
        >
          <ul className="list-none space-y-4">
            <li className="text-[18px] font-sans">
              <Link href="/">HOME</Link>
            </li>
            <li className="text-[18px] font-sans">
              <Link href="/About">ABOUT</Link>
            </li>
            <li className="text-[18px] font-sans">
              <Link href="/Blog">BLOG</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
