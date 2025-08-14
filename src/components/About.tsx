import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import aboutPortrait from "@/assets/about-1.jpg";
import workspaceSetup from "@/assets/about-2.jpeg";

const languages = [
  { language: "italian", level: "nativeBilingual" },
  { language: "german", level: "nativeBilingual" },
  { language: "english", level: "fluent" },
  { language: "spanish", level: "fluent" }
];

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium px-4">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="relative">
                <img
                  src={aboutPortrait}
                  alt="Gabriele De Candido - Tech Consultant"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl lg:rounded-3xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl lg:rounded-3xl" />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <Card className="bg-card border-border shadow-premium">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                    <p className="text-foreground">
                      {t('about.description')}
                    </p>

                    <p className="font-medium text-accent text-lg sm:text-xl">
                      {t('about.story.title')}
                    </p>

                    <p className="text-muted-foreground">
                      {t('about.story.paragraph1')}
                    </p>

                    <p className="text-muted-foreground">
                      {t('about.story.paragraph2')}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="bg-card border-border shadow-soft">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-serif font-bold mb-3 sm:mb-4">{t('about.languages.title')}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-sm sm:text-base">{t(`about.languages.${lang.language}`)}</span>
                        <Badge variant="secondary" className="text-xs sm:text-sm">{t(`about.languages.${lang.level}`)}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Workspace & Philosophy Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-card border-border shadow-premium">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
                    <p className="text-muted-foreground">
                      {t('about.philosophy.paragraph1')}
                    </p>

                    <div className="bg-gradient-to-r from-accent/10 to-transparent p-4 sm:p-6 rounded-xl lg:rounded-2xl border-l-4 border-accent">
                      <h4 className="font-semibold text-accent text-lg sm:text-xl mb-2 sm:mb-3">{t('about.philosophy.transformation.title')}</h4>
                      <p className="text-foreground text-sm sm:text-base">
                        {t('about.philosophy.transformation.description')}
                      </p>
                    </div>

                    <div className="text-center p-4 sm:p-6 bg-muted/30 rounded-xl lg:rounded-2xl">
                      <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-2">
                        {t('about.philosophy.hero.title')}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-accent">
                        {t('about.philosophy.hero.subtitle')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={workspaceSetup}
                  alt="Modern workspace setup for tech consulting"
                  className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover rounded-2xl lg:rounded-3xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};