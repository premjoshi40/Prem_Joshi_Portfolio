import premAvatar from "@/assets/avatar-pixar-blazer.png";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-0 px-6 lg:px-16 overflow-hidden">
      {/* Vibrant background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40" />
      <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(var(--orange)/0.18)] blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-32 w-[26rem] h-[26rem] rounded-full bg-[hsl(var(--violet)/0.18)] blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-[hsl(var(--magenta)/0.12)] blur-3xl -z-10" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-7 order-2 lg:order-1">
            <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Hello, my name is
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Prem
              <br />
              <span className="bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent">
                Joshi
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80">
              Product Manager — Cloud / AI-ML
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-[image:var(--gradient-sunset)] text-white font-semibold px-6 py-3.5 rounded-xl shadow-[var(--shadow-glow)] hover:shadow-[0_20px_50px_-15px_hsl(var(--magenta)/0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right: 3D Avatar */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Layered depth blobs with sunset accents */}
              <div className="absolute inset-0 rounded-[3rem] bg-[image:var(--gradient-sunset)] rotate-3 shadow-[var(--shadow-glow)]" />
              <div className="absolute inset-0 rounded-[3rem] bg-card -rotate-2 border border-border shadow-[var(--shadow-soft)]" />
              {/* Avatar */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-gradient-to-b from-[hsl(var(--orange)/0.08)] via-[hsl(var(--magenta)/0.06)] to-background flex items-end justify-center">
                <img
                  src={premAvatar}
                  alt="Prem Joshi - 3D illustrated avatar"
                  className="w-full h-full object-contain object-bottom"
                  width={1024}
                  height={1024}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[image:var(--gradient-warm)] text-white px-4 py-2.5 rounded-xl shadow-[var(--shadow-glow)] flex items-center gap-2 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
