import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DesignerTaskBar from "@/components/DesignerTaskBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DesignerTaskBar />
    </div>
  );
};

export default Index;
