"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl w-full h-[70px] flex items-center">
      <div className="mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-900 px-4">
          AD House
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link href="/case-studies" className="text-green-950 font-bold">
            Case Studies
          </Link>
          <Link href="/services" className="text-green-950 font-bold">
            Services
          </Link>
          <Link href="/about" className="text-green-950 font-bold">
            About
          </Link>
          <Link href="/career" className="text-green-950 font-bold">
            Career
          </Link>
          <Link href="/resources" className="text-green-950 font-bold">
            Resources
          </Link>
        </nav>

        {/* "Let's Talk" Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-green-800 text-white px-6 font-semibold flex items-center justify-center h-[70px] w-[120px] text-nowrap"
          >
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-xl p-4 space-y-4 absolute top-[60px] left-0 w-full">
          <Link href="/case-studies" className="block text-gray-800">
            Case Studies
          </Link>
          <Link href="/services" className="block text-gray-800">
            Services
          </Link>
          <Link href="/about" className="block text-gray-800">
            About
          </Link>
          <Link href="/career" className="block text-gray-800">
            Career
          </Link>
          <Link href="/resources" className="block text-gray-800">
            Resources
          </Link>
          <Link
            href="/contact"
            className="block bg-green-900 text-white text-center py-2 rounded-md"
          >
            Let’s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}
