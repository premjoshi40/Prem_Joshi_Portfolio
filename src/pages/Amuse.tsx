import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Amuse = () => {
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
              <span className="text-6xl">🎨</span>
              <h1 className="text-5xl font-bold text-foreground">Amuse</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Interactive product prototype with engaging user experiences
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://marvelapp.com/prototype/5fhb9ah/screen/83226649"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                View Marvel Prototype
                <ExternalLink size={18} />
              </a>
              <a
                href="https://premjoshi40.github.io/Amuse/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                View Live Demo
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Product Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Product Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Amuse is an innovative entertainment platform designed to deliver engaging and interactive 
              experiences to users. The product focuses on creating memorable moments through carefully 
              crafted user interactions, smooth animations, and intuitive design patterns that delight users 
              at every touchpoint.
            </p>
          </section>

          {/* Product Requirements */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Product Requirements</h2>
            
            <div className="space-y-8">
              {/* Functional Requirements */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Functional Requirements</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  {[
                    "Interactive Prototype: High-fidelity clickable prototype with realistic interactions",
                    "User Onboarding: Smooth onboarding flow introducing key features",
                    "Content Discovery: Intuitive navigation and content browsing experience",
                    "Engagement Features: Interactive elements to maximize user engagement",
                    "Cross-Platform: Consistent experience across iOS, Android, and web platforms"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Non-Functional Requirements */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Non-Functional Requirements</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  {[
                    "Performance: Load times under 2 seconds for optimal user experience",
                    "Usability: Intuitive interface with minimal learning curve",
                    "Accessibility: WCAG 2.1 AA compliant for inclusive design",
                    "Animations: Smooth 60fps animations for polished feel",
                    "Responsive Design: Adaptive layouts for all screen sizes"
                  ].map((req, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80">{req}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Stories */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground/90">Key User Stories</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  {[
                    "As a user, I want to quickly understand the app's value so that I can decide if it's right for me",
                    "As a user, I want smooth and delightful interactions so that I enjoy using the app",
                    "As a user, I want to easily discover new content so that I remain engaged",
                    "As a user, I want the app to work seamlessly on my device so that I have a frustration-free experience",
                    "As a user, I want personalized recommendations so that I find content relevant to my interests"
                  ].map((story, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-foreground/80 italic">{story}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Design Principles */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Design Principles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "User-Centric", desc: "Every decision prioritizes user needs and experience" },
                { title: "Delightful", desc: "Micro-interactions and animations that spark joy" },
                { title: "Intuitive", desc: "Natural flows that feel familiar and easy to navigate" },
                { title: "Accessible", desc: "Inclusive design for users of all abilities" }
              ].map((principle) => (
                <div key={principle.title} className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-semibold text-foreground text-lg mb-2">{principle.title}</h4>
                  <p className="text-foreground/70">{principle.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Stack */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "TypeScript", "Framer Motion", "Marvel Prototyping", "Figma", "UI/UX Design"].map((tech) => (
                <div key={tech} className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center font-semibold text-foreground">
                  {tech}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Amuse;
