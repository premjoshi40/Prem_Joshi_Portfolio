import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductsModal = ({ open, onOpenChange }: ProductsModalProps) => {
  const products = [
    {
      name: "Fridge Analyzer",
      description: "Smart AI Feedback for Fridge Organization — Reduce waste, maximize freshness",
      path: "/products/fridge-roaster",
      gradient: "from-orange-500 to-red-500",
      icon: "🧊",
    },
    {
      name: "Amuse",
      description: "Interactive product prototype with engaging user experiences",
      path: "/products/amuse",
      gradient: "from-purple-500 to-pink-500",
      icon: "🎨",
    },
    {
      name: "Auralis",
      description: "Next-generation audio experience platform",
      path: "/products/auralis",
      gradient: "from-blue-500 to-cyan-500",
      icon: "🎵",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-background via-background to-accent/10">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Products
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm">Explore my innovative creations</p>
        </DialogHeader>
        
        <div className="grid gap-6 mt-6">
          {products.map((product, index) => (
            <Link
              key={product.name}
              to={product.path}
              onClick={() => onOpenChange(false)}
              className="group relative overflow-hidden p-6 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.03] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon badge */}
              <div className="absolute -top-2 -right-2 w-16 h-16 flex items-center justify-center text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                {product.icon}
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="flex-1 pr-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {product.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${product.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductsModal;
