import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-20 py-16 px-6 lg:px-12 border-t border-border bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="inline-block text-sm font-semibold tracking-wide uppercase mb-3 bg-[image:var(--gradient-sunset)] bg-clip-text text-transparent">
            Let's build something
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Open to product roles, collaborations, and conversations about AI, cloud, and great
            product craft.
          </p>
        </div>

        {/* Contact tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Email</h3>
            <a
              href="mailto:premjoshi1504@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              premjoshi1504@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">GitHub</h3>
            <a
              href="https://github.com/premjoshi40"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              github.com/premjoshi40
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/premrjoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} />
              www.linkedin.com/in/premrjoshi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
