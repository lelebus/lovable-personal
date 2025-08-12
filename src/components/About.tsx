import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Architecture", items: ["System Design", "API Design", "Database Design", "Microservices", "Event-Driven"] },
  { category: "Development", items: ["Vue.js", "Nuxt.js", "Golang", "Java", "Python", "Node.js"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "CI/CD", "Git", "Linux", "PostgreSQL"] },
  { category: "Leadership", items: ["Startup Leadership", "Team Building", "Project Management", "Technical Leadership"] }
];

const languages = [
  { language: "German", level: "Native/Bilingual" },
  { language: "Italian", level: "Native/Bilingual" },
  { language: "English", level: "Full Professional" },
  { language: "Spanish", level: "Professional Working" }
];

const milestones = [
  {
    year: "2023",
    title: "Founder @ Vinoteqa",
    description: "Building a SaaS platform revolutionizing wine cellar management for restaurants and wine bars"
  },
  {
    year: "2020",
    title: "Co-Founder @ Collezionissimo",
    description: "Platform for private collections with omnichannel commerce approach"
  },
  {
    year: "2022",
    title: "Co-Founder @ Emerald Experience Studio",
    description: "Combining art with cutting-edge technologies for distinctive customer experiences"
  },
  {
    year: "2021",
    title: "CTO @ CodeWorks",
    description: "Led development teams and created solid development guidelines and release processes"
  },
  {
    year: "2018",
    title: "Software Engineer @ FlashBeing",
    description: "Contributed to productivity platform development and gained AWS expertise"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A tech enthusiast and entrepreneur with 6+ years of experience building startups, leading teams, 
            and delivering innovative digital solutions. I love to code, solve problems, and build cool things.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Personal Story */}
          <div className="space-y-8">
            <Card className="sophisticated-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Professional Journey</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    My journey in tech started at age 14 when I began programming and developing websites. 
                    By 18, I was already running my own business as a developer, and since then, I've been 
                    passionate about building innovative solutions that solve real business problems.
                  </p>
                  <p>
                    I specialize in creating scalable software systems, leading development teams, and 
                    building successful startups. My approach combines technical expertise with entrepreneurial 
                    thinking to deliver solutions that drive business growth and user satisfaction.
                  </p>
                  <p>
                    I believe in the power of technology to transform businesses and create meaningful 
                    experiences. When I'm not coding or building companies, you'll find me exploring new 
                    technologies, mentoring teams, or working on the next big idea.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="sophisticated-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Languages</h3>
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
            <Card className="sophisticated-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Technical Expertise</h3>
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
            <Card className="sophisticated-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">Career Progression</h3>
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
                          <h4 className="font-medium text-foreground">{milestone.title}</h4>
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