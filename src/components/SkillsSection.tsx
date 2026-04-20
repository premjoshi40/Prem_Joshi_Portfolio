const groups = [
  {
    title: "Product",
    skills: [
      "Strategy", "Roadmapping", "Discovery", "MVPs",
      "A/B Testing", "B2B SaaS", "AI/ML Integration", "Go-to-Market",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines", "Serverless"],
  },
  {
    title: "AI / ML",
    skills: ["LLMs", "Prompt Engineering", "RAG", "Semantic Search", "Vector DBs", "Model Evaluation"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "Spring Boot", "REST APIs", "GraphQL", "Git", "Linux"],
  },
  {
    title: "Analytics",
    skills: ["Mixpanel", "Amplitude", "SQL Analytics", "KPI Tracking", "Experiment Design", "Data Viz"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="inline-flex items-center gap-3 mb-10">
        <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-foreground" />
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Skills</h2>
      </div>

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-bold text-foreground mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="px-3.5 py-1.5 rounded-lg bg-muted text-foreground/85 text-sm font-medium border border-border hover:border-foreground hover:bg-card transition-colors"
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
