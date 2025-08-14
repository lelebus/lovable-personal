import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero.jpg";

export const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Sophisticated gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero-light)' }}
      />
      <div
        className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500"
        style={{ background: 'var(--gradient-hero-dark)' }}
      />

      {/* Subtle tech overlay */}
      <div className="absolute inset-0 tech-gradient opacity-15" />

      {/* Sophisticated pattern overlay */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Sophisticated container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Sophisticated Content */}
          <div className="space-y-8 lg:space-y-12 animate-fade-in text-left">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[0.9] lg:leading-[0.85] sophisticated-text-shadow">
                <span className="block tech-gradient bg-clip-text text-transparent bg-300% animate-gradient-shift leading-tight">
                  {t('hero.title1')}
                </span>
                <span className="block text-foreground">
                  {t('hero.title2')}
                </span>
              </h1>
              <div className="relative py-6 lg:py-8 sophisticated-card rounded-2xl lg:rounded-3xl">
                <p 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: t('hero.description1') }}
                />
                <p 
                  className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: t('hero.description2') }}
                />
                <div className="absolute -inset-1 tech-gradient rounded-2xl lg:rounded-3xl blur-xl opacity-20 -z-10" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="sophisticated-button font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg rounded-full shadow-sophisticated-premium hover:shadow-tech-glow transition-all duration-500"
                onClick={() => scrollToSection('services')}
              >
                <span className="relative z-10">{t('hero.viewServices')}</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="glass-card border-border dark:hover:bg-glass-bg-dark/90 hover:border-accent text-foreground font-semibold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-base sm:text-lg rounded-full backdrop-blur-premium transition-all duration-500 hover:scale-105 hover:shadow-sophisticated-elegant"
              >
                {t('hero.viewProjects')}
              </Button>
            </div>

            {/* Sophisticated stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              <div className="sophisticated-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-sophisticated-premium">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 lg:mb-3 group-hover:text-accent transition-colors duration-500 sophisticated-text-shadow">7+</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('hero.stats.experience')}</div>
              </div>
              <div className="sophisticated-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-sophisticated-premium">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 lg:mb-3 group-hover:text-accent transition-colors duration-500 sophisticated-text-shadow">50+</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('hero.stats.projects')}</div>
              </div>
              <div className="sophisticated-card p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-sophisticated-premium">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 lg:mb-3 group-hover:text-accent transition-colors duration-500 sophisticated-text-shadow">15+</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t('hero.stats.technologies')}</div>
              </div>
            </div>
          </div>

          {/* Sophisticated Image */}
          <div className="relative animate-slide-in-right order-first lg:order-last">
            {/* Sophisticated background effects */}
            <div className="absolute inset-0 tech-gradient rounded-2xl lg:rounded-[3rem] blur-3xl scale-110 opacity-25" />
            <div className="absolute -inset-4 lg:-inset-8 tech-gradient rounded-3xl lg:rounded-[4rem] blur-[100px] opacity-20 animate-pulse" />

            <div className="relative sophisticated-card rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-sophisticated-premium group">
              <img
                src={heroImage}
                alt="Gabriele De Candido - Tech Enthusiast & Founder"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Sophisticated gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1a1a]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-tech/10" />

              {/* Sophisticated shimmer effect */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Sophisticated floating card */}
            <div className="absolute -bottom-6 lg:-bottom-10 -left-3 lg:-left-10 sophisticated-card p-6 lg:p-10 rounded-2xl lg:rounded-3xl shadow-sophisticated-premium backdrop-blur-premium animate-float border-2 border-accent/20">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="relative">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 tech-gradient rounded-full animate-glow-pulse shadow-accent-glow" />
                  <div className="absolute inset-0 w-4 h-4 lg:w-5 lg:h-5 tech-gradient rounded-full animate-ping opacity-30" />
                  <div className="absolute -inset-1.5 lg:-inset-2 w-7 h-7 lg:w-9 lg:h-9 tech-gradient rounded-full blur-lg opacity-20" />
                </div>
                <div>
                  <div className="font-bold text-white text-base lg:text-xl mb-1 lg:mb-2 sophisticated-text-shadow">{t('hero.floatingCard.title')}</div>
                  <div className="text-white/70 font-medium text-sm lg:text-base">{t('hero.floatingCard.subtitle')}</div>
                </div>
              </div>
            </div>

            {/* Sophisticated decorative elements */}
            <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 w-24 lg:w-32 h-24 lg:h-32 tech-gradient rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute -bottom-12 lg:-bottom-16 -right-12 lg:-right-16 w-32 lg:w-40 h-32 lg:h-40 tech-gradient rounded-full blur-[100px] opacity-15 animate-float" style={{ animationDelay: '4s' }} />
            <div className="absolute top-1/2 -left-6 lg:-left-8 w-20 lg:w-24 h-20 lg:h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};