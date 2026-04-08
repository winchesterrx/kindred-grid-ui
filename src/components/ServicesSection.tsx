import {
  Stethoscope, Baby, HeartPulse, Microscope, Scan, Ambulance, Activity, Atom,
  Building2, ArrowRight, BedSingle, Bandage, Users, Scissors
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Ambulance, title: "Urgência e Emergência", desc: "Pronto-Socorro 24 horas com equipe médica de plantão, sala de estabilização e atendimento imediato.", highlight: true },
  { icon: Microscope, title: "Laboratório Clínico", desc: "Análises clínicas completas com equipamentos modernos e resultados ágeis para diagnósticos precisos." },
  { icon: Scan, title: "Diagnóstico por Imagem", desc: "Raio-X digital, ultrassonografia e exames de imagem de alta resolução." },
  { icon: Activity, title: "Métodos Gráficos Dinâmicos", desc: "Eletrocardiograma (ECG), monitoramento cardíaco e exames gráficos especializados." },
  { icon: Atom, title: "Medicina Nuclear", desc: "Cintilografia, PET-CT e exames nucleares para diagnósticos avançados." },
  { icon: Baby, title: "Pré-natal, Parto e Nascimento", desc: "Acompanhamento gestacional, parto humanizado e alojamento conjunto para mãe e bebê." },
  { icon: HeartPulse, title: "Transplante", desc: "Serviço credenciado de captação e transplante de órgãos e tecidos." },
  { icon: Stethoscope, title: "Clínica Médica", desc: "Consultas ambulatoriais, internação clínica e acompanhamento multidisciplinar." },
];

const infra = [
  { name: "Atendimento Indiferenciado", qty: 1, icon: Users },
  { name: "Sala de Curativos", qty: 1, icon: Bandage },
  { name: "Clínicas Especializadas", qty: 1, icon: Building2 },
  { name: "Consultórios (Outros)", qty: 1, icon: Stethoscope },
  { name: "Repouso e Observação", qty: 2, icon: BedSingle },
  { name: "Centros Cirúrgicos", qty: 2, icon: Scissors },
  { name: "Recuperação Pós-Anestésica", qty: 1, icon: Activity },
  { name: "Centro de Parto", qty: 1, icon: Baby },
  { name: "Estabilização / Risco", qty: 1, icon: HeartPulse },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Fachada Santa Casa */}
      <div className="absolute inset-0">
        <img 
          src="/fundo.png" 
          alt="Fachada do Hospital" 
          className="w-full h-full object-cover fixed-attachment"
        />
        {/* Glassmorphism Mask (Dark Emerald) */}
        <div className="absolute inset-0 bg-[#022c22]/80 backdrop-blur-[6px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6ee7b7] mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Especialidades e Atendimento
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Hospital Geral filantrópico com <strong className="text-white">8 especialidades médicas</strong>, atendendo a comunidade de Paulo de Faria e 
            municípios da região noroeste paulista pelo SUS.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`group rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                svc.highlight
                  ? "bg-navy text-primary-foreground border-transparent"
                  : "bg-card border-border/60"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                svc.highlight
                  ? "bg-white/15"
                  : "bg-emerald/10 group-hover:bg-emerald group-hover:text-primary-foreground"
              }`}>
                <svc.icon className={`w-6 h-6 transition-colors ${
                  svc.highlight ? "text-secondary" : "text-emerald group-hover:text-primary-foreground"
                }`} />
              </div>
              <h3 className={`text-base font-bold mb-1.5 ${svc.highlight ? "text-primary-foreground" : "text-navy"}`}>{svc.title}</h3>
              <p className={`text-sm leading-relaxed ${svc.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Infrastructure */}
        <div className="mt-28 py-16 px-6 md:px-12 bg-black/20 rounded-[2.5rem] border border-white/10 backdrop-blur-sm shadow-xl">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-4 mb-14 text-center">
              <span className="px-4 py-1.5 bg-white/10 shadow-sm border border-white/20 text-[#6ee7b7] font-extrabold uppercase tracking-widest text-[10px] rounded-full backdrop-blur-md">
                Infraestrutura do Hospital
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Instalações e Capacidade
              </h3>
              <p className="text-white/80 text-sm md:text-base max-w-2xl">
                Ambientes físicos preparados para oferecer acolhimento, tecnologia e segurança nos atendimentos à população.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {infra.map((item, i) => (
                <div 
                  key={i} 
                  className="bg-card w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.8rem)] lg:w-[calc(20%-1rem)] border border-border hover:border-emerald/40 hover:shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-5 group-hover:bg-emerald group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-3 leading-snug">
                    {item.name}
                  </h4>
                  <div className="mt-auto text-[11px] uppercase font-bold tracking-widest text-emerald bg-emerald/5 px-3 py-1.5 rounded-md w-full border border-emerald/10">
                    {item.qty} {item.qty === 1 ? 'Unidade' : 'Unidades'}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-white/20">
              <p className="text-xs text-white/50 font-medium mb-4 sm:mb-0">
                * Relatório base atualizado do Governo · CNES: 3536602080869
              </p>
              <Button variant="outline" size="sm" className="text-xs text-white hover:text-navy hover:bg-white border-white/30 gap-2 rounded-full font-bold bg-transparent">
                 Ver Ficha Completa <ArrowRight className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
