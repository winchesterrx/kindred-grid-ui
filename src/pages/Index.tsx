import SiteHeader from "@/components/SiteHeader";
import HeroCarousel from "@/components/HeroCarousel";
import VisitingHoursSection from "@/components/VisitingHoursSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import OuvidoriaSection from "@/components/OuvidoriaSection";
import NewsSection from "@/components/NewsSection";
import DonationsSection from "@/components/DonationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteFooter from "@/components/SiteFooter";
import EntryPopup from "@/components/EntryPopup";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CookieBanner />
      <EntryPopup />
      <SiteHeader />
      <HeroCarousel />
      <VisitingHoursSection />
      <ServicesSection />
      <OuvidoriaSection />
      <StatsSection />
      <NewsSection />
      <DonationsSection />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
