import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "Contact Me",
      description: "📧 Email: premjoshi40@gmail.com",
      duration: 5000,
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h2 className="text-base font-semibold text-foreground">Prem Joshi</h2>
              <p className="text-xs text-muted-foreground">Product Manager</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">

            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleContactClick}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
