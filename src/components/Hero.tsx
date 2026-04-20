import premPhoto from "@/assets/prem-sunset-photo.jpg";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 px-6 lg:px-16 overflow-hidden"
    >
      {/* Vibrant background depth — animated blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40" />
      <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--orange)/0.18)] blur-3xl -z-10 animate-float-slow" />
      <div
        className="absolute bottom-1/4 -left-32 w-[26rem] h-[26rem] rounded-full bg-[hsl(var(--violet)/0.18)] blur-3xl -z-10 animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-[hsl(var(--magenta)/0.12)] blur-3xl -z-10 animate-float"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="container mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Intro + Biography */}
          <div className="space-y-7 order-2 lg:order-1">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase animate-fade-in">
              Hello, my name is
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-in"
              style={{ animationDelay: "120ms" }}
            >
              Prem
              <br />
              <span
                className="bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsl(var(--orange)), hsl(var(--amber)), hsl(var(--magenta)), hsl(var(--orange)))",
                }}
              >
                Joshi
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl font-semibold text-foreground/80 animate-fade-in"
              style={{ animationDelay: "240ms" }}
            >
              Product Manager — Cloud / AI-ML
            </p>

            <Reveal animation="fade-in" delay={300}>
              <div id="about" className="pt-2">
                <RevealHeading title="Biography" />
                <p className="text-foreground/80 leading-relaxed max-w-2xl">
                  Go-getter, customer-first Product Manager with 6+ years of experience leveraging an
                  engineering foundation to build and scale cloud, SaaS, and AI/ML products from
                  conception to launch through cross-functional collaboration while translating complex
                  problems into actionable decisions that deliver customer value. Bringing a
                  high-performance mindset as a professional soccer player.
                </p>
              </div>
            </Reveal>

            <div
              className="flex flex-wrap gap-3 pt-2 animate-fade-in"
              style={{ animationDelay: "480ms" }}
            >
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[image:var(--gradient-sunset)] text-white font-semibold px-6 py-3.5 rounded-xl shadow-[var(--shadow-glow)] hover:shadow-[0_20px_50px_-15px_hsl(var(--orange)/0.7)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-2"
              >
                <Download
                  size={16}
                  className="group-hover:animate-bounce-subtle"
                />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right: Real photo */}
          <Reveal animation="fade-in-right" className="flex flex-col items-center text-center order-1 lg:order-2">
            <div className="relative group">
              <div
                className="absolute inset-0 rounded-full bg-[image:var(--gradient-sunset)] opacity-30 blur-3xl scale-110 animate-pulse-scale"
                aria-hidden
              />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-foreground shadow-[var(--shadow-glow)] bg-card transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img
                  src={premPhoto}
                  alt="Prem Joshi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[image:var(--gradient-warm)] text-white px-4 py-2 rounded-xl shadow-[var(--shadow-glow)] flex items-center gap-2 text-xs font-semibold animate-bounce-subtle whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
