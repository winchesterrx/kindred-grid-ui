import { Button } from "@/components/ui/button";
import { Download, FileText, Users, HeartPulse, Stethoscope, BedDouble, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "3.000+", label: "Atendimentos / Mês", desc: "Consultas, exames e procedimentos" },
  { icon: HeartPulse, value: "1.200+", label: "Cirurgias / Ano", desc: "Procedimentos cirúrgicos realizados" },
  { icon: Stethoscope, value: "8", label: "Especialidades", desc: "Credenciadas no CNES" },
  { icon: BedDouble, value: "12", label: "Salas e Ambientes", desc: "Estrutura física hospitalar" },
  { icon: Award, value: "80+", label: "Anos de História", desc: "Servindo a comunidade desde 1940" },
  { icon: TrendingUp, value: "100%", label: "SUS", desc: "Atendimento filantrópico" },
];

const documents = [
  { title: "Balanço Patrimonial 2024", type: "PDF", size: "1.2 MB" },
  { title: "Estatuto Social Atualizado", type: "PDF", size: "845 KB" },
  { title: "Relatório de Gestão 2024", type: "PDF", size: "2.1 MB" },
  { title: "Demonstrações Contábeis 2024", type: "PDF", size: "1.8 MB" },
];

const StatsSection = () => {
  return (
    <section id="transparencia" className="section-emerald py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-foreground/70 mb-3">
            Transparência e Prestação de Contas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            Nossos Números Falam
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Transparência é compromisso da Irmandade da Santa Casa de Misericórdia de Paulo de Faria.
            Confira nossos indicadores e acesse os documentos oficiais.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground font-semibold mb-0.5">{stat.label}</div>
              <div className="text-xs text-primary-foreground/60">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Documents */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-primary-foreground mb-5 text-center">📄 Documentos para Download</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div className="text-xs text-primary-foreground/60">{doc.type} · {doc.size}</div>
              </div>
              <Download className="w-5 h-5 text-primary-foreground/60 shrink-0 group-hover:text-primary-foreground transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
