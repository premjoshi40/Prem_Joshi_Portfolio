import { Github } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";
import neuralImage from "@/assets/project-neural-network.png";

const techProjects = [
  {
    name: "Neural Network",
    date: "2024",
    description:
      "A small neural network built from scratch to explore the fundamentals of deep learning — forward pass, backpropagation, and gradient descent — implemented with NumPy and PyTorch.",
    technologies: ["Python", "NumPy", "PyTorch", "Deep Learning"],
    image: neuralImage,
    repo: "https://github.com/premjoshi40/neural_network",
    cta: "View on GitHub",
  },
];

const TechnicalProjectsSection = () => {
  return (
    <section id="technical-projects" className="py-24 px-6 lg:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <RevealHeading title="Technical Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {techProjects.map((p, idx) => (
            <Reveal key={p.name} animation="fade-in" delay={idx * 120} className="h-full">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_hsl(var(--orange)/0.45)] hover:border-[hsl(var(--orange)/0.5)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--orange)/0.08)] via-transparent to-[hsl(var(--magenta)/0.08)]" />

                  <div className="relative bg-foreground text-background px-5 py-4 flex items-center justify-between overflow-hidden">
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    <Github
                      size={18}
                      className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  </div>

                  <div className="relative aspect-[16/10] bg-muted/40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
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
                    <div className="px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold text-center transition-all group-hover:bg-[image:var(--gradient-sunset)] group-hover:shadow-[0_8px_24px_-8px_hsl(var(--orange)/0.7)] flex items-center justify-center gap-2">
                      <Github size={16} />
                      {p.cta}
                    </div>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProjectsSection;
