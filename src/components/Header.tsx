"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const handleDropdownEnter = (name: string) => setOpenDropdown(name);
  const handleDropdownLeave = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  const handleSubmenuEnter = (name: string) => setOpenSubmenu(name);
  const handleSubmenuLeave = () => setOpenSubmenu(null);

  return (
    <header className="bg-white shadow-lg w-full h-[70px] flex items-center fixed top-0 left-0 z-50">
      <div className="mx-auto flex justify-between items-center w-full">
        <Link href="/" className="px-4">
          <Image src="/logo.png" alt="Logo" width={70} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link href="/case-studies" className="text-dark-green-custom font-bold">Case Studies</Link>
          <Link href="/services" className="text-dark-green-custom font-bold">Services</Link>
          <Link href="/about" className="text-dark-green-custom font-bold">About</Link>
          <Link href="/career" className="text-dark-green-custom font-bold">Career</Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("resources")}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center text-dark-green-custom font-bold focus:outline-none">
              Resources <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            {/* Dropdown */}
            <div className={`absolute top-[80%] left-0 bg-white shadow-lg mt-2 py-2 w-44 rounded-md transition-all duration-300 ease-out border border-gray-300
              ${openDropdown === "resources" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              
              {/* Solutions */}
              <div
                className="relative"
                onMouseEnter={() => handleSubmenuEnter("solutions")}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="flex items-center justify-between px-4 py-2 text-dark-green-custom hover:bg-gray-100 cursor-pointer">
                  <span>Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className={`absolute top-0 left-full bg-white shadow-lg w-52 rounded-md transition-all duration-300 ease-out border border-gray-300
                  ${openSubmenu === "solutions" ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-2 invisible"}`}>
                  <Link href="/business-automation" className="block px-4 py-3 text-dark-green-custom hover:bg-gray-100">Business Automation</Link>
                </div>
              </div>

              {/* Courses */}
              <div
                className="relative"
                onMouseEnter={() => handleSubmenuEnter("courses")}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="flex items-center justify-between px-4 py-2 text-dark-green-custom hover:bg-gray-100 cursor-pointer">
                  <span>Courses</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className={`absolute top-0 left-full bg-white shadow-lg w-52 rounded-md transition-all duration-300 ease-out border border-gray-300
                  ${openSubmenu === "courses" ? "opacity-100 translate-x-0 visible" : "opacity-0 -translate-x-2 invisible"}`}>
                  <Link href="https://www.aidataschool.com/" target="blank"  className="block px-4 py-3 text-dark-green-custom hover:bg-gray-100">Web Development</Link>
                  <Link href="https://www.aidataschool.com/" target="blank"  className="block px-4 py-3 text-dark-green-custom hover:bg-gray-100">Artificial Intellingence</Link>
                  <Link href="https://www.aidataschool.com/" target="blank"  className="block px-4 py-3 text-dark-green-custom hover:bg-gray-100">Data Analysis</Link>
                </div>
              </div>
              
            </div>
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <MagneticButton>
          <Link href="/contact" className="bg-light-green-custom text-white px-6 font-semibold flex items-center justify-center h-[70px] w-[120px] text-nowrap">
            Let’s Talk
          </Link>
          </MagneticButton>
        </div>

        {/* Mobile Button */}
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
          <Link href="/case-studies" className="block text-dark-green-custom">Case Studies</Link>
          <Link href="/services" className="block text-dark-green-custom">Services</Link>
          <Link href="/about" className="block text-dark-green-custom">About</Link>
          <Link href="/career" className="block text-dark-green-custom">Career</Link>

          {/* Mobile Resources */}
          <details className="block border border-gray-300 rounded-md">
            <summary className="text-dark-green-custom cursor-pointer list-none flex items-center justify-between py-2 px-2">
              Resources
              <ChevronDown className="ml-2 w-4 h-4" />
            </summary>

            <div className="pl-4 mt-2 space-y-2">
              <details className="block border border-gray-300 rounded-md">
                <summary className="text-dark-green-custom flex items-center justify-between py-2 px-2">
                  Solutions
                  <ChevronDown className="ml-2 w-4 h-4" />
                </summary>
                <div className="pl-4 mt-2">
                  <Link href="/business-automation" target="_blank" className="block py-1 text-dark-green-custom">Business Automation</Link>
                </div>
              </details>

              <details className="block border border-gray-300 rounded-md">
                <summary className="text-dark-green-custom flex items-center justify-between py-2 px-2">
                  Courses
                  <ChevronDown className="ml-2 w-4 h-4" />
                </summary>
                <div className="pl-4 mt-2">
                  <Link href="https://www.aidataschool.com/" target="_blank"  className="block py-1 text-dark-green-custom">Web Development</Link>
                  <Link  href="https://www.aidataschool.com/" target="_blank" className="block py-1 text-dark-green-custom">Artificial Intellingence</Link>
                  <Link  href="https://www.aidataschool.com/" target="_blank" className="block py-1 text-dark-green-custom">Data Analysis</Link>
                </div>
              </details>
            </div>
          </details>

          <Link href="/contact" className="block bg-light-green-custom text-white text-center py-2 rounded-md">Let’s Talk</Link>
        </nav>
      )}
    </header>
  );
}
