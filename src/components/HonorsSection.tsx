import eyLogo from "@/assets/ey-logo.webp";
import mobiculeLogo from "@/assets/mobicule-logo.jpg";
import { Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

type Honor = {
  title: string;
  issuer: string;
  logo: string;
  count: string;
  description: string;
  highlights?: string[];
};

const honors: Honor[] = [
  {
    title: "EY Bravo Recognition Award",
    issuer: "EY (Ernst & Young)",
    logo: eyLogo,
    count: "×5",
    description:
      "Five-time recipient of the EY Bravo Recognition Award for exceptional product management performance.",
    highlights: [
      "Excellence in Product Management",
      "Outstanding Product Delivery",
      "Consistently Upholding High Product Quality",
      "Customer-centric product strategy",
      "End-to-End Product Ownership from Discovery to Launch",
    ],
  },
  {
    title: "Employee of the Month",
    issuer: "Mobicule Technologies",
    logo: mobiculeLogo,
    count: "×7",
    description:
      "Seven-time Employee of the Month, recognized for leadership and execution across high-impact engineering initiatives.",
  },
];

const HonorsSection = () => (
  <section id="honors" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <RevealHeading title="Honors & Awards" />

      <div className="space-y-4">
        {honors.map((honor, idx) => (
          <Reveal key={honor.title} animation="fade-in-left" delay={idx * 100}>
            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-[hsl(var(--orange)/0.6)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_hsl(var(--orange)/0.4)] transition-all duration-500">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-muted/50 p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={honor.logo}
                  alt={`${honor.issuer} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-base lg:text-lg font-bold text-foreground leading-snug group-hover:text-[hsl(var(--orange))] transition-colors">
                    {honor.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[hsl(var(--orange)/0.12)] text-[hsl(var(--orange))] border border-[hsl(var(--orange)/0.3)]">
                    <Award size={12} />
                    {honor.count}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Issued by {honor.issuer}
                </p>
                <p className="text-sm text-foreground/80 mt-3 leading-relaxed">
                  {honor.description}
                </p>
                {honor.highlights && (
                  <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                    {honor.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-foreground/90"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--orange))] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HonorsSection;
