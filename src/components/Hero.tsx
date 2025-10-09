import { Button } from "@/components/ui/button";

const Hero = () => {
  const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "5", label: "Products Launched" },
    { value: "15+", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in text-center">
            <div className="inline-block">
              <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                PRODUCT MANAGER
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hello, I'm
                <br />
                <span className="text-primary">Prem Joshi</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I'm a Product Manager and Strategist based in San Francisco. I specialize in building 
                innovative products that solve real user problems through data-driven decision making 
                and cross-functional collaboration.
              </p>
            </div>

            <Button variant="hero" size="lg" className="rounded-full text-base px-8">
              Resume
            </Button>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
