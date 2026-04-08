import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    image: news1,
    title: "Mutirão de Saúde atende mais de 500 moradores no Centro",
    date: "28 Mar 2026",
    category: "Comunidade",
    excerpt: "Ação social ofereceu consultas, exames laboratoriais e vacinação gratuita para a população de Paulo de Faria.",
  },
  {
    image: news2,
    title: "Nova ala cirúrgica amplia capacidade em 40%",
    date: "15 Mar 2026",
    category: "Infraestrutura",
    excerpt: "Investimento de R$ 1,5 milhão moderniza o centro cirúrgico com duas salas totalmente equipadas.",
  },
  {
    image: news3,
    title: "Campanha de doação arrecada R$ 200 mil para pediatria",
    date: "02 Mar 2026",
    category: "Filantropia",
    excerpt: "Comunidade se mobiliza e recursos serão aplicados na melhoria do atendimento infantil.",
  },
  {
    image: news1,
    title: "Santa Casa recebe certificação de excelência em gestão",
    date: "20 Fev 2026",
    category: "Institucional",
    excerpt: "Reconhecimento do Ministério da Saúde pela qualidade dos serviços prestados à população.",
  },
];

const NewsSection = () => {
  const [offset, setOffset] = useState(0);
  const maxOffset = Math.max(0, newsItems.length - 3);

  const next = () => setOffset((p) => Math.min(p + 1, maxOffset));
  const prev = () => setOffset((p) => Math.max(p - 1, 0));

  return (
    <section id="noticias" className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald mb-3">
            Fique por Dentro
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Últimas Notícias e Eventos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Acompanhe as novidades, campanhas e eventos da Santa Casa de Paulo de Faria.
          </p>
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
                <div className="overflow-hidden rounded-2xl mb-4 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider bg-secondary text-primary-foreground px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1.5">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </div>
                <h3 className="text-base font-bold text-navy group-hover:text-emerald transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          <button
            onClick={prev}
            disabled={offset === 0}
            className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white hover:bg-emerald/90 transition-colors disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={offset === maxOffset}
            className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white hover:bg-emerald/90 transition-colors disabled:opacity-30"
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
