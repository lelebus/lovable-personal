import { Code, Lightbulb, Users, Zap, Database, GitBranch, Shield, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const services = [
  {
    icon: Database,
    titleKey: "technicalArchitecture",
    iconName: "Database"
  },
  {
    icon: Code,
    titleKey: "fullStackDevelopment",
    iconName: "Code"
  },
  {
    icon: GitBranch,
    titleKey: "devOps",
    iconName: "GitBranch"
  },
  {
    icon: Users,
    titleKey: "leadership",
    iconName: "Users"
  },
  {
    icon: Lightbulb,
    titleKey: "consulting",
    iconName: "Lightbulb"
  }
];

export const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-serif text-foreground mb-2">
                      {t(`services.${service.titleKey}.title`)}
                    </CardTitle>
                    <h3 className="text-lg font-semibold text-accent mb-2">
                      {t(`services.${service.titleKey}.subtitle`)}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.${service.titleKey}.description`)}
                  </p>
                  <div className="bg-accent/5 border-l-4 border-accent pl-4 py-3 rounded-r-lg">
                    <p className="text-sm font-medium text-foreground">
                      {t(`services.${service.titleKey}.benefit`)}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    {t('services.keyCapabilities')}
                  </h4>
                  <ul className="space-y-2">
                    {(t(`services.${service.titleKey}.features`, { returnObjects: true }) as string[]).map((feature: string, idx: number) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Call to Action Card */}
          <Card className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
            <CardHeader className="pb-6 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/50 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-accent" />
              </div>
              <CardTitle className="text-2xl font-serif text-foreground mb-3">
                {t('services.cta.title')}
              </CardTitle>
              <h3 className="text-lg font-semibold text-accent mb-2">
                {t('services.cta.subtitle')}
              </h3>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t('services.cta.description')}
                </p>
                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-4">
                  <p className="text-sm font-medium text-foreground">
                    {t('services.cta.consultation')}
                  </p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="sophisticated-button font-semibold px-10 py-4 text-lg rounded-full shadow-sophisticated-premium hover:shadow-tech-glow transition-all duration-500 hover:scale-105"
                onClick={() => window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank')}
              >
                {t('services.cta.button')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};