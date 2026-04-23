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
    <div className="container mx-auto max-w-5xl">
      <Reveal className="text-center mb-14">
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

      <div className="grid md:grid-cols-3 gap-5">
        {channels.map(({ icon: Icon, label, value, href }, idx) => (
          <Reveal key={label} animation="scale-in" delay={idx * 120}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group relative block bg-card border border-border rounded-2xl p-7 hover:-translate-y-2 hover:shadow-[0_25px_60px_-20px_hsl(var(--orange)/0.5)] hover:border-[hsl(var(--orange)/0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--orange)/0.08)] to-transparent" />
              <div className="flex items-start justify-between mb-6 relative">
                <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-sunset)] text-white flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Icon size={20} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-[hsl(var(--orange))] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5 relative">
                {label}
              </p>
              <p className="text-base font-semibold text-foreground break-all relative">{value}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
