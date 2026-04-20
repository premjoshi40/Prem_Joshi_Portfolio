import { Sparkles } from "lucide-react";

const Placeholder = ({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) => (
  <section id={id} className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-16 text-center">
        {/* Gradient blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[hsl(var(--orange)/0.15)] blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[hsl(var(--violet)/0.15)] blur-3xl" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[image:var(--gradient-sunset)] text-white text-xs font-semibold uppercase tracking-wider mb-5 shadow-[var(--shadow-glow)]">
            <Sparkles size={14} />
            {eyebrow}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Coming soon — fresh content is being prepared for this section.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Placeholder;
