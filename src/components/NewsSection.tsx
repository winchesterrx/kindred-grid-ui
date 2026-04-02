import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    image: news1,
    title: "Mutirão de Saúde atende mais de 500 pessoas no bairro Centro",
    date: "28 Mar 2026",
  },
  {
    image: news2,
    title: "Nova ala cirúrgica amplia capacidade em 40%",
    date: "15 Mar 2026",
  },
  {
    image: news3,
    title: "Campanha de doação arrecada R$ 200 mil para pediatria",
    date: "02 Mar 2026",
  },
  {
    image: news1,
    title: "Santa Casa recebe certificação de excelência em gestão",
    date: "20 Fev 2026",
  },
];

const NewsSection = () => {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, newsItems.length - 3);

  const next = () => setOffset((p) => Math.min(p + 1, maxOffset));
  const prev = () => setOffset((p) => Math.max(p - 1, 0));

  return (
    <section className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald mb-3">
            Fique por Dentro
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Últimas Notícias
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${offset * (100 / 3 + 2)}%)` }}
          >
            {newsItems.map((item, i) => (
              <article
                key={i}
                className="min-w-[calc(33.333%-1rem)] flex-shrink-0 group cursor-pointer max-md:min-w-[80%]"
              >
                <div className="overflow-hidden rounded-2xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <time className="text-xs text-muted-foreground font-medium">{item.date}</time>
                <h3 className="text-base font-bold text-navy mt-1 group-hover:text-emerald transition-colors leading-snug">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={prev}
            disabled={offset === 0}
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground hover:bg-navy-light transition-colors disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={offset === maxOffset}
            className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-primary-foreground hover:bg-navy-light transition-colors disabled:opacity-30"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
