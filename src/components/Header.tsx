"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg w-full h-[70px] flex items-center fixed top-0 left-0 z-50">
      <div className="mx-auto flex justify-between items-center w-full">

        <Link href="/" className="text-xl font-bold text-green-900 px-4">
          <Image
            src="/logo.png" 
            alt="Services Graphic"
            width={70}
            height={50}
          />
        </Link>

        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link href="/case-studies" className="text-dark-green-custom font-bold">
            Case Studies
          </Link>
          <Link href="/services" className="text-dark-green-custom font-bold">
            Services
          </Link>
          <Link href="/about" className="text-dark-green-custom font-bold">
            About
          </Link>
          <Link href="/career" className="text-dark-green-custom font-bold">
            Career
          </Link>
          <Link href="/resources" className="text-dark-green-custom font-bold">
            Resources
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="bg-light-green-custom text-white px-6 font-semibold flex items-center justify-center h-[70px] w-[120px] text-nowrap"
          >
            Let’s Talk
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800 px-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white shadow-xl p-4 space-y-4 absolute top-[60px] left-0 w-full">
          <Link href="/case-studies" className="block text-dark-green-custom">
            Case Studies
          </Link>
          <Link href="/services" className="block text-dark-green-custom">
            Services
          </Link>
          <Link href="/about" className="block text-dark-green-custom">
            About
          </Link>
          <Link href="/career" className="block text-dark-green-custom">
            Career
          </Link>
          <Link href="/resources" className="block text-dark-green-custom">
            Resources
          </Link>
          <Link
            href="/contact"
            className="block bg-light-green-custom text-white text-center py-2 rounded-md"
          >
            Let’s Talk
          </Link>
        </nav>
      )}
    </header>
  );
}
