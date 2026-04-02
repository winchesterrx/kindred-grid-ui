import SiteHeader from "@/components/SiteHeader";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroCarousel />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
