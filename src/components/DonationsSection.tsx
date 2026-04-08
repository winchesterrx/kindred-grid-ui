import { Heart, Landmark, Copy, Check, Info } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { toast } from "sonner";

const recentDonations = [
  {
    id: 1,
    title: "Entrega de Material Cirúrgico",
    desc: "Agradecemos profundamente à comunidade pela doação de 50 kits cirúrgicos para o Pronto-Socorro. Seu amor salva vidas!",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&q=80",
    date: "Há 2 dias",
  },
  {
    id: 2,
    title: "Cadeiras de Rodas Novas",
    desc: "Nossa eterna gratidão ao grupo de empresários voluntários que doaram 3 cadeiras de rodas novinhas para a ortopedia.",
    image: "https://images.unsplash.com/photo-1538356111053-748a48e1acb8?w=500&q=80",
    date: "Há 5 dias",
  },
  {
    id: 3,
    title: "Arrecadação de Alimentos",
    desc: "Mais de 1 tonelada de alimentos não perecíveis arrecadados graças a vocês, convertidos em refeições para os internados.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&q=80",
    date: "Semana passada",
  },
];

const DonationsSection = () => {
  const [copiedPix, setCopiedPix] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("53782355000146");
    setCopiedPix(true);
    toast.success("Chave PIX (CNPJ) copiada com sucesso!");
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <section id="doacoes" className="section-white py-20 md:py-28 bg-emerald/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-emerald/10 text-emerald font-bold uppercase tracking-widest text-[10px] rounded-full mb-4">
            <Heart className="w-3 h-3" fill="currentColor" /> Solidariedade
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Ajude a Salvar Vidas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sua contribuição financeira é fundamental para mantermos o hospital de portas abertas e continuarmos a oferecer atendimento de qualidade para quem mais precisa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
          {/* Col 1 - Carousel of donations */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
              Últimas Doações Recebidas 
              <span className="text-xs px-2 py-1 bg-emerald/10 text-emerald rounded-full font-semibold">
                Transparência
              </span>
            </h3>

            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-4">
                {recentDonations.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2">
                    <div className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col group hover:border-emerald/30 hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {post.date}
                        </div>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h4 className="font-bold text-navy text-lg mb-2 leading-tight group-hover:text-emerald transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                          {post.desc}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:flex justify-end gap-2 mt-6">
                <CarouselPrevious className="relative right-0 translate-y-0 h-10 w-10 border-border/60 hover:bg-emerald hover:text-white hover:border-emerald" />
                <CarouselNext className="relative right-0 translate-y-0 h-10 w-10 border-border/60 hover:bg-emerald hover:text-white hover:border-emerald" />
              </div>
            </Carousel>
          </div>

          {/* Col 2 - Donation Data */}
          <div className="w-full lg:w-5/12 border-t lg:border-t-0 lg:border-l border-border/60 pt-10 lg:pt-0 lg:pl-10 xl:pl-16">
            <div className="bg-white rounded-3xl p-8 border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/5 rounded-bl-full -z-10" />
              
              <h3 className="text-2xl font-extrabold text-navy mb-2 flex items-center gap-3">
                Faça sua Doação
              </h3>
              <p className="text-sm text-muted-foreground mb-8">
                Qualquer quantia em dinheiro faz muita diferença! Use os dados oficiais abaixo para transferência bancária ou PIX.
              </p>

              <div className="space-y-6">
                {/* Bank Transfer */}
                <div className="bg-muted/40 rounded-2xl p-5 border border-border/60">
                  <div className="flex items-center gap-2 mb-4 text-navy font-bold">
                    <Landmark className="w-5 h-5 text-emerald" />
                    Depósito em Conta
                  </div>
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between items-center sm:items-baseline border-b border-border/50 pb-2">
                      <span className="text-muted-foreground font-medium">Banco:</span>
                      <span className="font-bold text-navy">Banco do Brasil</span>
                    </div>
                    <div className="flex justify-between items-center sm:items-baseline border-b border-border/50 pb-2">
                      <span className="text-muted-foreground font-medium">Agência:</span>
                      <span className="font-bold text-navy">0507-X</span>
                    </div>
                    <div className="flex justify-between items-center sm:items-baseline">
                      <span className="text-muted-foreground font-medium">Conta Corrente:</span>
                      <span className="font-bold text-emerald">16580-8</span>
                    </div>
                  </div>
                </div>

                {/* PIX */}
                <div className="bg-emerald/[0.04] rounded-2xl p-5 border border-emerald/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-navy font-bold">
                      <div className="w-6 h-6 flex items-center justify-center bg-emerald/20 text-emerald rounded text-[10px] font-extrabold italic">
                        pix
                      </div>
                      Chave PIX (CNPJ)
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Favorecido: Irmandade Santa Casa de Misericordia
                  </p>
                  
                  <div className="flex items-center bg-white border border-border rounded-xl p-1 shadow-sm">
                    <div className="flex-1 px-4 font-bold text-lg text-emerald tracking-wide">
                      53.782.355/0001-46
                    </div>
                    <Button 
                      variant={copiedPix ? "default" : "secondary"}
                      className={`rounded-lg transition-all ${copiedPix ? "bg-emerald text-white hover:bg-emerald" : ""}`}
                      onClick={handleCopyPix}
                    >
                      {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      <span className="sr-only">Copiar PIX</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-amber-50 rounded-xl p-4 border border-amber-100">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed font-medium">
                  Para doações de materiais, equipamentos diversos ou dúvidas, 
                  entre em contato com a administração do hospital. (17) 3292-1373
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;
