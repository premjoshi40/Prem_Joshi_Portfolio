import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";
import fridgeImage from "@/assets/project-fridge.jpg";
import auralisImage from "@/assets/project-auralis.jpg";
import amuseImage from "@/assets/project-amuse.jpg";

const projects = [
  {
    name: "Fridge Analyzer",
    date: "2024",
    description:
      "Smart AI feedback for fridge organization — reduces food waste and maximizes freshness using computer vision and intelligent recommendations.",
    technologies: ["Computer Vision", "AI/ML", "React", "Cloud Functions"],
    image: fridgeImage,
    path: "/products/fridge-roaster",
    cta: "View Project",
  },
  {
    name: "Auralis",
    date: "2023",
    description:
      "Intelligent AI chatbot revolutionizing document retrieval through natural language and semantic search. Projected up to 80% faster retrieval and 2× productivity gains.",
    technologies: ["LLMs", "RAG", "Semantic Search", "Vector DB", "React"],
    image: auralisImage,
    path: "/products/auralis",
    cta: "View Project",
  },
  {
    name: "AMUSE",
    date: "2023",
    description:
      "AR/VR museum experience platform transforming how visitors interact with artifacts through immersive storytelling. Projected 3× higher engagement.",
    technologies: ["AR/VR", "3D", "Unity"],
    image: amuseImage,
    path: "/products/amuse",
    cta: "View Project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="products" className="py-24 px-6 lg:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <RevealHeading title="Products" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, idx) => {
            const Card = (
              <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_hsl(var(--orange)/0.45)] hover:border-[hsl(var(--orange)/0.5)]">
                {/* Glow gradient on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--orange)/0.08)] via-transparent to-[hsl(var(--magenta)/0.08)]" />

                {/* Header strip */}
                <div className="relative bg-foreground text-background px-5 py-4 flex items-center justify-between overflow-hidden">
                  <h3 className="text-lg font-bold">{p.name}</h3>
                  {p.path && (
                    <ArrowUpRight
                      size={18}
                      className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                    />
                  )}
                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                </div>

                {/* Image area */}
                <div className="relative aspect-[16/10] bg-muted/40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} project preview`}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="relative p-5 flex-1 flex flex-col">
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
                        ? "px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold text-center transition-all group-hover:bg-[image:var(--gradient-sunset)] group-hover:shadow-[0_8px_24px_-8px_hsl(var(--orange)/0.7)]"
                        : "px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium text-center"
                    }
                  >
                    {p.cta}
                  </div>
                </div>
              </article>
            );

            return (
              <Reveal
                key={p.name}
                animation="fade-in"
                delay={idx * 120}
                className="h-full"
              >
                {p.path ? (
                  <Link to={p.path} className="block h-full">
                    {Card}
                  </Link>
                ) : (
                  <div className="h-full">{Card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
