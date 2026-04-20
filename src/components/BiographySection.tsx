import premAvatar from "@/assets/avatar-option-3.png";
import { Mail, MapPin } from "lucide-react";

const BiographySection = () => (
  <section id="about" className="py-24 px-6 lg:px-16 bg-muted/40">
    <div className="container mx-auto max-w-6xl">
      <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-start">
        {/* Left: circular photo + name */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-foreground/10 blur-2xl scale-110" aria-hidden />
            <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-foreground shadow-[var(--shadow-glow)] bg-card">
              <img
                src={premAvatar}
                alt="Prem Joshi"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
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
              I'm a Product Manager and technologist with 6+ years of experience launching and
              scaling AI-driven, B2B SaaS, and cloud platform products. My foundation in
              electronics engineering and software development lets me partner deeply with
              engineering teams while staying focused on user and business outcomes.
            </p>
            <p>
              Currently leading product strategy for <strong className="text-foreground">Risk GPT</strong>{" "}
              at EY, an AI-powered risk intelligence platform automating cybersecurity audit
              workflows globally — delivering measurable efficiency, cost, and uptime wins at
              enterprise scale.
            </p>
          </div>

          <ul className="mt-6 space-y-2 text-foreground/80">
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
              Building <strong className="text-foreground ml-1">Auralis</strong> & <strong className="text-foreground">AMUSE</strong> — AI + AR/VR products
            </li>
            <li className="flex gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
              Lifelong soccer player, semi-pro, and Manchester United fan
            </li>
          </ul>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:premjoshi40@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-foreground transition-colors"
            >
              <span className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-foreground break-all">premjoshi40@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
              <span className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-foreground">India · Open to remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BiographySection;
