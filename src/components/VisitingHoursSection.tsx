import { Clock, Users, UserCheck, AlertCircle } from "lucide-react";

const VisitingHoursSection = () => {
  return (
    <section id="horario-visitas" className="section-light py-16 md:py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-navy/10 text-navy text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <Clock className="w-3.5 h-3.5" />
            Informações para Visitantes
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-3">
            Horário de Visitas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Para o conforto e recuperação dos nossos pacientes, as visitas seguem os horários abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Card 1 - Visitas */}
          <div className="bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="bg-navy px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-base leading-tight">Horário de Visitas</h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-navy">Período Matutino</p>
                  <p className="text-sm text-muted-foreground">09h00 às 11h00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-navy">Período Vespertino</p>
                  <p className="text-sm text-muted-foreground">18h00 às 20h00</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="font-medium">Máximo de <strong>2 visitantes</strong> por vez</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Troca de Acompanhante */}
          <div className="bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="bg-emerald px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-base leading-tight">Troca de Acompanhante</h3>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-navy mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-navy">Período Matutino</p>
                  <p className="text-sm text-muted-foreground">07h30 às 08h30</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-navy mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-navy">Período Noturno</p>
                  <p className="text-sm text-muted-foreground">18h30 às 21h30</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-xs text-muted-foreground">
                  O acompanhante deve aguardar o horário de troca na área designada.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Quem tem direito a acompanhante */}
          <div className="bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="bg-secondary px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-bold text-base leading-tight">Direito a Acompanhante</h3>
            </div>
            <div className="px-6 py-5">
              <p className="text-xs text-muted-foreground mb-4">Têm direito a um acompanhante permanente:</p>
              <ul className="space-y-3">
                {[
                  "Pacientes acima de 60 anos",
                  "Pacientes menores de 18 anos",
                  "Pacientes com necessidades especiais (a pedido do médico)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    </span>
                    <span className="text-sm text-foreground/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitingHoursSection;
