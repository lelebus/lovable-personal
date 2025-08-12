import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { category: "Architecture", items: ["Microservices", "Event-Driven", "Domain-Driven Design", "API Design", "System Integration"] },
  { category: "Backend", items: ["Java", "Python", "C++", "PostgreSQL", "Redis", "Kafka"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD", "Terraform"] },
  { category: "Leadership", items: ["Technical Leadership", "Team Building", "Agile/Scrum", "Code Reviews", "Architecture Reviews"] }
];

const languages = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "Fluent" },
  { language: "Spanish", level: "Conversational" }
];

const milestones = [
  {
    year: "2024",
    title: "Lead Software Architect",
    description: "Leading architecture design for enterprise e-commerce platform serving 10M+ users"
  },
  {
    year: "2023",
    title: "Senior Software Architect",
    description: "Designed high-frequency trading system with sub-millisecond latency requirements"
  },
  {
    year: "2022",
    title: "Software Architect",
    description: "Built HIPAA-compliant healthcare data platform with AI-powered analytics"
  },
  {
    year: "2021",
    title: "Senior Software Engineer",
    description: "Developed scalable backend systems and led development teams"
  },
  {
    year: "2018",
    title: "Software Engineer",
    description: "Started career focusing on full-stack development and system design"
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
            A senior software architect with over 15 years of experience designing and building 
            enterprise-scale systems, leading technical teams, and delivering robust software solutions.
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
                    My passion for software architecture began with a deep curiosity about how complex 
                    systems work and how to make them more efficient, scalable, and maintainable. 
                    Over the past 15+ years, I've evolved from a software engineer to a senior architect.
                  </p>
                  <p>
                    I specialize in designing enterprise-grade systems that can handle millions of users, 
                    process vast amounts of data, and maintain high availability. My approach combines 
                    technical expertise with business understanding to create solutions that drive real value.
                  </p>
                  <p>
                    I believe in clean architecture principles, continuous learning, and mentoring the 
                    next generation of software architects. When I'm not designing systems, you'll find 
                    me exploring new technologies, contributing to open source, or sharing knowledge 
                    with the developer community.
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