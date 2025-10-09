import { Figma, Palette, Layout, Zap, Layers, Sparkles } from "lucide-react";

const DesignerTaskBar = () => {
  const tools = [
    { name: "Figma", icon: Figma, color: "text-purple-500" },
    { name: "Design Systems", icon: Palette, color: "text-pink-500" },
    { name: "Prototyping", icon: Layout, color: "text-blue-500" },
    { name: "User Research", icon: Zap, color: "text-yellow-500" },
    { name: "Wireframing", icon: Layers, color: "text-green-500" },
    { name: "AI Tools", icon: Sparkles, color: "text-indigo-500" },
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Design Tools & Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Expertise in modern design and product management tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center gap-3">
                <div className={`${tool.color} group-hover:scale-110 transition-transform`}>
                  <tool.icon size={32} />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignerTaskBar;
