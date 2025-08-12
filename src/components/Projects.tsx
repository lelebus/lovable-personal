import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Users } from "lucide-react";

const projects = [
  {
    title: "Vinoteqa - Wine Management SaaS",
    description: "Revolutionary SaaS platform for wine cellar and wine list management, helping restaurants and wine bars automate sales, purchases, and reporting.",
    role: "Founder & Lead Developer",
    tech: ["Vue.js", "Nuxt.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
    highlights: [
      "Built complete SaaS platform from concept to production",
      "Automated wine sales accounting for ~25% of restaurant revenue",
      "Streamlined back-end operations for restaurateurs",
      "User-friendly platform for extensive wine collections"
    ],
    status: "Live Platform",
    year: "2023-Present",
    icon: Database
  },
  {
    title: "Collezionissimo - Collection Platform",
    description: "Omnichannel commerce platform for private collections including antique paper, coins, military memorabilia, watches, and musical materials.",
    role: "Co-Founder & CTO",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "AWS", "E-commerce", "API Design"],
    highlights: [
      "Built platform supporting thousands of objects across multiple categories",
      "Implemented omnichannel commerce approach",
      "Designed scalable database architecture for diverse collections",
      "Created user-friendly interface for public access"
    ],
    status: "Live Platform",
    year: "2020-Present",
    icon: Code
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Featured Projects & Ventures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of innovative platforms and startups I've founded and built, 
            demonstrating expertise in entrepreneurship, technical leadership, and digital product development.
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
                        <CardTitle className="text-2xl font-serif mb-2 text-foreground">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="secondary">{project.role}</Badge>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={project.status === "Production System" ? "default" : "outline"}
                        className={project.status === "Production System" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <div>
                      <h4 className="font-medium mb-3 text-foreground">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>

                <div className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <project.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        System Architecture
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Startup Platform
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};