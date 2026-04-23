import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "premjoshi1504@gmail.com",
    href: "mailto:premjoshi1504@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/premrjoshi",
    href: "https://www.linkedin.com/in/premrjoshi",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/premjoshi40",
    href: "https://github.com/premjoshi40",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-6 lg:px-16 bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <Reveal className="text-center mb-12">
        <p className="inline-block text-sm font-semibold tracking-wide uppercase mb-3 bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent">
          Let's build something
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Get in touch
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Open to product roles, collaborations, and conversations about AI, cloud, and great
          product craft.
        </p>
      </Reveal>

      <Reveal animation="scale-in">
        <div className="bg-card border border-border rounded-2xl divide-y divide-border overflow-hidden shadow-sm">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--orange)/0.12)] text-[hsl(var(--orange))] flex items-center justify-center flex-shrink-0 group-hover:bg-[image:var(--gradient-sunset)] group-hover:text-white transition-all duration-300">
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-sm font-semibold text-foreground truncate">{value}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-[hsl(var(--orange))] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0"
              />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactSection;
