import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import aboutPortrait from "@/assets/about-1.jpg";
import workspaceSetup from "@/assets/about-2.jpeg";

const languages = [
  { language: "Italian", level: "Native - Bilingual" },
  { language: "German", level: "Native - Bilingual" },
  { language: "English", level: "Fluent" },
  { language: "Spanish", level: "Fluent" }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            Your Partner in Scaling Bold Ideas
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Great businesses don't fail because of bad ideas — they fail because the team,
            process, and execution can't keep up with the vision. I make sure that never happens to you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Story Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="relative">
                <img
                  src={aboutPortrait}
                  alt="Gabriele De Candido - Tech Consultant"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl" />
              </div>
            </div>

            <div className="space-y-8">
              <Card className="bg-card border-border shadow-premium">
                <CardContent className="p-8">
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-foreground">
                      You're here because <strong>you're building something big</strong>. But right now, your tech operations
                      might feel unpredictable — missed deadlines, unclear priorities, a team that's working
                      hard but not always in the right direction.
                    </p>

                    <p className="font-medium text-accent text-xl">
                      I've been there.
                    </p>

                    <p className="text-muted-foreground">
                      When I started coding at 14, I was building robots — fascinated by how ideas became reality.
                      Years later, I learned the harder truth: in business, even the best tech fails without the
                      right people, structure, and process.
                    </p>

                    <p className="text-muted-foreground">
                      Since 18, I've been working with startups and industry leaders and learned to bridge that gap, turning messy
                      operations into systems that deliver — on time, every time.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="bg-card border-border shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-lg font-serif font-bold mb-4">Languages</h3>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{lang.language}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Workspace & Philosophy Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Card className="bg-card border-border shadow-premium">
                <CardContent className="p-8">
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p className="text-muted-foreground">
                      I only work with projects I truly believe in, where my expertise can make a measurable impact.
                      If that's you, we start with a simple call — to dissect your idea, assess your team, and map
                      a clear path to scalable delivery.
                    </p>

                    <div className="bg-gradient-to-r from-accent/10 to-transparent p-6 rounded-2xl border-l-4 border-accent">
                      <h4 className="font-semibold text-accent text-xl mb-3">The transformation?</h4>
                      <p className="text-foreground">
                        From firefighting and uncertainty to clarity, predictability, and growth — all without
                        losing speed or burning out your people.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-muted/30 rounded-2xl">
                      <p className="text-xl font-medium text-muted-foreground mb-2">
                        I'm not the hero here.
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        You are. I'm just the one making sure you win.
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
                  className="w-full h-[400px] object-cover rounded-3xl shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};