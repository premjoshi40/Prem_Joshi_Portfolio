import { Button } from "@/components/ui/button";
import { Package, Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Empty space for layout */}
          <div></div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Section - Task Bar & CTA */}
          <div className="flex items-center gap-4">
            {/* Task Bar */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                <Package size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">Product Built</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer">
                <Github size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">Git</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="default" size="lg" className="rounded-full flex items-center gap-2">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
