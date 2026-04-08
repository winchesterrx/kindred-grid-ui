import { useState, useEffect } from "react";
import { X, Bell, Calendar, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "sc_popup_dismissed";

const EntryPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedDate = new Date(dismissed).toDateString();
      const today = new Date().toDateString();
      if (dismissedDate === today) return;
    }
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setClosing(true);
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    }
    setTimeout(() => setVisible(false), 250);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm transition-opacity duration-300 ${closing ? "opacity-0" : "animate-in fade-in duration-300"}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      <div className={`relative bg-card rounded-2xl shadow-2xl max-w-lg w-[94%] overflow-hidden transition-transform duration-300 ${closing ? "scale-95" : "animate-in zoom-in-95 duration-300"}`}>
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </button>

        {/* Header visual — placeholder for uploaded image */}
        <div className="w-full bg-gradient-to-br from-navy via-navy to-emerald p-8 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
                Aviso Importante
              </span>
              <span className="block text-[10px] text-primary-foreground/50">Santa Casa de Paulo de Faria</span>
            </div>
          </div>
          <h3 className="text-xl font-extrabold text-primary-foreground leading-snug mb-2">
            📢 Campanha de Vacinação contra Gripe
          </h3>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Vacinas disponíveis gratuitamente para toda a comunidade de Paulo de Faria e região. Proteja sua família!
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-navy">01 a 15 de Abril de 2026</p>
              <p className="text-xs text-muted-foreground">Atendimento das 8h às 17h — sem agendamento</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-navy">Rua Zenha Ribeiro, 958 — Centro</p>
              <p className="text-xs text-muted-foreground">Paulo de Faria - SP · CEP 15490-000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-emerald mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-navy">(17) 3292-1373</p>
              <p className="text-xs text-muted-foreground">Informações e dúvidas</p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              📋 Traga seu <strong className="text-navy">documento de identidade</strong> e <strong className="text-navy">cartão do SUS</strong>. Vacinas para todas as idades — crianças, adultos e idosos.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-border accent-emerald"
              />
              <span className="text-xs text-muted-foreground">Não mostrar hoje</span>
            </label>
            <Button variant="cta" size="sm" className="rounded-full px-5" onClick={close}>
              Entendi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPopup;
