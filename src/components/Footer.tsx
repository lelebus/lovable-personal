import { Linkedin, Mail, Github, Code } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <Code className="w-6 h-6" />
              <h3 className="text-xl font-serif font-bold">Software Architect</h3>
            </div>
            <p className="text-primary-foreground/70">
              Enterprise Systems & Technical Leadership
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:architect@example.com"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/software-architect"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/software-architect"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Software Architect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};