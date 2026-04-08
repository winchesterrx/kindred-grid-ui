import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import testimonialBg from "@/assets/testimonial-bg.jpg";

const testimonials = [
  {
    text: "Fui atendida com tanto carinho e profissionalismo que me senti acolhida como família. A equipe da Santa Casa salvou minha vida.",
    author: "Maria Aparecida S.",
    role: "Paciente — Cardiologia",
    stars: 5,
  },
  {
    text: "Meu filho nasceu na maternidade da Santa Casa. Desde o pré-natal até o parto, tivemos um acompanhamento excepcional e humanizado.",
    author: "Carlos Eduardo R.",
    role: "Pai de paciente — Maternidade",
    stars: 5,
  },
  {
    text: "Trabalhar aqui é uma vocação. A Santa Casa me permite exercer a medicina com propósito e impactar vidas todos os dias em Paulo de Faria.",
    author: "Dra. Ana Beatriz L.",
    role: "Médica — Pronto-Socorro",
    stars: 5,
  },
  {
    text: "A transparência e o compromisso com a comunidade fazem da Santa Casa uma referência em gestão hospitalar filantrópica.",
    author: "José Roberto M.",
    role: "Provedor da Irmandade",
    stars: 5,
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
    <section className="relative h-[520px] md:h-[560px] overflow-hidden">
      <img
        src={testimonialBg}
        alt="Equipe médica da Santa Casa de Paulo de Faria"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-emerald-950/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-950/95" />

      <div className="relative h-full flex items-center z-10">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <Quote className="w-10 h-10 text-emerald-400 mx-auto mb-4 opacity-80" />
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-100/70 mb-6 bg-emerald-500/10 px-3 py-1 rounded-full">
            Depoimentos e Impacto Social
          </span>

          <div className="relative min-h-[200px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="flex justify-center gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-secondary fill-secondary" />
                  ))}
                </div>
                <blockquote className="text-lg md:text-2xl text-primary-foreground font-medium leading-relaxed italic mb-6">
                  "{t.text}"
                </blockquote>
                <div className="text-primary-foreground font-bold text-lg">{t.author}</div>
                <div className="text-primary-foreground/60 text-sm mt-1">{t.role}</div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-8" : "bg-white/30 hover:bg-white/50 w-2"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-primary-foreground transition-colors backdrop-blur-sm"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-primary-foreground transition-colors backdrop-blur-sm"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
