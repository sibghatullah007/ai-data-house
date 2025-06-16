'use client'
import { useState } from "react";
import Link from 'next/link';
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  return (
    <section className="bg-background1-custom min-h-screen flex items-center justify-center px-4"
      onMouseMove={handleMouseMove}>
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url('/2.jpg')`, // ⬅️ Replace with your image
          backgroundSize: "cover",
          opacity: "0.2",
          backgroundPosition: "center",
          maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      />
      <div className="text-center max-w-3xl z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-light-green-custom !leading-[4rem]">
          Lead Your <span className="bg-light-green-custom text-white p-2">Industry</span> <br />
          with AI-Driven Growth
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 mt-4 text-lg">
          Revolutionize your business with AI Data Analysis, seamless automation, and
          intelligent chatbots. Let us help you achieve your goals effortlessly.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="case-studies">
            <MagneticButton className="border-2 border-light-green-custom text-light-green-custom px-6 py-2 rounded-full font-semibold hover:bg-light-green-custom hover:text-white transition">
              Our work
            </MagneticButton>
          </Link>
          <Link href="/contact">
            <MagneticButton className="bg-light-green-custom text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition">
              Let's Talk
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

