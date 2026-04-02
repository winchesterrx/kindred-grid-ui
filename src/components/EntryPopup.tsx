import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "sc_popup_dismissed";

const EntryPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

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
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-lg w-[90%] overflow-hidden">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Image placeholder */}
        <div className="w-full h-56 bg-gradient-to-br from-navy to-emerald flex items-center justify-center">
          <div className="text-center text-primary-foreground px-6">
            <h3 className="text-2xl font-extrabold mb-2">📢 Campanha de Vacinação</h3>
            <p className="text-primary-foreground/80 text-sm">
              De 01 a 15 de Abril — Vacinas contra Gripe disponíveis gratuitamente para toda a comunidade.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Traga seu documento de identidade e cartão do SUS. Atendimento das 8h às 17h, sem necessidade de agendamento.
          </p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(e) => setDontShowAgain(e.target.checked)}
              className="w-4 h-4 rounded border-border accent-emerald"
            />
            <span className="text-xs text-muted-foreground">Não mostrar novamente hoje</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EntryPopup;
