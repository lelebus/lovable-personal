import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Laravel", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Kubernetes", "Terraform"] },
  { category: "Leadership", items: ["Team Building", "Product Strategy", "Agile/Scrum", "Technical Mentoring"] }
];

const languages = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "Spanish", level: "Conversational" }
];

const milestones = [
  {
    year: "2024",
    title: "Vinoteqa Growth",
    description: "Scaled wine management SaaS to serve thousands of collectors worldwide"
  },
  {
    year: "2023",
    title: "Product Leadership",
    description: "Led technical teams in developing innovative B2B solutions"
  },
  {
    year: "2021",
    title: "Collezionissimo Launch",
    description: "Co-founded marketplace platform connecting collectors globally"
  },
  {
    year: "2018",
    title: "Emerald Experience",
    description: "Founded digital agency creating immersive web experiences"
  },
  {
    year: "2015",
    title: "Tech Journey Begins",
    description: "Started career as software engineer, focusing on full-stack development"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            About Gabriele
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a decade of experience building products, 
            leading teams, and turning innovative ideas into successful businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">My Journey</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    My passion for technology started early, but it was the intersection of business 
                    and engineering that truly captured my imagination. Over the past decade, I've 
                    worn many hats: software engineer, product manager, entrepreneur, and technical leader.
                  </p>
                  <p>
                    I believe the best technology solutions come from deeply understanding business needs 
                    and user problems. This philosophy has guided me through founding two companies, 
                    scaling products to thousands of users, and helping numerous startups navigate 
                    their technical challenges.
                  </p>
                  <p>
                    When I'm not coding or strategizing, you'll find me exploring new technologies, 
                    mentoring fellow entrepreneurs, or enjoying a good wine (hence the wine management platform!).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-4">Languages</h3>
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

          {/* Skills & Timeline */}
          <div className="space-y-8">
            {/* Skills */}
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Expertise</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <h4 className="font-medium mb-3 text-accent">{skill.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Timeline */}
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6">Career Highlights</h3>
                <div className="space-y-6">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                        {index !== milestones.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {milestone.year}
                          </Badge>
                          <h4 className="font-medium">{milestone.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};