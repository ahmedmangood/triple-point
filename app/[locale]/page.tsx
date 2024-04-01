import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/servicesSection";

export default function Home() {
  return (
    <main className="text-center">
      <Hero />
      <ServicesSection />
      <AboutSection />
    </main>
  );
}
