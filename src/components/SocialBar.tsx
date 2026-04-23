import { Mail, Linkedin, Github } from "lucide-react";

const socials = [
  { href: "mailto:premjoshi1504@gmail.com", icon: Mail, label: "Email" },
  { href: "https://www.linkedin.com/in/premrjoshi", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/premjoshi40", icon: Github, label: "GitHub" },
];

const SocialBar = () => (
  <div className="hidden lg:flex fixed top-6 right-8 z-40 items-center gap-3">
    {socials.map(({ href, icon: Icon, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        aria-label={label}
        className="w-10 h-10 rounded-lg flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-muted transition-all hover:-translate-y-0.5"
      >
        <Icon size={18} strokeWidth={2} />
      </a>
    ))}
  </div>
);

export default SocialBar;
