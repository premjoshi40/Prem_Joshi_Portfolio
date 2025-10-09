import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import premPhoto from "@/assets/prem-photo.jpg";

const Hero = () => {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "5", label: "Products Launched" },
    { value: "15+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20">
              <Sparkles size={16} className="text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">PRODUCT MANAGER</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hello, I'm
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                  Prem Joshi
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a Product Manager and Strategist based in San Francisco. I specialize in building 
                innovative products that solve real user problems through data-driven decision making 
                and cross-functional collaboration.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="hero" size="lg" className="rounded-full text-base px-8 group">
                Resume
                <Sparkles size={16} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group text-center lg:text-left animate-scale-in hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Photo with Dynamic Effects */}
          <div className="relative animate-fade-in-right">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-glow/30 rounded-[3rem] blur-2xl animate-glow-pulse" />
            
            {/* Photo Container */}
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-1 shadow-2xl hover:scale-105 transition-transform duration-500">
              <div className="relative rounded-[2.8rem] overflow-hidden bg-card">
                <img
                  src={premPhoto}
                  alt="Prem Joshi - Product Manager"
                  className="w-full h-auto object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-card border-2 border-primary/30 rounded-2xl px-6 py-3 shadow-lg animate-float backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-foreground">Available for Projects</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/30 rounded-2xl px-6 py-3 shadow-lg animate-float backdrop-blur-sm" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-semibold text-foreground">Top Rated PM</span>
              </div>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-primary/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-4 border-primary/10 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
