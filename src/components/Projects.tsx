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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            {t('projects.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
                <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
                  <CardHeader className="p-0">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl font-serif mb-2 text-foreground">
                          {t(`projects.${project.titleKey}.title`)}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-3">
                          <Badge variant="secondary">
                            {t(`projects.${project.titleKey}.role`)}
                          </Badge>
                          <span>•</span>
                          <span>{t(`projects.${project.titleKey}.year`)}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-accent mb-3">
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
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {t(`projects.${project.titleKey}.description`)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="font-medium mb-2 sm:mb-3 text-foreground text-sm sm:text-base">
                        {t('projects.codeworks.keyAchievements')}
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {(t(`projects.${project.titleKey}.highlights`, { returnObjects: true }) as string[]).map((highlight: string, idx: number) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
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
                      <div className="text-center p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <project.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-white mb-1">
                          {t(`projects.${project.titleKey}.title`)}
                        </div>
                        <div className="text-xs text-white/80">
                          {t(`projects.${project.titleKey}.platformType`)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm" onClick={() => window.open(project.titleKey === "vinoteqa" ? "https://www.vinoteqa.com" : "https://www.collezionissimo.com", '_blank')}>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {t('projects.viewProject')} {t(`projects.${project.titleKey}.title`)}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CodeWorks Experience Section */}
        <div className="mt-12 sm:mt-16">
          <Card className="sophisticated-card bg-gradient-to-br from-muted/30 to-background border-2 border-accent/20">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
                    {t('projects.codeworks.title')}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <Badge variant="secondary">{t('projects.codeworks.role')}</Badge>
                    <span>•</span>
                    <span>{t('projects.codeworks.year')}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {t('projects.codeworks.description1')}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {t('projects.codeworks.description2')}
                  <a href="https://www.goodify.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Goodify</a>,
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