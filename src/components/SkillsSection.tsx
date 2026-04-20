import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const groups = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy", "Roadmapping", "PRDs", "OKRs",
      "Go-to-Market", "Agile", "Cross-functional Delivery",
    ],
  },
  {
    title: "Technical Stack",
    skills: [
      "Java", "Python", "JavaScript", "SQL",
      "NoSQL (MongoDB, DynamoDB)", "Docker", "Kubernetes", "Git", "Kafka", "Redis",
    ],
  },
  {
    title: "Cloud and DevOps",
    skills: [
      "Google Cloud Platform (GCP)", "AWS", "Azure", "Docker",
      "Kubernetes", "Git", "CI/CD", "Terraform",
    ],
  },
  {
    title: "Artificial Intelligence",
    skills: [
      "Gen-AI", "RAG", "LLMs", "Vector Databases & Embeddings",
      "MLOps", "Prompt Engineering", "Big Data Analytics",
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <RevealHeading title="Skills" />

      <div className="space-y-8">
        {groups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 100}>
            <h3 className="text-lg font-bold text-foreground mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s, si) => (
                <span
                  key={s}
                  style={{ animationDelay: `${gi * 100 + si * 30}ms` }}
                  className="px-3.5 py-1.5 rounded-lg bg-muted text-foreground/85 text-sm font-medium border border-border hover:border-[hsl(var(--orange))] hover:bg-card hover:text-[hsl(var(--orange))] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_-6px_hsl(var(--orange)/0.5)] transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
