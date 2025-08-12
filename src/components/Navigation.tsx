import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-card shadow-luxury-elegant' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-serif font-bold cursor-pointer luxury-text-shadow transition-all duration-300 hover:scale-105"
          >
            <span className="text-foreground">Gabriele</span>
            <span className="luxury-gradient bg-clip-text text-transparent ml-1">De Candido</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 hover:scale-105 luxury-text-shadow relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 luxury-gradient transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="luxury-button text-white font-semibold px-6 py-2 rounded-full"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors rounded-lg hover:bg-muted/20"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t shadow-luxury-elegant">
            <div className="py-8 px-6 space-y-6">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-foreground font-medium text-lg transition-all duration-300 hover:scale-105 hover:text-accent luxury-text-shadow"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <ThemeToggle />
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="luxury-button text-white font-semibold px-6 py-2 rounded-full"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};