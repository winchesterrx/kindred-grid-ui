import { Heart, Landmark, Copy, Check, Share2, MessageCircle, MoreVertical, Bookmark, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { listarDoacoes, DoacaoTransparencia } from "@/services/mockApi";

const DonationsSection = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const [donations, setDonations] = useState<DoacaoTransparencia[]>([]);

  useEffect(() => {
    listarDoacoes().then(setDonations).catch(console.error);
  }, []);

  const handleCopyPix = () => {
    navigator.clipboard.writeText("53782355000146");
    setCopiedPix(true);
    toast.success("Chave PIX copiada com sucesso!");
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <section id="doacoes" className="py-24 bg-slate-50/80">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-emerald/10 text-emerald font-extrabold uppercase tracking-widest text-[11px] rounded-full mb-5">
            <Heart className="w-3.5 h-3.5" fill="currentColor" /> Solidariedade
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-5 tracking-tight">
            Transparência nas Doações
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Acompanhe o impacto da ajuda de pessoas como você e veja como realizar sua contribuição para a Santa Casa.
          </p>
        </div>

        {/* 1. Posts Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {donations.length > 0 ? donations.map((post) => (
            <div key={post.id} className="bg-white border border-slate-200 shadow-sm rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-emerald/30 group">
              {/* Header do Post */}
              <div className="flex items-center justify-between p-4 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-slate-200 shadow-sm p-0.5 bg-white shrink-0">
                    <img src="/logo.png" alt="Santa Casa Logo" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-navy leading-tight hover:underline cursor-pointer">santacasapf</span>
                    <span className="text-[11px] font-medium text-slate-500">{post.data_publicacao}</span>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-navy transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              {/* Imagem do Post */}
              <div className="w-full aspect-square bg-slate-100 overflow-hidden relative">
                <img 
                  src={post.imagem_url} 
                  alt="Doação" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Ações e Descrição */}
              <div className="p-4 flex-1 flex flex-col bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <button className="text-navy hover:text-rose-500 transition-colors">
                      <Heart className="w-[22px] h-[22px]" />
                    </button>
                    <button className="text-navy hover:text-emerald transition-colors">
                      <MessageCircle className="w-[22px] h-[22px]" />
                    </button>
                    <button className="text-navy hover:text-emerald transition-colors">
                      <Share2 className="w-[22px] h-[22px]" />
                    </button>
                  </div>
                  <button className="text-navy hover:text-emerald transition-colors">
                    <Bookmark className="w-[22px] h-[22px]" />
                  </button>
                </div>
                
                <p className="text-[13px] font-bold text-navy mb-2">{post.curtidas || 0} curtidas</p>
                <p className="text-[13px] text-navy/80 leading-relaxed font-medium">
                  <span className="font-extrabold text-navy mr-2 hover:underline cursor-pointer">santacasapf</span>
                  {post.descricao}
                </p>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center text-slate-500 py-10 font-medium">
              O feed de doações está vazio no momento. As novas doações cadastradas pelo painel administrativo aparecerão aqui.
            </div>
          )}
        </div>

        {/* 2. Donation Action Section */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-12 lg:p-14">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              Faça sua Doação
            </h3>
            <p className="text-slate-500 font-medium max-w-lg mx-auto">
              Qualquer quantia em dinheiro faz muita diferença! Use os dados oficiais abaixo de nossa conta no Banco do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Depósito Bancário */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-navy font-black mb-6">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-200">
                  <Landmark className="w-5 h-5 text-emerald" />
                </div>
                Depósito ou TEF
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-[11px]">Banco</span>
                  <span className="font-bold text-navy">Banco do Brasil</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest text-[11px]">Agência</span>
                  <span className="font-bold text-navy font-mono tracking-widest">0507-X</span>
                </div>
                <div className="flex justify-between items-center bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-3 mt-4">
                  <span className="text-sm font-bold text-slate-500">Conta</span>
                  <span className="font-black text-emerald text-xl font-mono tracking-wider">16580-8</span>
                </div>
              </div>
            </div>

            {/* PIX */}
            <div className="bg-emerald/5 border border-emerald/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 rounded-bl-full -z-10 blur-xl" />
              
              <div className="flex items-center gap-3 text-emerald-600 font-black mb-6">
                <div className="px-2.5 py-1 bg-emerald text-white rounded text-[11px] font-black italic shadow-md shadow-emerald/20 tracking-tighter">
                  pix
                </div>
                Chave (CNPJ)
              </div>
              
              <div className="mb-6">
                <span className="block text-[10px] font-bold text-emerald-600/70 uppercase tracking-widest mb-1.5">
                  Favorecido
                </span>
                <span className="font-bold text-navy text-sm">
                  Irmandade Santa Casa de Misericordia
                </span>
              </div>

              <div className="flex items-center mt-auto bg-white border border-emerald/20 shadow-sm rounded-2xl p-1.5 pl-4 gap-2">
                <div className="flex-1 font-mono font-black text-lg text-emerald tracking-wide">
                  53.782.355/0001-46
                </div>
                <Button 
                  onClick={handleCopyPix}
                  className={`h-12 w-12 shrink-0 rounded-xl transition-all shadow-md ${copiedPix ? "bg-emerald text-white" : "bg-emerald text-white hover:bg-emerald/90 hover:scale-105"}`}
                  aria-label="Copiar PIX"
                >
                  {copiedPix ? <Check className="w-5 h-5" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100 flex items-start gap-4 justify-center text-center">
            <p className="text-xs text-slate-500 font-medium">
              Dúvidas comerciais ou doações físicas? Ligue (17) 3292-1373.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DonationsSection;
