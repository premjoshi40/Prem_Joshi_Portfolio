import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences: {
  role: string;
  company: string;
  type: string;
  period: string;
  logo: string;
  description: string[];
}[] = [];

const ExperienceSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-foreground" />
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Experience</h2>
        </div>

        {experiences.length === 0 && (
          <p className="text-muted-foreground italic">Experience details coming soon.</p>
        )}

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={exp.role}
                className="bg-card rounded-2xl border border-border overflow-hidden transition-all hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start gap-5 p-5">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-foreground text-background font-bold flex items-center justify-center text-base">
                    {exp.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.role} <span className="text-muted-foreground font-medium">| {exp.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:bg-foreground/85 transition-colors"
                    >
                      {isOpen ? "Hide" : "Show"} Description
                      <ChevronDown
                        size={14}
                        className={cn("transition-transform", isOpen && "rotate-180")}
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="px-5 pb-5 pl-24 space-y-2 text-sm text-foreground/80">
                      {exp.description.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/60 flex-shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
