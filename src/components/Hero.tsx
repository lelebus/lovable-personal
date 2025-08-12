import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Luxury gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero-light)' }}
      />
      <div 
        className="absolute inset-0 dark:opacity-100 opacity-0 transition-opacity duration-500"
        style={{ background: 'var(--gradient-hero-dark)' }}
      />
      
      {/* Animated luxury overlay */}
      <div className="absolute inset-0 luxury-gradient opacity-30" />
      
      {/* Luxury pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Premium container */}
      <div className="container mx-auto section-padding-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Luxury Content */}
          <div className="space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif font-bold leading-[0.85] luxury-text-shadow">
                <span className="block text-foreground">Tech Consultant</span>
                <span className="block luxury-gradient bg-clip-text text-transparent bg-300% animate-gradient-shift">
                  & Entrepreneur
                </span>
              </h1>
              <div className="relative p-6 luxury-card rounded-3xl">
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light">
                  I help startups and companies build 
                  <span className="font-semibold text-foreground"> innovative digital products</span>, 
                  scale their technology, and bring 
                  <span className="font-semibold text-accent"> ambitious ideas to life</span>.
                </p>
                <div className="absolute -inset-1 luxury-gradient rounded-3xl blur-xl opacity-20 -z-10" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <Button 
                size="lg" 
                className="luxury-button text-white font-semibold px-10 py-5 text-lg rounded-full shadow-luxury-premium hover:shadow-gold-glow transition-all duration-500"
                onClick={() => scrollToSection('services')}
              >
                <span className="relative z-10">Explore My Services</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="glass-card border-border hover:border-accent text-foreground hover:text-accent font-semibold px-10 py-5 text-lg rounded-full backdrop-blur-premium transition-all duration-500 hover:scale-105 hover:shadow-luxury-elegant"
              >
                View Projects
              </Button>
            </div>

            {/* Luxury stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="luxury-card p-8 rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-luxury-premium">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-500 luxury-text-shadow">10+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="luxury-card p-8 rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-luxury-premium">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-500 luxury-text-shadow">50+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="luxury-card p-8 rounded-3xl group hover:scale-105 transition-all duration-500 hover:shadow-luxury-premium">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-500 luxury-text-shadow">2</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Companies Founded</div>
              </div>
            </div>
          </div>

          {/* Luxury Image */}
          <div className="relative animate-slide-in-right">
            {/* Luxury background effects */}
            <div className="absolute inset-0 luxury-gradient rounded-[3rem] blur-3xl scale-110 opacity-30" />
            <div className="absolute -inset-8 luxury-gradient rounded-[4rem] blur-[100px] opacity-20 animate-pulse" />
            
            <div className="relative luxury-card rounded-[3rem] overflow-hidden shadow-luxury-premium group">
              <img 
                src={heroImage} 
                alt="Gabriele De Candido - Tech Consultant" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Luxury gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-luxury-gold/10" />
              
              {/* Premium shimmer effect */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            
            {/* Luxury floating card */}
            <div className="absolute -bottom-10 -left-10 luxury-card p-10 rounded-3xl shadow-luxury-premium backdrop-blur-premium animate-float border-2 border-accent/20">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-5 h-5 luxury-gradient rounded-full animate-glow-pulse shadow-accent-glow" />
                  <div className="absolute inset-0 w-5 h-5 luxury-gradient rounded-full animate-ping opacity-30" />
                  <div className="absolute -inset-2 w-9 h-9 luxury-gradient rounded-full blur-lg opacity-20" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-xl mb-2 luxury-text-shadow">Available for Projects</div>
                  <div className="text-muted-foreground font-medium">Let's build something extraordinary</div>
                </div>
              </div>
            </div>
            
            {/* Luxury decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 luxury-gradient rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute -bottom-16 -right-16 w-40 h-40 luxury-gradient rounded-full blur-[100px] opacity-15 animate-float" style={{ animationDelay: '4s' }} />
            <div className="absolute top-1/2 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};