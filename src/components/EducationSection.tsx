import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";
import ubLogo from "@/assets/ub-logo.webp";
import sppuLogo from "@/assets/sppu-logo.webp";

const education: {
  school: string;
  degree: string;
  detail: string;
  period: string;
  logo: string;
  coursework: string[];
}[] = [
  {
    school: "University at Buffalo",
    degree: "Master of Science, Management Information Systems",
    detail: "School of Management",
    period: "",
    logo: ubLogo,
    coursework: [],
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering, Electronics & Telecommunications",
    detail: "",
    period: "",
    logo: sppuLogo,
    coursework: [],
  },
];

const EducationSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="education" className="py-24 px-6 lg:px-16 bg-muted/40">
      <div className="container mx-auto max-w-5xl">
        <RevealHeading title="Education" />

        {education.length === 0 && (
          <p className="text-muted-foreground italic">Education details coming soon.</p>
        )}

        <div className="space-y-4">
          {education.map((ed, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={ed.school}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all"
              >
                <div className="flex items-start gap-5 p-5">
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-foreground text-background font-bold flex items-center justify-center text-base">
                    {ed.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground">{ed.school}</h3>
                    <p className="text-sm font-semibold text-foreground/80 mt-1">{ed.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ed.detail}</p>
                    <p className="text-sm text-muted-foreground">{ed.period}</p>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="inline-flex items-center gap-1.5 mt-3 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:bg-foreground/85 transition-colors"
                    >
                      {isOpen ? "Hide" : "Show"} Relevant Coursework
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
                    <div className="px-5 pb-5 pl-24 flex flex-wrap gap-2">
                      {ed.coursework.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1.5 rounded-lg bg-muted text-foreground/85 text-sm font-medium border border-border"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
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

export default EducationSection;
