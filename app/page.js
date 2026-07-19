import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Resources from "@/components/Resources";
import ServicesGrid from "@/components/ServicesGrid";
import StatsBar from "@/components/StatsBar";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <HowItWorks />
      <AboutUs />
      <Resources />
      <Contact />
    </>
  );
}
