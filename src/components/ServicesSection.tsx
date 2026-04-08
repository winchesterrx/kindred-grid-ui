import {
  Stethoscope, Baby, HeartPulse, Microscope, Scan, Ambulance, Activity, Atom,
  Building2, ArrowRight,
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
  { name: "Sala de Atendimento Indiferenciado", qty: 1 },
  { name: "Sala de Curativo", qty: 1 },
  { name: "Clínicas Indiferenciado", qty: 1 },
  { name: "Consultórios Não Médicos", qty: 1 },
  { name: "Sala de Repouso / Observação — Indiferenciado", qty: 2 },
  { name: "Sala de Cirurgia", qty: 2 },
  { name: "Sala de Recuperação Pós-Anestésica", qty: 1 },
  { name: "Sala de Parto Normal", qty: 1 },
  { name: "Sala de Estabilização / Paciente Crítico", qty: 1 },
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-navy" />
            <h3 className="text-xl font-bold text-navy">Estrutura Física — CNES</h3>
          </div>
          <div className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-sm">
            <div className="grid grid-cols-[1fr_auto] text-sm">
              <div className="px-6 py-3.5 font-bold text-navy bg-muted/60 border-b border-border text-xs uppercase tracking-wider">Ambiente</div>
              <div className="px-6 py-3.5 font-bold text-navy bg-muted/60 border-b border-border text-center text-xs uppercase tracking-wider">Qtd.</div>
              {infra.map((item, i) => (
                <div key={i} className="contents">
                  <div className={`px-6 py-3 text-muted-foreground ${i < infra.length - 1 ? "border-b border-border/40" : ""}`}>
                    {item.name}
                  </div>
                  <div className={`px-6 py-3 text-center font-bold text-navy ${i < infra.length - 1 ? "border-b border-border/40" : ""}`}>
                    {item.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-muted-foreground">
              * A estrutura não interfere na disponibilização do atendimento · CNES: 3536602080869
            </p>
            <Button variant="ghost" size="sm" className="text-xs text-emerald hover:text-navy gap-1">
              Ficha completa no CNES <ArrowRight className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
