const AboutSection = () => {
  const stats = [
    { value: "6+", label: "Years building products" },
    { value: "$8.5M", label: "Annual profit uplift driven" },
    { value: "70%", label: "Workflow efficiency gain" },
    { value: "12+", label: "Engineers mentored" },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-16 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-3">
              About me
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Strategy meets execution at scale.
            </h2>
          </div>

          <div className="space-y-6 text-foreground/80 text-base leading-relaxed">
            <p>
              I'm a Product Manager and technologist passionate about building intelligent,
              scalable products that simplify complexity and deliver measurable impact. With a
              foundation in electronics engineering and a career that spans software development,
              consulting, and product leadership, I specialize in driving end-to-end product
              lifecycles — from discovery to launch to scale.
            </p>
            <p>
              At EY, I lead product strategy for <strong className="text-foreground">Risk GPT</strong>,
              an AI-powered risk intelligence platform automating cybersecurity audit workflows
              across global regions. Outside EY, I build products like <strong className="text-foreground">Auralis</strong> and{" "}
              <strong className="text-foreground">AMUSE</strong> that explore how AI and immersive
              tech can enhance daily life.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_hsl(var(--foreground)/0.2)] transition-all"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
