import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import SuccessStories from "@/components/SuccessStories";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <Statistics />
      <SuccessStories />
      <Technologies />
      <Blog />
      <Contact />
    </main>
  );
}
