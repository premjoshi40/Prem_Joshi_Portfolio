import premPhoto from "@/assets/prem-sunset-photo.jpg";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const BiographySection = () => (
  <section id="about" className="py-24 px-6 lg:px-16 bg-muted/40">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: original photo */}
        <Reveal animation="fade-in-left" className="flex flex-col items-center text-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-[image:var(--gradient-sunset)] opacity-30 blur-3xl scale-110 animate-pulse-scale" aria-hidden />
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-foreground shadow-[var(--shadow-glow)] bg-card transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
              <img
                src={premPhoto}
                alt="Prem Joshi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
          <p className="mt-6 text-sm font-medium text-muted-foreground">Product Manager — Cloud / AI-ML</p>
          <h3 className="text-2xl lg:text-3xl font-extrabold mt-1">Prem Joshi</h3>
        </Reveal>

        {/* Right: biography text */}
        <Reveal animation="fade-in-right" delay={150}>
          <RevealHeading title="Biography" />

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Go-getter, customer-first Product Manager with 6+ years of experience leveraging an
              engineering foundation to build and scale cloud, SaaS, and AI/ML products from
              conception to launch through cross-functional collaboration while translating complex
              problems into actionable decisions that deliver customer value. Bringing a
              high-performance mindset as a professional soccer player.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default BiographySection;
