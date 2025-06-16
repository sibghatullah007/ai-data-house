'use client'
import React from 'react';
import Link from 'next/link';
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import SuccessStories from "@/components/SuccessStories";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import QuoteSection from "@/components/Quote";
import VideoReviews from "@/components/VideoReviews";
import MagneticButton from "@/components/MagneticButton";


export default function Home() {
  return (
    <main className="pt-[70px]">
      <HeroSection />
      <QuoteSection />
      <Services />
      <Statistics />
      <SuccessStories />
      <Technologies />
      {/* <Blog /> */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link href="/contact">
          <MagneticButton className="bg-green-700 text-white hover:bg-green-800 px-8 py-3 rounded-full">
            Get Started
          </MagneticButton>
        </Link>
      </div>
      <VideoReviews/>
      <Contact />
    </main>
  );
}
