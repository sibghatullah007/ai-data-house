import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import SuccessStories from "@/components/SuccessStories";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import QuoteSection from "@/components/Quote";


export default function Home() {
  return (
    <main className="pt-[70px]">
      <HeroSection />
      <QuoteSection />
      <Services />
      <Statistics />
      <SuccessStories />
      <Technologies />
      <Blog />
      <Contact />
    </main>
  );
}
