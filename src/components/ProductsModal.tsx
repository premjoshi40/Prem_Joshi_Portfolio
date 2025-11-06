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
      description: "Intelligent AI chatbot for seamless conversations and support",
      path: "/products/auralis",
      gradient: "from-blue-500 to-cyan-500",
      icon: "💬",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background border-border">
        <DialogHeader className="space-y-3 pb-6">
          <DialogTitle className="text-4xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            My Products
          </DialogTitle>
          <p className="text-center text-muted-foreground">Explore my latest projects and innovations</p>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Link
              key={product.name}
              to={product.path}
              onClick={() => onOpenChange(false)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                    {product.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground text-center mb-4 flex-grow group-hover:text-foreground/90 transition-colors duration-300">
                  {product.description}
                </p>
                
                {/* CTA Button */}
                <div className="flex items-center justify-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${product.gradient} w-0 group-hover:w-full transition-all duration-500`} />
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductsModal;
