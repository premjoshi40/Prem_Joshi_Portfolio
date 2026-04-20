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
                  <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden border border-border bg-card flex items-center justify-center">
                    <img src={ed.logo} alt={`${ed.school} logo`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground">{ed.school}</h3>
                    <p className="text-sm font-semibold text-foreground/80 mt-1">{ed.degree}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ed.detail}</p>
                    <p className="text-sm text-muted-foreground">{ed.period}</p>
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
