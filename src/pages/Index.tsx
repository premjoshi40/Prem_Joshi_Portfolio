import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Eye-catching banner */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-center gap-2 text-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-foreground/80 font-medium">
              Available for new opportunities and collaborations
            </span>
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>
      
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
