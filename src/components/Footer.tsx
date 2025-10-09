import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:prem.joshi@example.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Mail size={16} />
              prem.joshi@example.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">GitHub</h3>
            <a 
              href="https://github.com/premjoshi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              github.com/premjoshi
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">LinkedIn</h3>
            <a 
              href="https://linkedin.com/in/premjoshi" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} />
              linkedin.com/in/premjoshi
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Prem Joshi. Built with passion in New Jersey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
