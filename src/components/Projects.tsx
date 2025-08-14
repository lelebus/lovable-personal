import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Users, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import vinoteqaScreenshot from "@/assets/screenshot-vinoteqa.png";
import collezionissimoScreenshot from "@/assets/screenshot-collezionissimo.png";

const projects = [
  {
    titleKey: "vinoteqa",
    icon: Database,
    screenshot: vinoteqaScreenshot
  },
  {
    titleKey: "collezionissimo",
    icon: Code,
    screenshot: collezionissimoScreenshot
  }
];

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent whitespace-nowrap leading-[1.1] py-2">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-2xl font-serif mb-2 text-foreground">
                          {t(`projects.${project.titleKey}.title`)}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Badge variant="secondary">
                            {t(`projects.${project.titleKey}.role`)}
                          </Badge>
                          <span>•</span>
                          <span>{t(`projects.${project.titleKey}.year`)}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-accent mb-3">
                          {t(`projects.${project.titleKey}.subtitle`)}
                        </h3>
                      </div>
                      <Badge 
                        variant={t(`projects.${project.titleKey}.status`) === "Live Platform" || t(`projects.${project.titleKey}.status`) === "Piattaforma Live" ? "default" : "outline"}
                        className={t(`projects.${project.titleKey}.status`) === "Live Platform" || t(`projects.${project.titleKey}.status`) === "Piattaforma Live" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {t(`projects.${project.titleKey}.status`)}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {t(`projects.${project.titleKey}.description`)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-medium mb-3 text-foreground">
                        {t('projects.codeworks.keyAchievements')}
                      </h4>
                      <ul className="space-y-2">
                        {(t(`projects.${project.titleKey}.highlights`, { returnObjects: true }) as string[]).map((highlight: string, idx: number) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="space-y-4">
                  <div 
                    className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg overflow-hidden cursor-pointer group-hover:scale-105 transition-transform duration-300 relative"
                    onClick={() => window.open(project.titleKey === "vinoteqa" ? "https://www.vinoteqa.com" : "https://www.collezionissimo.com", '_blank')}
                  >
                    <img 
                      src={project.screenshot} 
                      alt={`${t(`projects.${project.titleKey}.title`)} - ${t(`projects.${project.titleKey}.platformType`)}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with icon and text */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          <project.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-sm font-medium text-white mb-1">
                          {t(`projects.${project.titleKey}.title`)}
                        </div>
                        <div className="text-xs text-white/80">
                          {t(`projects.${project.titleKey}.platformType`)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.titleKey === "vinoteqa" ? "https://www.vinoteqa.com" : "https://www.collezionissimo.com", '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('projects.viewProject')} {t(`projects.${project.titleKey}.title`)}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CodeWorks Experience Section */}
        <div className="mt-16">
          <Card className="sophisticated-card bg-gradient-to-br from-muted/30 to-background border-2 border-accent/20">
            <div className="p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {t('projects.codeworks.title')}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Badge variant="secondary">{t('projects.codeworks.role')}</Badge>
                    <span>•</span>
                    <span>{t('projects.codeworks.year')}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t('projects.codeworks.description1')}
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t('projects.codeworks.description2')}
                  <a href="https://www.goodify.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold  ml-1 hover:underline">Goodify</a>,
                  <a href="https://www.gibischool.it/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Gibi</a>,
                  <a href="https://wefix.it/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">WeFix.it</a>,
                  <a href="https://www.covisionquality.com/en" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Covision Quality</a>,
                  <a href="https://getproperly.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Properly</a>.
                </p>
                
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};