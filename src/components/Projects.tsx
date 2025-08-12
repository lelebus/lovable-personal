import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Users } from "lucide-react";

const projects = [
  {
    title: "Enterprise E-commerce Platform",
    description: "Scalable microservices architecture for a Fortune 500 retail company, handling 1M+ daily transactions with 99.9% uptime.",
    role: "Lead Software Architect",
    tech: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
    highlights: [
      "Designed microservices architecture for 10M+ users",
      "Implemented event-driven architecture with Kafka",
      "Achieved 99.9% system availability",
      "Reduced deployment time by 80%"
    ],
    status: "Production System",
    year: "2023-2024",
    icon: Database
  },
  {
    title: "Financial Trading Platform",
    description: "High-frequency trading system with real-time market data processing, risk management, and compliance monitoring.",
    role: "Senior Software Architect",
    tech: ["C++", "Python", "Apache Kafka", "TimescaleDB", "Docker", "GCP"],
    highlights: [
      "Built low-latency trading engine (<1ms)",
      "Implemented real-time risk management",
      "Designed scalable data pipeline",
      "Ensured regulatory compliance"
    ],
    status: "Live Platform",
    year: "2022-2023",
    icon: Code
  },
  {
    title: "Healthcare Data Platform",
    description: "HIPAA-compliant healthcare data management system with advanced analytics, patient privacy controls, and AI-powered insights.",
    role: "Software Architect",
    tech: ["Python", "FastAPI", "PostgreSQL", "Elasticsearch", "TensorFlow", "Azure"],
    highlights: [
      "Ensured HIPAA compliance and security",
      "Built real-time analytics dashboard",
      "Implemented AI-powered diagnostics",
      "Managed team of 8 developers"
    ],
    status: "Production System",
    year: "2021-2022",
    icon: Users
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Technical Projects & Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of enterprise systems and platforms I've architected and delivered, 
            demonstrating expertise in scalable software design and technical leadership.
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
                      Enterprise System
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