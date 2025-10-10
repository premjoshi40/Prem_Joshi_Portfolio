import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

interface ProductsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductsModal = ({ open, onOpenChange }: ProductsModalProps) => {
  const products = [
    {
      name: "Fridge Roaster",
      description: "An innovative kitchen companion",
      url: "https://premjoshi40.github.io/Fridge_Roast/",
    },
    {
      name: "Amuse",
      description: "Interactive product prototype",
      url: "https://marvelapp.com/prototype/5fhb9ah/screen/83226649",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-6">
            My Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-6">
          {products.map((product, index) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in flex items-center justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductsModal;
