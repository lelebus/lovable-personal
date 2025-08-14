import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import logo from "@/assets/logo_black.png";
import logoWhite from "@/assets/logo_white.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('navigation.home'), id: "home" },
    { label: t('navigation.services'), id: "services" },
    { label: t('navigation.experience'), id: "projects" },
    { label: t('navigation.meetYourGuide'), id: "about" },
    { label: t('navigation.contact'), id: "contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card shadow-sophisticated-elegant' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center cursor-pointer transition-all duration-300 hover:scale-105"
            >
              {mounted && (
                <img 
                  src={theme === 'dark' ? logoWhite : logo} 
                  alt="Gabriele De Candido Logo" 
                  className="h-8 sm:h-12 w-auto"
                />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 sophisticated-text-shadow relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 tech-gradient transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Theme Toggle */}
              <ThemeToggle />
              
              <Button 
                onClick={() => window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank')}
                className="sophisticated-button font-semibold px-4 sm:px-6 py-2 rounded-full text-sm lg:text-base"
              >
                {t('navigation.bookACall')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-muted/20 group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Fullscreen Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Navigation Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full sm:w-[400px] bg-gradient-to-br from-background via-background to-muted/50 backdrop-blur-xl border-l border-border/20 shadow-2xl transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="mt-16">
          </div>

          {/* Navigation Items */}
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group w-full text-center p-4 rounded-xl hover:bg-muted/30 transition-all duration-300 hover:scale-[1.02] border border-transparent hover:border-border/20 ${
                  isMobileMenuOpen ? 'animate-slide-in-right-mobile' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <span className="text-2xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <div className="h-0.5 w-0 bg-gradient-to-r from-accent to-accent/60 transition-all duration-300 group-hover:w-full" />
                </div>
              </button>
            ))}
          </div>

          {/* Controls Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border/20 bg-gradient-to-t from-background via-background to-transparent">
            <div className="space-y-4">
              {/* Language & Theme Controls */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/20 border border-border/20">
                <div className="flex items-center gap-3">
                  <LanguageSwitcher />
                </div>
                  <ThemeToggle />
              </div>
              
              {/* CTA Button */}
              <Button 
                onClick={() => {
                  window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full sophisticated-button font-semibold py-4 text-base rounded-xl shadow-sophisticated-premium hover:shadow-tech-glow transition-all duration-500 hover:scale-[1.02]"
              >
                {t('navigation.bookACall')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};