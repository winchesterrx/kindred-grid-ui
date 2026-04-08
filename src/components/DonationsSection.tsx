import { Heart, Landmark, Copy, Check, Info, Share2, MessageCircle, MoreVertical, Bookmark } from "lucide-react";
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
    desc: "Agradecemos profundamente à comunidade pela doação de 50 kits cirúrgicos para o Pronto-Socorro. Quando nos unimos em prol do próximo, a mágica acontece. Continuem nos ajudando, seu amor salva vidas! 🙏💙",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80",
    date: "Há 2 dias",
    likes: 342,
  },
  {
    id: 2,
    title: "Cadeiras de Rodas Novas",
    desc: "Nossa eterna gratidão ao grupo de empresários voluntários que doaram 3 cadeiras de rodas novinhas para a ortopedia. Mais mobilidade e conforto para todos os nossos pacientes! 🦽✨",
    image: "https://images.unsplash.com/photo-1538356111053-748a48e1acb8?w=800&q=80",
    date: "Há 5 dias",
    likes: 512,
  },
  {
    id: 3,
    title: "Arrecadação de Alimentos",
    desc: "Mais de 1 tonelada de alimentos não perecíveis arrecadados graças a vocês. Tudo está sendo convertido em refeições super nutritivas para os internados do SUS. Muito obrigado Paulo de Faria! 🍲💚",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    date: "Semana passada",
    likes: 890,
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
    <section id="doacoes" className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 to-emerald-50/30">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-emerald/10 border border-emerald/20 text-emerald font-extrabold uppercase tracking-widest text-[11px] rounded-full mb-6 shadow-sm">
            <Heart className="w-4 h-4" fill="currentColor" /> Rede de Solidariedade
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-5 tracking-tight">
            Transparência das Doações
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            Acompanhe o impacto das doações que recebemos e descubra como o seu apoio financeiro ajuda a Santa Casa a transformar o atendimento da nossa comunidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-stretch">
          
          {/* Col 1 - Carousel of "Instagram-like" posts */}
          <div className="w-full lg:w-3/5">
            <div className="flex items-center justify-between mb-8 px-2">
              <h3 className="text-2xl font-extrabold text-navy tracking-tight">
                Publicações Recentes
              </h3>
            </div>

            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-6">
                {recentDonations.map((post) => (
                  <CarouselItem key={post.id} className="pl-6 md:basis-1/2">
                    
                    {/* Social Media Post Interface */}
                    <div className="bg-white border border-border/80 shadow-lg shadow-navy/5 rounded-[24px] overflow-hidden flex flex-col h-full transform transition duration-500 hover:shadow-xl hover:border-emerald/30 group">
                      
                      {/* Post Header */}
                      <div className="flex items-center justify-between p-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full border border-border/50 shadow-sm p-0.5 bg-white shrink-0">
                            <img src="/logo.png" alt="Santa Casa Logo" className="w-full h-full object-contain rounded-full" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold text-navy leading-tight hover:underline cursor-pointer">santacasapf</span>
                            <span className="text-[11px] font-medium text-muted-foreground">{post.date}</span>
                          </div>
                        </div>
                        <button className="text-muted-foreground hover:text-navy transition-colors shrink-0 p-1">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                      
                      {/* Post Image */}
                      <div className="w-full aspect-[4/3] bg-muted relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Post Actions */}
                      <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button className="text-navy hover:text-rose-500 transition-colors focus:outline-none">
                            <Heart className="w-6 h-6 hover:fill-rose-500 transition-all hover:scale-110" />
                          </button>
                          <button className="text-navy hover:text-emerald transition-colors focus:outline-none">
                            <MessageCircle className="w-6 h-6 hover:scale-110 transition-transform" />
                          </button>
                          <button className="text-navy hover:text-emerald transition-colors focus:outline-none">
                            <Share2 className="w-6 h-6 hover:scale-110 transition-transform" />
                          </button>
                        </div>
                        <button className="text-navy hover:text-emerald transition-colors focus:outline-none">
                          <Bookmark className="w-6 h-6 hover:scale-110 transition-transform" />
                        </button>
                      </div>

                      {/* Post Content */}
                      <div className="px-5 pb-6 pt-1 flex-1">
                        <p className="text-[13px] font-extrabold text-navy mb-1.5">{post.likes.toLocaleString()} curtidas</p>
                        <p className="text-[13px] text-navy/90 leading-relaxed">
                          <span className="font-extrabold text-navy mr-2 cursor-pointer hover:underline">santacasapf</span>
                          {post.desc}
                        </p>
                      </div>
                    </div>

                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:flex justify-end gap-3 mt-8 pr-2">
                <CarouselPrevious className="relative right-0 translate-y-0 h-12 w-12 border-border bg-white text-navy hover:bg-emerald hover:text-white hover:border-emerald shadow-sm transition-all" />
                <CarouselNext className="relative right-0 translate-y-0 h-12 w-12 border-border bg-white text-navy hover:bg-emerald hover:text-white hover:border-emerald shadow-sm transition-all" />
              </div>
            </Carousel>
          </div>

          {/* Col 2 - Immersive Donation Data */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="bg-gradient-to-br from-navy via-navy to-[#0A1F35] rounded-[32px] p-8 sm:p-10 text-white shadow-2xl shadow-navy/20 relative overflow-hidden group flex-1">
              
              {/* Premium Background Effects */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald/30 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald/40 transition-all duration-1000" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald/20 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-3xl sm:text-4xl font-black mb-4 flex items-center gap-3 relative z-10 tracking-tight">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-emerald fill-emerald animate-pulse drop-shadow-lg" />
                Faça sua Doação
              </h3>
              <p className="text-white/80 text-sm sm:text-base mb-10 leading-relaxed relative z-10 font-medium max-w-sm">
                Qualquer quantia faz toda a diferença para os nossos pacientes. Envie diretamente para nossa conta oficial:
              </p>

              <div className="space-y-6 relative z-10">
                {/* PIX CARD - Glassmorphism */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-default">
                  <div className="absolute top-0 right-0 p-4">
                    <span className="px-2.5 py-1 bg-emerald text-white text-[10px] font-extrabold uppercase rounded border border-emerald-400 tracking-wider shadow-lg">Institucional</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-300 font-bold mb-4">
                    <div className="w-7 h-7 flex items-center justify-center bg-emerald text-white shadow-lg shadow-emerald/30 rounded font-black italic text-[11px] tracking-tighter">
                      pix
                    </div>
                    <span className="text-sm tracking-wide">CHAVE PIX (CNPJ)</span>
                  </div>
                  <div className="text-[11px] text-white/70 mb-4 uppercase tracking-widest font-bold">
                    Favorecido: Irmandade Santa Casa de Misericordia
                  </div>
                  
                  <div className="flex items-center bg-black/40 border border-white/10 rounded-xl p-1.5 backdrop-blur-sm group/copy">
                    <div className="flex-1 px-4 font-mono font-bold text-lg sm:text-xl text-white tracking-widest">
                      53.782.355/0001-46
                    </div>
                    <Button 
                      variant="ghost"
                      className={`h-10 w-12 sm:w-16 rounded-lg transition-all border ${copiedPix ? "bg-emerald text-white border-emerald shadow-lg shadow-emerald/20" : "bg-white/5 border-white/10 text-emerald-400 hover:bg-emerald/20 hover:text-white"}`}
                      onClick={handleCopyPix}
                      aria-label="Copiar PIX"
                    >
                      {copiedPix ? <Check className="w-6 h-6" /> : <Copy className="w-5 h-5 group-hover/copy:scale-110 transition-transform" />}
                    </Button>
                  </div>
                </div>

                {/* Bank Transfer */}
                <div className="bg-black/20 border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-black/30">
                  <div className="flex items-center gap-3 font-bold text-white mb-6">
                    <div className="p-1.5 bg-emerald-400/20 rounded-md">
                      <Landmark className="w-5 h-5 text-emerald-400" />
                    </div>
                    Transferência Bancária
                  </div>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-sm font-medium">
                    <div>
                      <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-widest mb-1 font-bold">Banco</div>
                      <div className="text-white font-bold text-base">Banco do Brasil</div>
                    </div>
                    <div>
                      <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-widest mb-1 font-bold">Agência</div>
                      <div className="text-white font-mono text-base font-bold tracking-widest">0507-X</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-white/40 text-[10px] sm:text-[11px] uppercase tracking-widest mb-1.5 font-bold">Conta Corrente</div>
                      <div className="text-emerald-400 font-mono text-xl md:text-2xl font-bold tracking-widest inline-flex items-center bg-black/40 px-4 py-2 rounded-xl border border-white/5 shadow-inner">
                        16580-8
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notice Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-4">
                <div className="p-2 bg-amber-500/10 rounded-full shrink-0">
                  <Info className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-medium">
                  Para doações de materiais, equipamentos ou dúvidas diversas, entre em contato diretamente com a nossa administração pelo telefone <strong className="text-white/90 whitespace-nowrap">(17) 3292-1373</strong>.
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
