import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Stethoscope, Shield } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const slides = [
  {
    image: heroBanner1,
    badge: "Desde 1940 · Paulo de Faria - SP",
    title: "Cuidar é a Nossa Missão",
    subtitle: "A Irmandade da Santa Casa de Misericórdia de Paulo de Faria oferece saúde, acolhimento e esperança para toda a comunidade e região.",
    cta: "Conheça Nossa História",
    ctaIcon: Heart,
  },
  {
    image: heroBanner2,
    badge: "Hospital Geral · CNES 3536602080869",
    title: "8 Especialidades Médicas",
    subtitle: "Urgência 24h, laboratório clínico, diagnóstico por imagem, medicina nuclear, maternidade, transplantes e muito mais.",
    cta: "Nossos Serviços",
    ctaIcon: Stethoscope,
  },
  {
    image: heroBanner3,
    badge: "Filantropia e Compromisso Social",
    title: "Humanização e Transparência",
    subtitle: "Cada paciente é tratado com dignidade e respeito. Nossa gestão é transparente e aberta à comunidade.",
    cta: "Transparência",
    ctaIcon: Shield,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-[520px] md:h-[650px] overflow-hidden bg-emerald-950">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-100 mb-4 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/20">
                {slide.badge}
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-base md:text-xl text-primary-foreground/85 mb-8 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex gap-4 flex-wrap">
                <Button variant="hero" size="lg" className="rounded-full px-8">
                  <Heart className="w-4 h-4 mr-1" />
                  Doe Agora
                </Button>
                <Button variant="outline-white" size="lg" className="rounded-full px-8">
                  <slide.ctaIcon className="w-4 h-4 mr-1" />
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-primary-foreground backdrop-blur-sm"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 transition-colors text-primary-foreground backdrop-blur-sm"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-secondary w-10" : "bg-white/40 hover:bg-white/60 w-2.5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
