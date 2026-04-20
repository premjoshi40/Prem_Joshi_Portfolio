import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Fridge Analyzer",
    date: "2024",
    description:
      "Smart AI feedback for fridge organization — reduces food waste and maximizes freshness using computer vision and intelligent recommendations.",
    technologies: ["Computer Vision", "AI/ML", "React", "Cloud Functions"],
    icon: "🧊",
    path: "/products/fridge-roaster",
    cta: "View Project",
  },
  {
    name: "Auralis",
    date: "2023",
    description:
      "Intelligent AI chatbot revolutionizing document retrieval through natural language and semantic search. Projected up to 80% faster retrieval and 2× productivity gains.",
    technologies: ["LLMs", "RAG", "Semantic Search", "Vector DB", "React"],
    icon: "💬",
    path: "/products/auralis",
    cta: "View Project",
  },
  {
    name: "AMUSE",
    date: "2023",
    description:
      "AR/VR museum experience platform transforming how visitors interact with artifacts through immersive storytelling. Projected 3× higher engagement.",
    technologies: ["AR/VR", "3D", "Unity", "Product Strategy"],
    icon: "🎨",
    path: "/products/amuse",
    cta: "View Project",
  },
];

const ProjectsSection = () => (
  <section id="products" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-6xl">
      <div className="inline-flex items-center gap-3 mb-10">
        <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-foreground" />
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => {
          const Card = (
            <article className="group h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] transition-all">
              {/* Header strip */}
              <div className="bg-foreground text-background px-5 py-4 flex items-center justify-between">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.path && (
                  <ArrowUpRight
                    size={18}
                    className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                )}
              </div>

              {/* Image / icon area */}
              <div className="aspect-[16/10] bg-muted/40 flex items-center justify-center text-7xl">
                {p.icon}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Date: <span className="text-foreground font-medium normal-case">{p.date}</span>
                </p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Technologies:{" "}
                  <span className="text-foreground font-medium normal-case">
                    {p.technologies.join(", ")}
                  </span>
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">
                  {p.description}
                </p>
                <div
                  className={
                    p.path
                      ? "px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold text-center group-hover:bg-foreground/85 transition-colors"
                      : "px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium text-center"
                  }
                >
                  {p.cta}
                </div>
              </div>
            </article>
          );

          return p.path ? (
            <Link key={p.name} to={p.path} className="block h-full">
              {Card}
            </Link>
          ) : (
            <div key={p.name} className="h-full">
              {Card}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
