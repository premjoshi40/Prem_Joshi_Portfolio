import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const FridgeRoaster = () => {
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
              <span className="text-6xl">🍔</span>
              <h1 className="text-5xl font-bold text-foreground">Fridge Roaster</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              An innovative kitchen companion that brings humor to your fridge
            </p>
            <a
              href="https://premjoshi40.github.io/Fridge_Roast/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              View Live Demo
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Product Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Product Overview</h2>
            <p className="text-foreground/80 leading-relaxed">
              Fridge Roaster is a fun, AI-powered application that analyzes the contents of your refrigerator 
              and delivers witty, humorous commentary about your food choices. It's designed to bring laughter 
              to your daily kitchen routine while subtly encouraging better food habits.
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
                    "Image Upload: Users can upload photos of their fridge contents",
                    "AI Analysis: Computer vision to identify food items and their conditions",
                    "Humorous Commentary: Generate witty, personalized roasts about food choices",
                    "Social Sharing: Easy sharing of roasts on social media platforms",
                    "Responsive Design: Seamless experience across mobile and desktop devices"
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
                    "Performance: Image analysis completed within 3-5 seconds",
                    "Usability: Intuitive interface requiring no learning curve",
                    "Reliability: 99.5% uptime with robust error handling",
                    "Security: Secure image processing with privacy protection",
                    "Scalability: Support for concurrent users without performance degradation"
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
                    "As a user, I want to upload a photo of my fridge so that I can receive humorous feedback about my food choices",
                    "As a user, I want to share my roast on social media so that I can entertain my friends",
                    "As a user, I want the app to work on my phone so that I can use it while standing in front of my fridge",
                    "As a user, I want quick processing so that I don't lose interest while waiting"
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

          {/* Technical Stack */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["React", "AI/ML", "Computer Vision", "Responsive Design", "REST API", "Cloud Storage"].map((tech) => (
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

export default FridgeRoaster;
