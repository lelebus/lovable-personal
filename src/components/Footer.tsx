import { Linkedin, Mail, Github, Code } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo_black.png";
import logoWhite from "@/assets/logo_white.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
            <img 
                src={theme === 'dark' ? logo : logoWhite} 
                alt="Gabriele De Candido Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-serif font-bold">Gabriele De Candido.</h3>
            </div>
            <p className="text-primary-foreground/70">
              Software Architect & Entrepreneur
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@decandido.dev"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/de-candido"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
          <p className="text-primary-foreground/50 text-xs mt-2">
            {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};