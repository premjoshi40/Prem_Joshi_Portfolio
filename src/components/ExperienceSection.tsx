import { Rocket, Brain, Palette, Code, Cloud, Users } from "lucide-react";

const milestones = [
  {
    icon: Rocket,
    title: "Risk GPT @ EY",
    role: "Product Manager",
    description:
      "Led product strategy for an AI-powered risk intelligence platform automating cybersecurity audit workflows globally. Delivered 70% faster audits, $8.5M+ annual profit uplift, and 99.99% uptime.",
  },
  {
    icon: Brain,
    title: "Auralis",
    role: "Founder & Builder",
    description:
      "AI chatbot revolutionizing document retrieval through natural language and semantic search. Projected up to 80% faster retrieval and 2× productivity gains.",
  },
  {
    icon: Palette,
    title: "AMUSE",
    role: "Founder & Builder",
    description:
      "AR/VR museum experience platform transforming how visitors interact with artifacts. Projected 3× higher engagement and 40% improved visitor satisfaction.",
  },
  {
    icon: Cloud,
    title: "Cloud Optimization Initiatives",
    role: "Tech Lead",
    description:
      "Drove $1.2M annual cloud cost savings and 45% performance improvements through multi-tenant AWS scaling and architecture optimization.",
  },
  {
    icon: Code,
    title: "Software Engineering",
    role: "Software Developer",
    description:
      "Delivered enterprise and consumer-facing apps including an adhesives e-commerce platform, Vodafone mPower enterprise app, and a high-traffic site for one of India's largest electronics retailers.",
  },
  {
    icon: Users,
    title: "Mentorship & Leadership",
    role: "Across roles",
    description:
      "Mentored 12+ engineers, improved cross-functional collaboration, and lifted team productivity by 30% through better process and ownership models.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="mb-14">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
          Where I've made impact
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Experience
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-border" aria-hidden />

        <div className="space-y-8">
          {milestones.map(({ icon: Icon, title, role, description }) => (
            <div key={title} className="relative pl-20 group">
              {/* Icon node */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center shadow-[0_10px_24px_-10px_hsl(var(--foreground)/0.6)] group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_hsl(var(--foreground)/0.25)] transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{role}</span>
                </div>
                <p className="text-foreground/75 leading-relaxed text-sm md:text-base">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
