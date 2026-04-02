import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Baby,
  HeartPulse,
  Microscope,
  Pill,
  Ambulance,
  ClipboardList,
  MessageCircle,
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Clínica Médica", desc: "Atendimento ambulatorial completo com especialistas." },
  { icon: Baby, title: "Maternidade", desc: "Parto humanizado e UTI neonatal." },
  { icon: HeartPulse, title: "Cardiologia", desc: "Exames, consultas e procedimentos cardíacos." },
  { icon: Microscope, title: "Laboratório", desc: "Análises clínicas com resultados rápidos." },
  { icon: Pill, title: "Farmácia Popular", desc: "Medicamentos gratuitos e a preços acessíveis." },
  { icon: Ambulance, title: "Pronto-Socorro", desc: "Emergência 24h com equipe especializada." },
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
            Cuidado Completo para Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos e assistenciais com foco na humanização e excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card rounded-2xl border border-border/60 p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald/10 flex items-center justify-center mb-5 group-hover:bg-emerald group-hover:text-primary-foreground transition-colors">
                <svc.icon className="w-7 h-7 text-emerald group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
