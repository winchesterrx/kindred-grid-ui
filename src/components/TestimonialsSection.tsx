import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const testimonials = [
  {
    text: "Fui atendida com tanto carinho e profissionalismo que me senti acolhida como família. A equipe da Santa Casa salvou minha vida.",
    author: "Maria Aparecida",
    role: "Paciente - Cardiologia",
  },
  {
    text: "Meu filho nasceu na maternidade da Santa Casa. Desde o pré-natal até o parto, tivemos um acompanhamento excepcional.",
    author: "Carlos Eduardo",
    role: "Pai de paciente",
  },
  {
    text: "Trabalhar aqui é uma vocação. A Santa Casa me permite exercer a medicina com propósito e impactar vidas todos os dias.",
    author: "Dra. Ana Beatriz",
    role: "Médica - UTI",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[480px] md:h-[520px] overflow-hidden">
      <img
        src={testimonialBg}
        alt="Equipe médica"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Quote className="w-10 h-10 text-secondary mx-auto mb-6 opacity-80" />

          <div className="relative min-h-[160px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <blockquote className="text-lg md:text-2xl text-primary-foreground font-medium leading-relaxed italic mb-6">
                  "{t.text}"
                </blockquote>
                <div className="text-primary-foreground font-bold">{t.author}</div>
                <div className="text-primary-foreground/60 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-primary-foreground transition-colors"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-primary-foreground transition-colors"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
