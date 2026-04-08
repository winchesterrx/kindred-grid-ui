import {
  Stethoscope,
  Baby,
  HeartPulse,
  Microscope,
  Scan,
  Ambulance,
  Activity,
  Atom,
} from "lucide-react";

const services = [
  { icon: Microscope, title: "Laboratório Clínico", desc: "Diagnóstico laboratorial com análises clínicas e resultados rápidos." },
  { icon: Scan, title: "Diagnóstico por Imagem", desc: "Raio-X, ultrassonografia e exames de imagem de alta precisão." },
  { icon: Activity, title: "Métodos Gráficos", desc: "Eletrocardiograma e diagnósticos por métodos gráficos dinâmicos." },
  { icon: Atom, title: "Medicina Nuclear", desc: "Exames especializados em medicina nuclear." },
  { icon: Baby, title: "Pré-natal, Parto e Nascimento", desc: "Acompanhamento gestacional completo e parto humanizado." },
  { icon: Ambulance, title: "Urgência e Emergência", desc: "Pronto-Socorro 24h com equipe especializada." },
  { icon: HeartPulse, title: "Transplante", desc: "Serviço de captação e transplante de órgãos." },
  { icon: Stethoscope, title: "Clínica Médica", desc: "Atendimento ambulatorial e internação clínica." },
];

const infra = [
  { name: "Sala de Atendimento Indiferenciado", qty: 1 },
  { name: "Sala de Curativo", qty: 1 },
  { name: "Clínicas Indiferenciado", qty: 1 },
  { name: "Consultórios Não Médicos", qty: 1 },
  { name: "Sala de Repouso/Observação", qty: 2 },
  { name: "Sala de Cirurgia", qty: 2 },
  { name: "Sala de Recuperação", qty: 1 },
  { name: "Sala de Parto Normal", qty: 1 },
  { name: "Sala de Estabilização", qty: 1 },
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hospital Geral com ampla gama de especialidades médicas a serviço da comunidade de Paulo de Faria e região.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-card rounded-2xl border border-border/60 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center mb-4 group-hover:bg-emerald group-hover:text-primary-foreground transition-colors">
                <svc.icon className="w-6 h-6 text-emerald group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-bold text-navy mb-1.5">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Infrastructure */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Estrutura Física</h3>
          <div className="bg-card rounded-2xl border border-border/60 overflow-hidden">
            <div className="grid grid-cols-[1fr_auto] text-sm">
              <div className="px-5 py-3 font-semibold text-navy bg-muted/50 border-b border-border">Ambiente</div>
              <div className="px-5 py-3 font-semibold text-navy bg-muted/50 border-b border-border text-center">Qtd.</div>
              {infra.map((item, i) => (
                <>
                  <div key={`n-${i}`} className={`px-5 py-3 text-muted-foreground ${i < infra.length - 1 ? "border-b border-border/40" : ""}`}>
                    {item.name}
                  </div>
                  <div key={`q-${i}`} className={`px-5 py-3 text-center font-semibold text-navy ${i < infra.length - 1 ? "border-b border-border/40" : ""}`}>
                    {item.qty}
                  </div>
                </>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            * A estrutura não interfere na disponibilização do atendimento. CNES: 3536602080869
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
