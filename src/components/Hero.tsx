import premPhoto from "@/assets/prem-sunset-photo.jpg";

const Hero = () => {

  return (
    <section id="home" className="min-h-screen pt-24 pb-8 px-6 lg:px-12 bg-background">
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
                
                <div className="pt-4">
                  <button className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 flex items-center gap-2">
                    <span>More About Me</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
