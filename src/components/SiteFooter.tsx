import { Heart, Phone, MapPin, Mail, Facebook, Instagram, Youtube, Linkedin, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="section-white border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 - About */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-base font-bold text-navy">Santa Casa de Paulo de Faria</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              Irmandade da Santa Casa de Misericórdia de Paulo de Faria
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              CNES: 3536602080869 · Hospital Geral<br />
              Filantropia, saúde e acolhimento à comunidade de Paulo de Faria e região.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-navy hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Mapa do Site</h4>
            <ul className="space-y-3">
              {["Quem Somos", "Serviços", "Transparência", "Ouvidoria", "Notícias", "Trabalhe Conosco"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-navy transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Emergency Contacts */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Contatos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                <div>
                  <div className="text-lg font-bold text-navy">(17) 3292-1373</div>
                  <div className="text-xs text-muted-foreground">Central / Pronto-Socorro 24h</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-navy">contato@santacasapaulodefaria.org.br</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4 - Location */}
          <div>
            <h4 className="text-sm font-bold text-navy uppercase tracking-wider mb-5">Localização</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rua Zenha Ribeiro, 958<br />
                Centro — Paulo de Faria, SP<br />
                CEP 15490-000
              </p>
            </div>
            <div className="w-full h-32 rounded-xl bg-muted overflow-hidden">
              <iframe
                title="Localização Santa Casa de Paulo de Faria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5!2d-49.3848!3d-20.0308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAyJzAwLjAiUyA0OcKwMjMnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-xl border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Transparency Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground">
              <span className="font-semibold text-navy">Transparência Obrigatória:</span>{" "}
              <a href="#" className="hover:text-navy underline">Atas de Reunião</a> ·{" "}
              <a href="#" className="hover:text-navy underline">Atas de Eleição</a> ·{" "}
              <a href="#" className="hover:text-navy underline">Demonstrações Contábeis</a> ·{" "}
              <a href="#" className="hover:text-navy underline">CEBAS</a>
            </div>
            <div className="text-xs text-muted-foreground flex items-center gap-3">
              © 2026 Santa Casa de Misericórdia de Paulo de Faria. Todos os direitos reservados.
              <Link to="/admin" className="inline-flex items-center gap-1 text-muted-foreground/50 hover:text-navy transition-colors" title="Área Administrativa">
                <Lock className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
