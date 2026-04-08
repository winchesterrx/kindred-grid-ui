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
    <section id="servicos" className="section-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald mb-3">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Especialidades e Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hospital Geral filantrópico com <strong className="text-navy">8 especialidades médicas</strong>, atendendo a comunidade de Paulo de Faria e 
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
        <div className="max-w-5xl mx-auto mt-24">
          <div className="flex flex-col items-center justify-center gap-3 mb-10 text-center">
            <span className="px-3 py-1 bg-navy/5 text-navy font-bold uppercase tracking-widest text-[10px] rounded-full">
              Infraestrutura CNES
            </span>
            <h3 className="text-2xl font-extrabold text-navy">
              Capacidade de Atendimento
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {infra.map((item, i) => (
              <div 
                key={i} 
                className="bg-card border border-border hover:border-emerald/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald/10 text-emerald flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-navy mb-2 leading-tight">
                  {item.name}
                </h4>
                <div className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-md w-full">
                  {item.qty} {item.qty === 1 ? 'Unidade' : 'Unidades'}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-border/60">
            <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
              * Estrutura sujeita a adequações · CNES: 3536602080869
            </p>
            <Button variant="outline" size="sm" className="text-xs text-navy hover:text-emerald border-border/60 gap-2 rounded-full">
               Ver Ficha Completa <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
