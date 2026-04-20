import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "premjoshi40@gmail.com",
    href: "mailto:premjoshi40@gmail.com",
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
      <div className="text-center mb-14">
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
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {channels.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group relative bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] hover:border-primary/40 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-[image:var(--gradient-sunset)] text-white flex items-center justify-center shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              />
            </div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1.5">
              {label}
            </p>
            <p className="text-base font-semibold text-foreground break-all">{value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
