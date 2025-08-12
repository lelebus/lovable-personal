import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vinoteqa",
    description: "SaaS platform for wine cellar management with advanced inventory tracking, tasting notes, and collection analytics. Built for wine enthusiasts and collectors.",
    role: "Product Development & Strategy Lead",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    highlights: [
      "Designed scalable architecture for 10k+ users",
      "Implemented real-time inventory tracking",
      "Built advanced analytics dashboard",
      "Integrated with wine databases APIs"
    ],
    status: "Live Product",
    year: "2023-2024"
  },
  {
    title: "Collezionissimo.com",
    description: "Comprehensive platform for private collections management, connecting collectors and enabling secure trading of valuable items.",
    role: "Co-Founder & Technical Lead",
    tech: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    highlights: [
      "Built marketplace with 1000+ active users",
      "Implemented secure payment processing",
      "Designed collection management tools",
      "Created recommendation engine"
    ],
    status: "Established Platform",
    year: "2021-2023"
  },
  {
    title: "Emerald Experience Studio",
    description: "Digital agency specializing in immersive web experiences and custom software solutions for enterprise clients.",
    role: "Founder & Lead Developer",
    tech: ["JavaScript", "WebGL", "Three.js", "MongoDB"],
    highlights: [
      "Delivered 20+ client projects",
      "Built interactive 3D experiences",
      "Managed team of 5 developers",
      "Achieved 95% client satisfaction"
    ],
    status: "Previous Venture",
    year: "2018-2021"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Featured Projects & Ventures
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of companies and products I've built, co-founded, or significantly contributed to.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8 p-8">
                <div className="lg:col-span-2 space-y-6">
                  <CardHeader className="p-0">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <CardTitle className="text-2xl font-serif mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="secondary">{project.role}</Badge>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={project.status === "Live Product" ? "default" : "outline"}
                        className={project.status === "Live Product" ? "bg-accent text-accent-foreground" : ""}
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
                      <h4 className="font-medium mb-3">Key Achievements</h4>
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
                      <h4 className="font-medium mb-3">Technologies Used</h4>
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
                  <div className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-serif font-bold text-accent">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Project Preview
                      </div>
                    </div>
                  </div>
                  
                  {project.title === "Vinoteqa" && (
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Private Platform
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};