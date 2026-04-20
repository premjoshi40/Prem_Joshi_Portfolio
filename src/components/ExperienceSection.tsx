import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import eyLogo from "@/assets/ey-logo.webp";
import mobiculeLogo from "@/assets/mobicule-logo.jpg";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const experiences: {
  role: string;
  company: string;
  type: string;
  period: string;
  logo: string;
  logoImage?: string;
  description: string[];
}[] = [
  {
    role: "Product Manager (Senior 3)",
    company: "EY (Ernst & Young)",
    type: "Full-time",
    period: "Sep 2022 — Present",
    logo: "EY",
    logoImage: eyLogo,
    description: [],
  },
  {
    role: "Product Manager",
    company: "Mobicule Technologies",
    type: "Full-time",
    period: "Aug 2019 — Aug 2021",
    logo: "MT",
    logoImage: mobiculeLogo,
    description: [],
  },
  {
    role: "Software Developer",
    company: "Mobicule Technologies",
    type: "Full-time",
    period: "Jun 2018 — Aug 2019",
    logo: "MT",
    logoImage: mobiculeLogo,
    description: [],
  },
];

const ExperienceSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <RevealHeading title="Experience" />

        {experiences.length === 0 && (
          <p className="text-muted-foreground italic">Experience details coming soon.</p>
        )}

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isOpen = open === idx;
            return (
              <Reveal
                key={`${exp.role}-${exp.company}-${exp.period}`}
                animation="fade-in-left"
                delay={idx * 100}
                className="group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_hsl(var(--orange)/0.4)] hover:border-[hsl(var(--orange)/0.5)]"
              >
                <div className="flex items-start gap-5 p-5">
                  <div
                    className={cn(
                      "w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center text-base font-bold overflow-hidden",
                      exp.logoImage ? "bg-white border border-border" : "bg-foreground text-background"
                    )}
                  >
                    {exp.logoImage ? (
                      <img
                        src={exp.logoImage}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1"
                        loading="lazy"
                      />
                    ) : (
                      exp.logo
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.role} <span className="text-muted-foreground font-medium">| {exp.company}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:bg-[image:var(--gradient-sunset)] hover:shadow-[0_8px_20px_-8px_hsl(var(--orange)/0.7)] hover:scale-105 active:scale-95 transition-all"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
