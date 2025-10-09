import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "150+", label: "Products Launched" },
    { value: "45", label: "Happy Clients" },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-block">
              <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                PRODUCT MANAGER
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hello, I'm
                <br />
                <span className="text-primary">Alex Morgan</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm a Product Manager and Strategist based in San Francisco. I specialize in building 
                innovative products that solve real user problems through data-driven decision making 
                and cross-functional collaboration.
              </p>
            </div>

            <Button variant="hero" size="lg" className="rounded-full text-base px-8">
              Let's Connect!
            </Button>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 max-w-xl">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center lg:text-left animate-scale-in"
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

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="rounded-3xl overflow-hidden bg-card">
                <img
                  src={profilePhoto}
                  alt="Product Manager Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
