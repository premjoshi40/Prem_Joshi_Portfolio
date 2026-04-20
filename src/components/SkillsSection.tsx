import { Layers, Code2, BarChart3 } from "lucide-react";

const groups = [
  {
    icon: Layers,
    title: "Product",
    gradient: "var(--gradient-warm)",
    skills: [
      "Strategy", "Roadmapping", "Discovery", "MVPs",
      "A/B Testing", "B2B SaaS", "AI/ML Integration", "Go-to-Market",
    ],
  },
  {
    icon: Code2,
    title: "Tech",
    gradient: "var(--gradient-sunset)",
    skills: [
      "Java", "Python", "JavaScript", "React",
      "SQL/NoSQL", "AWS", "GCP", "Docker", "Kubernetes", "Terraform",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    gradient: "var(--gradient-cool)",
    skills: [
      "Data Visualization", "Experiment Design", "KPI Tracking",
      "Mixpanel", "Amplitude", "SQL Analytics",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 lg:px-16 bg-muted/30">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <p className="inline-block text-sm font-semibold tracking-wide uppercase mb-3 bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent">
          What I work with
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Skills & expertise
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {groups.map(({ icon: Icon, title, skills, gradient }) => (
          <div
            key={title}
            className="group relative bg-card border border-border rounded-3xl p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl text-white flex items-center justify-center mb-5 shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform"
              style={{ backgroundImage: `var(--gradient-sunset)` }}
            >
              <Icon size={22} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-lg bg-muted text-foreground/80 text-sm font-medium border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
