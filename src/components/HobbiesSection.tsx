import nycFootyLogo from "@/assets/nycfooty-logo.webp";
import Reveal from "@/components/Reveal";
import RevealHeading from "@/components/RevealHeading";

type Hobby = {
  title: string;
  org: string;
  logo: string;
  description: string;
};

const hobbies: Hobby[] = [
  {
    title: "Football Player",
    org: "NYC Footy",
    logo: nycFootyLogo,
    description:
      "Active player at NYC Footy — the nation's largest recreational soccer league.",
  },
];

const HobbiesSection = () => (
  <section id="hobbies" className="py-24 px-6 lg:px-16 bg-background">
    <div className="container mx-auto max-w-5xl">
      <RevealHeading title="Hobbies" />

      <div className="space-y-4">
        {hobbies.map((hobby, idx) => (
          <Reveal key={hobby.title} animation="fade-in-left" delay={idx * 100}>
            <div className="group flex items-start gap-5 p-5 rounded-2xl bg-card border border-border hover:border-[hsl(var(--orange)/0.6)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_hsl(var(--orange)/0.4)] transition-all duration-500">
              <div className="w-20 h-20 flex-shrink-0 rounded-xl bg-muted/50 p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={hobby.logo}
                  alt={`${hobby.org} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base lg:text-lg font-bold text-foreground leading-snug group-hover:text-[hsl(var(--orange))] transition-colors">
                  {hobby.title} <span className="text-muted-foreground font-normal">@ {hobby.org}</span>
                </h3>
                <p className="text-sm text-foreground/80 mt-2 leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HobbiesSection;
