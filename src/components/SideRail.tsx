import { Home, User, Award, Briefcase, Sparkles, GraduationCap, Package, Code2, Trophy, Heart, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "Biography", icon: User },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Package },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "honors", label: "Honors", icon: Trophy },
  { id: "hobbies", label: "Hobbies", icon: Heart },
  { id: "contact", label: "Contact", icon: Mail },
];

const SideRail = () => {
  const [active, setActive] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = "home";
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = item.id;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 px-4 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="w-10 h-10 rounded-lg bg-[image:var(--gradient-sunset)] text-white flex items-center justify-center font-bold text-sm shadow-[var(--shadow-glow)]">
          PJ
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-10 h-10 rounded-lg border border-border flex items-center justify-center bg-card hover:bg-muted transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-background/98 backdrop-blur-md border-b border-border shadow-xl animate-in slide-in-from-top">
          <nav className="flex flex-col p-4 gap-1">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[image:var(--gradient-sunset)] text-white shadow-[var(--shadow-glow)]"
                      : "text-foreground/70 hover:bg-muted"
                  )}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* Desktop side rail */}
      <aside className="hidden lg:flex fixed top-0 left-0 z-50 h-screen w-20 flex-col items-center py-6 bg-background border-r border-border">
        {/* Logo */}
        <button
          onClick={() => handleClick("home")}
          className="w-12 h-12 rounded-xl bg-[image:var(--gradient-sunset)] text-white flex items-center justify-center font-bold text-base mb-10 shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
          aria-label="Home"
        >
          PJ
        </button>

        {/* Nav items */}
        <nav className="flex flex-col gap-2">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
                  isActive
                    ? "bg-[image:var(--gradient-sunset)] text-white shadow-[var(--shadow-glow)]"
                    : "text-foreground/50 hover:text-foreground hover:bg-muted"
                )}
                aria-label={item.label}
              >
                <Icon size={20} strokeWidth={2} />
                {/* Tooltip */}
                <span className="absolute left-full ml-3 px-3 py-1.5 rounded-md bg-foreground text-background text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default SideRail;
