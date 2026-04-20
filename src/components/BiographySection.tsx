const BiographySection = () => (
  <section id="about" className="py-24 px-6 lg:px-16 bg-muted/40">
    <div className="container mx-auto max-w-4xl">
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-foreground" />
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Biography</h2>
      </div>

      <div className="space-y-4 text-foreground/80 leading-relaxed">
        <p className="text-muted-foreground italic">Bio coming soon.</p>
      </div>
    </div>
  </section>
);

export default BiographySection;
