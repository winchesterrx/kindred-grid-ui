import { Button } from "@/components/ui/button";
import { Download, FileText, Users, HeartPulse, Stethoscope, BedDouble } from "lucide-react";

const stats = [
  { icon: Users, value: "3.000+", label: "Atendimentos / Mês" },
  { icon: HeartPulse, value: "1.200+", label: "Cirurgias / Ano" },
  { icon: Stethoscope, value: "8", label: "Especialidades" },
  { icon: BedDouble, value: "12", label: "Salas e Ambientes" },
];

const documents = [
  { title: "Balanço Patrimonial 2024", type: "PDF" },
  { title: "Estatuto Social", type: "PDF" },
  { title: "Relatório de Gestão 2024", type: "PDF" },
];

const StatsSection = () => {
  return (
    <section id="transparencia" className="section-emerald py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-3">
            Transparência
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Prestação de Contas
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Transparência é compromisso. Confira nossos números e documentos oficiais.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {documents.map((doc) => (
            <button
              key={doc.title}
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-5 text-left transition-colors border border-white/10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-colors">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-primary-foreground truncate">{doc.title}</div>
                <div className="text-xs text-primary-foreground/60">{doc.type}</div>
              </div>
              <Download className="w-5 h-5 text-primary-foreground/60 shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
