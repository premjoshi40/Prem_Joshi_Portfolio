import premAvatar from "@/assets/prem-3d-avatar.png";
import { Download, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 lg:pt-0 px-6 lg:px-16 overflow-hidden">
      {/* Subtle background depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-foreground/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-foreground/5 blur-3xl -z-10" />

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
              Joshi
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground/80">
              Product Manager — Cloud / AI-ML
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Product Manager and builder with 6+ years of experience launching and scaling
              AI-driven, B2B SaaS, and cloud platform products. I thrive at the intersection
              of strategy and execution — taking ideas from concept to launch and beyond.
            </p>

            <ul className="space-y-2 text-sm text-foreground/80">
              {[
                "AWS Certified — ML Engineer, Solutions Architect, Cloud Practitioner",
                "Professional Scrum Master™ I (PSM I)",
                "Led Risk GPT @ EY — 70% efficiency gain, $8.5M+ profit uplift",
                "Building Auralis & AMUSE — AI + AR/VR products",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group bg-foreground text-background font-semibold px-6 py-3.5 rounded-xl shadow-[0_10px_30px_-10px_hsl(var(--foreground)/0.5)] hover:shadow-[0_15px_35px_-10px_hsl(var(--foreground)/0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
              </button>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="group border border-border bg-card text-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-muted hover:-translate-y-0.5 transition-all flex items-center gap-2">
                    More About Me
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold">More About Me</DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[70vh] pr-4">
                    <div className="space-y-8 text-foreground/90">
                      <section className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary">
                          🧭 More About Me
                        </h3>
                        <div className="space-y-4 text-base leading-relaxed bg-muted/40 p-6 rounded-lg">
                          <p>I'm Prem Joshi, a Product Manager and technologist passionate about building intelligent, scalable products that simplify complexity and deliver measurable impact. With over 6 years of experience spanning software engineering, consulting, and product management, I specialize in driving end-to-end product lifecycles — from discovery to launch to scale.</p>
                          <p>My foundation in electronics and telecommunications engineering sharpened my problem-solving mindset and love for systems thinking. I began my career as a software developer, building enterprise-grade applications using Java, Python, and cloud-native architectures - experience that now enables me to collaborate deeply with engineering teams while keeping a strong focus on user and business outcomes.</p>
                          <p>At EY (Ernst & Young), I lead product strategy for Risk GPT, an AI-powered risk intelligence platform that automated cybersecurity audit workflows across global regions. The product delivered a 70% efficiency gain, $8.5M+ annual profit uplift, and 99.99% uptime - proving the business value of automation and intelligent design at enterprise scale.</p>
                          <p>Outside of EY, I build products that explore how technology can enhance daily life - from Auralis, an AI chatbot that revolutionizes document retrieval using natural language, to AMUSE, an AR/VR museum experience platform that transforms how visitors interact with artifacts through immersive storytelling.</p>
                          <p>I'm driven by a simple belief: great products are where technology, empathy, and data converge to create real impact.</p>
                        </div>
                      </section>

                      <section className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-primary">
                          ⚽ Beyond Work
                        </h3>
                        <div className="space-y-4 text-base leading-relaxed bg-muted/40 p-6 rounded-lg">
                          <p className="text-foreground/80">Outside of product and technology, I'm deeply passionate about soccer - both on and off the field. I've played competitively for over a decade as a semi-professional player and currently contribute as a part-time soccer analyst, focusing on match breakdowns, team dynamics, and performance insights.</p>
                          <p className="text-foreground/80">As a lifelong Manchester United fan, the game has taught me the value of teamwork, adaptability, and strategic decision-making - qualities that translate directly into how I lead teams and build products.</p>
                        </div>
                      </section>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Right: 3D Avatar */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[480px] aspect-square">
              {/* Layered depth blobs */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-muted to-muted/40 rotate-3 shadow-[0_30px_60px_-20px_hsl(var(--foreground)/0.25)]" />
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tl from-card to-background -rotate-2 border border-border shadow-[0_20px_50px_-15px_hsl(var(--foreground)/0.2)]" />
              {/* Avatar */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-gradient-to-b from-muted/30 to-background flex items-end justify-center">
                <img
                  src={premAvatar}
                  alt="Prem Joshi - 3D illustrated avatar"
                  className="w-full h-full object-contain object-bottom"
                  width={1024}
                  height={1024}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-foreground text-background px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
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
