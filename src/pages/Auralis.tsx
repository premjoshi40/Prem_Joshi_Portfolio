import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Auralis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-6xl">🎵</span>
              <h1 className="text-5xl font-bold text-foreground">Auralis</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Next-Generation Audio Experience Platform
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://premjoshi40.github.io/Auralis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Live Demo
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Auralis is an innovative audio experience platform that transforms how users interact with sound and music. Built with cutting-edge technology, it delivers immersive audio experiences that push the boundaries of digital sound design.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Immersive Audio", value: "High-fidelity sound processing for premium experiences" },
                { label: "Interactive Design", value: "User-friendly interface with intuitive controls" },
                { label: "Real-time Processing", value: "Instant audio manipulation and effects" },
                { label: "Cross-Platform", value: "Seamless experience across all devices" }
              ].map((feature) => (
                <div key={feature.label} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{feature.label}</h4>
                  <p className="text-foreground/70">{feature.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Technology Stack</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid md:grid-cols-3 gap-4">
                {["Web Audio API", "React", "TypeScript", "Tailwind CSS", "Modern ES6+", "Responsive Design"].map((tech) => (
                  <div key={tech} className="text-center p-3 bg-background rounded-md">
                    <p className="text-foreground/80 font-medium">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Auralis;
