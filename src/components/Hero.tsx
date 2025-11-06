import premPhoto from "@/assets/prem-sunset-photo.jpg";
import { Package, Award } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: "Products", color: "bg-[#F7941D] hover:bg-[#E8850E]", icon: Package, onClick: () => scrollToSection('products') },
    { label: "Certification", color: "bg-[#C4D82E] hover:bg-[#B5C929]", icon: Award, onClick: () => scrollToSection('certifications') },
  ];

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-6 lg:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start pt-12">
          {/* Left: Profile Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                <img
                  src={premPhoto}
                  alt="Prem Joshi - Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-foreground/80 mb-2">Hello</h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">
                I'm Prem Joshi
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  A Bit About Me
                </h2>
                
                <p className="text-base text-foreground/80 leading-relaxed max-w-xl">
                  I'm a Product Manager based in New Jersey with 6+ years of experience. 
                  I specialize in building innovative products that solve real user problems 
                  through data-driven decision making and cross-functional collaboration. 
                  I've successfully launched 5 products and worked with over 15 happy clients.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                
                return (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className={`${link.color} text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 animate-fade-in flex items-center gap-2 cursor-pointer`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon size={20} />
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
