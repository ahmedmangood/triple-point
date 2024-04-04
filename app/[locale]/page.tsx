import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import ServicesSection from "@/components/servicesSection";

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <ServicesSection />
      <AboutSection />
      <OverviewSection />
      <Banner />
    </main>
  );
}
