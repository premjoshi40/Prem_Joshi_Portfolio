import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import eyLogo from "@/assets/ey-logo.webp";
import mobiculeLogo from "@/assets/mobicule-logo.jpg";
import ubLogo from "@/assets/ub-logo.webp";
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
    description: [
      "Delivered cloud security hardening, regulatory compliance, and performance optimization across 10+ Fortune 500 engagements; partnered with CISOs and VPs of Security to assess 25+ cloud workloads on GCP and AWS, reducing client risk posture from high to low and ensuring data sovereignty and 99.999% uptime across complex enterprise environments.",
      "Scaled platform 3× in monthly active users by defining GCP microservices architecture (Kubernetes, Pub/Sub) and driving engineering tradeoff decisions across a 3-engineer team without reliability degradation.",
      "Reduced infrastructure costs by 22% per active user by defining and launching a product-led AWS autoscaling strategy; drove adoption across 8 services while maintaining 99.99% uptime and enterprise SLAs.",
      "Secured $2M+ in new ARR by delivering technical presentations to senior leadership across 7+ global enterprises; developed go-to-market strategy and aligned product narrative across sales, engineering, and marketing teams.",
      "Drove $3.2M ARR growth on an AI-powered risk platform; owned PRD-to-OKR translation for a 5-member team, achieving 2× enterprise customer growth and 31% higher paid feature adoption across 300K+ business users.",
      "Led product discovery for EY's internal AI-powered risk automation tool; partnered with engineering teams to translate risk workflows into data requirements and AI-training specifications, authoring 10+ domain artifacts to accelerate model development.",
      "Owned compliance product roadmaps across 15+ clients (SOC2, ISO 27001, NIST); defined requirements and adoption strategy for Zscaler, Intune/Defender, Forescout, and SailPoint, leading teams of 5 members to achieve 100% certification success.",
      "Improved document search accuracy by 27% by owning quality-focused AI/ML product strategy for an LLM-powered RAG feature; defined evals with 4 ML engineers to optimize vector embeddings, retrieval latency, and inference cost.",
    ],
  },
  {
    role: "Product Manager",
    company: "Mobicule Technologies",
    type: "Full-time",
    period: "Aug 2019 — Aug 2021",
    logo: "MT",
    logoImage: mobiculeLogo,
    description: [
      "Generated $1.5M in revenue at NPS 8.5 by owning end-to-end product strategy for 5 developer-facing cloud-native B2B SaaS products, taking each from 0-to-1 in a startup environment.",
      "Drove developer adoption across open-source communities by partnering with DevRel, developer evangelists, and technical writers to validate product-market fit, surfacing requirements that directly shaped 3 major feature releases.",
      "Reduced development time by 30% across a cross-functional engineering team by owning SDLC execution, writing 100+ developer-facing user stories and acceptance criteria using Agile methodologies.",
    ],
  },
  {
    role: "Software Developer",
    company: "Mobicule Technologies",
    type: "Full-time",
    period: "Jun 2018 — Aug 2019",
    logo: "MT",
    logoImage: mobiculeLogo,
    description: [
      "Reduced cross-team integration time by 35% by designing and shipping reusable RESTful APIs and internal developer tooling on GCP, consumed by 3+ downstream engineering teams and accelerating delivery cycles by 2 sprint cycles.",
      "Supported 2M+ users at 99.999% uptime by architecting a cloud-native platform on GCP, building microservices, reusable libraries, and auto-scaling fault-tolerant infrastructure in Java, Spring Boot, and React.",
    ],
  },
  {
    role: "Research Assistant",
    company: "University at Buffalo",
    type: "Part-time",
    period: "Jun 2022 — Oct 2022",
    logo: "UB",
    logoImage: ubLogo,
    description: [
      "Conducted machine learning research analyzing tester behavior using large-scale test execution and defect datasets, building end-to-end pipelines for data preprocessing, feature engineering, and model training. Extracted behavioral features such as test coverage patterns, execution frequency, defect density, and time-to-detect signals, and applied supervised learning models including logistic regression, random forests, and gradient boosting to predict defect-prone areas and high-impact test cases. Evaluated models using precision-recall, F1-score, and ROC-AUC, and leveraged results to optimize test prioritization strategies, improving defect detection efficiency and overall software quality.",
    ],
  },
];

const ExperienceSection = () => {
  const [open, setOpen] = useState<number | null>(null);

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
