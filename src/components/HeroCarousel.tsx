import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import heroBanner3 from "@/assets/hero-banner-3.jpg";

const slides = [
  {
    image: heroBanner1,
    title: "Cuidar é a Nossa Missão",
    subtitle: "Há mais de 100 anos levando saúde, acolhimento e esperança à comunidade.",
    cta: "Conheça Nossa História",
  },
  {
    image: heroBanner2,
    title: "Excelência em Saúde Pública",
    subtitle: "Infraestrutura moderna e equipe especializada a serviço de todos.",
    cta: "Nossos Serviços",
  },
  {
    image: heroBanner3,
    title: "Humanização no Atendimento",
    subtitle: "Cada paciente é tratado com dignidade, respeito e carinho.",
    cta: "Faça Parte",
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
    <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden section-navy">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-primary-foreground drop-shadow-md">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-primary-foreground"
        aria-label="Próximo"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-secondary w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
