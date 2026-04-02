import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const navItems = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Ouvidoria", href: "#ouvidoria" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="section-white sticky top-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/95">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-navy">
            <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <div className="leading-tight">
            <span className="text-lg font-bold text-navy tracking-tight">Santa Casa</span>
            <span className="block text-xs text-muted-foreground font-medium -mt-0.5">de Misericórdia</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button variant="cta" size="lg" className="rounded-full px-7">
            <Heart className="w-4 h-4 mr-1" />
            Doe Agora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-sm font-medium text-foreground/80 hover:text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button variant="cta" className="w-full rounded-full">
            <Heart className="w-4 h-4 mr-1" />
            Doe Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
