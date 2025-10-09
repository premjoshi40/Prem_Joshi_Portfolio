import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Award } from "lucide-react";
import premPhoto from "@/assets/prem-photo-new.jpg";

const Hero = () => {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "5", label: "Products Launched" },
    { value: "15+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Advanced Animated Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse-scale" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-tr from-primary-glow/20 to-transparent rounded-full blur-2xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 rounded-full border border-primary/30 backdrop-blur-sm shadow-lg animate-shimmer bg-[length:200%_100%]">
              <Sparkles size={18} className="text-primary animate-bounce-subtle" />
              <span className="text-sm font-semibold text-primary tracking-wide">PRODUCT MANAGER</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hello, I'm
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    Prem Joshi
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-glow/20 blur-xl opacity-50 animate-glow-pulse" />
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a Product Manager and Strategist based in <span className="font-semibold text-foreground">New Jersey</span>. I specialize in building 
                innovative products that solve real user problems through data-driven decision making 
                and cross-functional collaboration.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="rounded-full text-base px-10 py-6 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <Zap size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Enhanced Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative text-center lg:text-left animate-scale-in cursor-default"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative transform transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                    <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-foreground via-primary to-primary-glow bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                    {/* Decorative underline */}
                    <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Smaller Photo with Advanced Effects */}
          <div className="relative animate-fade-in-right lg:justify-self-end">
            {/* Multiple layered glow effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-glow/40 rounded-[2.5rem] blur-3xl animate-glow-pulse opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tl from-primary-glow/30 to-primary/30 rounded-[2.5rem] blur-2xl animate-pulse-scale" style={{ animationDelay: "1s" }} />
            
            {/* Photo Container - Made Smaller */}
            <div className="relative w-full max-w-[380px] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/25 via-primary/15 to-transparent p-1 shadow-2xl hover:scale-105 transition-all duration-700 group">
              <div className="relative rounded-[2.4rem] overflow-hidden bg-card">
                <img
                  src={premPhoto}
                  alt="Prem Joshi - Product Manager"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Advanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Enhanced Floating Badges with better animations */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-card to-card/80 border-2 border-primary/40 rounded-2xl px-5 py-3 shadow-2xl animate-float backdrop-blur-md hover:scale-110 transition-transform cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                </div>
                <span className="text-xs font-bold text-foreground">Available</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-card to-card/80 border-2 border-primary/40 rounded-2xl px-5 py-3 shadow-2xl animate-float-slow backdrop-blur-md hover:scale-110 transition-transform cursor-pointer">
              <div className="flex items-center gap-2">
                <Award size={16} className="text-primary animate-bounce-subtle" />
                <span className="text-xs font-bold text-foreground">Top Rated</span>
              </div>
            </div>

            {/* Advanced Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 border-4 border-primary/30 rounded-full animate-spin-slow" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-primary-glow/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
            
            {/* Floating particles */}
            <div className="absolute top-1/4 -left-8 w-3 h-3 bg-primary rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-3/4 -right-8 w-2 h-2 bg-primary-glow rounded-full animate-float-slow opacity-40" style={{ animationDelay: "1.5s" }} />
            <div className="absolute top-1/2 -right-6 w-2 h-2 bg-primary rounded-full animate-bounce-subtle opacity-50" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
