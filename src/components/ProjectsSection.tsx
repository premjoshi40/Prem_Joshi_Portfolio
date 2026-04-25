import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import RevealHeading from "@/components/RevealHeading";
import fridgeImage from "@/assets/project-fridge.jpg";
import auralisImage from "@/assets/project-auralis.jpg";
import amuseImage from "@/assets/project-amuse.jpg";
import neuralImage from "@/assets/project-neural-network.png";

type Project = {
  name: string;
  date: string;
  description: string;
  technologies: string[];
  image: string;
  path?: string;
  repo?: string;
  cta: string;
};

const projects: Project[] = [
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
    name: "RAG Chat Bot",
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
  {
    name: "Neural Network",
    date: "2024",
    description:
      "A neural network built from scratch to explore the fundamentals of deep learning — forward pass, backpropagation, and gradient descent — implemented with NumPy and PyTorch.",
    technologies: ["Python", "NumPy", "PyTorch", "Deep Learning"],
    image: neuralImage,
    repo: "https://github.com/premjoshi40/neural_network",
    cta: "View on GitHub",
  },
];

const ProjectCard = ({ p }: { p: Project }) => {
  const isExternal = !!p.repo;
  const Card = (
    <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_hsl(var(--orange)/0.45)] hover:border-[hsl(var(--orange)/0.5)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--orange)/0.08)] via-transparent to-[hsl(var(--magenta)/0.08)]" />

      <div className="relative bg-foreground text-background px-5 py-4 flex items-center justify-between overflow-hidden">
        <h3 className="text-lg font-bold">{p.name}</h3>
        {isExternal ? (
          <Github
            size={18}
            className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
          />
        ) : (
          <ArrowUpRight
            size={18}
            className="opacity-70 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
          />
        )}
        <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

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
            "px-4 py-2.5 rounded-lg bg-foreground text-background text-sm font-semibold text-center transition-all group-hover:bg-[image:var(--gradient-sunset)] group-hover:shadow-[0_8px_24px_-8px_hsl(var(--orange)/0.7)] flex items-center justify-center gap-2"
          }
        >
          {isExternal && <Github size={16} />}
          {p.cta}
        </div>
      </div>
    </article>
  );

  const wrapperClass = "block h-full w-[320px] sm:w-[360px] lg:w-[400px] flex-shrink-0";

  if (p.path) {
    return (
      <Link to={p.path} className={wrapperClass}>
        {Card}
      </Link>
    );
  }
  if (p.repo) {
    return (
      <a
        href={p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
      >
        {Card}
      </a>
    );
  }
  return <div className={wrapperClass}>{Card}</div>;
};

const ProjectsSection = () => {
  // Duplicate the list so the marquee loops seamlessly with translateX(-50%).
  const loop = [...projects, ...projects];

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <RevealHeading title="Projects" />
      </div>

      <div className="group relative mt-4">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="overflow-hidden">
          <div className="flex gap-5 w-max animate-scroll-left group-hover:[animation-play-state:paused] py-4 px-6">
            {loop.map((p, idx) => (
              <ProjectCard key={`${p.name}-${idx}`} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
