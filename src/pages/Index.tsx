import SiteHeader from "@/components/SiteHeader";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import OuvidoriaSection from "@/components/OuvidoriaSection";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteFooter from "@/components/SiteFooter";
import EntryPopup from "@/components/EntryPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EntryPopup />
      <SiteHeader />
      <HeroCarousel />
      <ServicesSection />
      <OuvidoriaSection />
      <StatsSection />
      <NewsSection />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
