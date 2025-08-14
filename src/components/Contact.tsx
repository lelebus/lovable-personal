import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Hero Headline */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            {t('contact.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mt-6 font-medium">
            {t('contact.getInTouch')}
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
                      <p className="text-sm text-muted-foreground">{t('contact.emailLabel')}</p>
                      <a href={`mailto:${t('contact.contactInfo.email')}`} className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                        {t('contact.contactInfo.email')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <Linkedin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.contactInfo.linkedin')}</p>
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
                      <p className="text-sm text-muted-foreground">{t('contact.phoneLabel')}</p>
                      <a href={`tel:${t('contact.contactInfo.phone')}`} className="text-lg font-medium text-foreground hover:text-accent transition-colors">
                        {t('contact.contactInfo.phone')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.location')}</p>
                      <p className="text-lg font-medium text-foreground">
                        {t('contact.contactInfo.location')}
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
                {t('contact.consultation.title')}
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                {t('contact.consultation.description')}
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank')}
              >
                {t('contact.consultation.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};