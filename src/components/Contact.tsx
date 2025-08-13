import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Hero Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            Your Vision. My Expertise. Let's Build What's Next.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Big ideas deserve flawless execution. Whether you're launching a startup or scaling an enterprise platform, 
            I help you cut through the technical noise, streamline execution, and create a product built for growth.
          </p>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mt-6 font-medium">
            Let's talk — and start turning your vision into reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-card border-border shadow-premium mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:hello@decandido.dev" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                      hello@decandido.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a href="https://linkedin.com/in/de-candido" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+393357812244" className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                        +39 335 781 2244
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-lg font-medium text-foreground">
                        Bolzano, South Tyrol, Italy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call-to-Action Section */}
          <Card className="bg-gradient-to-r from-accent/5 to-primary/5 border-accent/20 shadow-premium">
            <CardContent className="p-12 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-6">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-foreground">
                Book Your Consultation
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                In 30 minutes, we'll review your idea, assess your team's scalability, and map out the smartest path forward. 
                I only take on projects I believe in — so if we work together, you know I'm invested in your success.
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank')}
              >
                Schedule a Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};