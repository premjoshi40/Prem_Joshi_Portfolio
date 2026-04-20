import premPhoto from "@/assets/prem-sunset-photo.jpg";

const BiographySection = () => (
  <section id="about" className="py-24 px-6 lg:px-16 bg-muted/40">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: original photo */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-foreground/10 blur-2xl scale-110" aria-hidden />
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-foreground shadow-[var(--shadow-glow)] bg-card">
              <img
                src={premPhoto}
                alt="Prem Joshi"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-6 text-sm font-medium text-muted-foreground">Product Manager — Cloud / AI-ML</p>
          <h3 className="text-2xl lg:text-3xl font-extrabold mt-1">Prem Joshi</h3>
        </div>

        {/* Right: biography text */}
        <div>
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-9 h-9 rounded-full bg-foreground/10 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-foreground" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Biography</h2>
          </div>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Go-getter, customer-first Product Manager with 6+ years of experience leveraging an
              engineering foundation to build and scale cloud, SaaS, and AI/ML products from
              conception to launch through cross-functional collaboration while translating complex
              problems into actionable decisions that deliver customer value. Bringing a
              high-performance mindset as a professional soccer player.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BiographySection;
