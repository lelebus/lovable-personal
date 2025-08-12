import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Code, Users, Building2 } from "lucide-react";
import vinoteqaScreenshot from "@/assets/screenshot-vinoteqa.png";
import collezionissimoScreenshot from "@/assets/screenshot-collezionissimo.png";

const projects = [
  {
    title: "Vinoteqa",
    role: "Founder & Lead Developer",
    subtitle: "Revolutionizing Wine Management for Restaurants",
    description: "Vinoteqa is a groundbreaking SaaS platform that redefines wine cellar and list management for restaurants and wine bars. By automating sales, purchases, and reporting with precision, it empowers restaurateurs to focus on delivering unparalleled guest experiences.",
    highlights: [
      "Spearheaded the product from concept to launch",
      "Automated wine sales accounting for up to 25% of restaurant revenue",
      "Delivered a scalable, intuitive platform embraced by industry professionals"
    ],
    url: "https://www.vinoteqa.com",
    status: "Live Platform",
    year: "2023-Present",
    icon: Database
  },
  {
    title: "Collezionissimo",
    role: "Co-Founder & CTO",
    subtitle: "Bridging Collectors with Exclusive Private Collections",
    description: "Collezionissimo offers an innovative omnichannel commerce platform connecting collectors to rare antiques, coins, military memorabilia, watches, and more. Designed to handle vast, diverse inventories, it creates seamless discovery and purchasing experiences.",
    highlights: [
      "Architected a robust, scalable platform infrastructure",
      "Integrated omnichannel commerce capabilities to enhance market reach",
      "Delivered a user-centric interface enabling effortless exploration of private collections"
    ],
    url: "https://www.collezionissimo.com",
    status: "Live Platform",
    year: "2020-Present",
    icon: Code
  }
];

const codeworksProjects = [
  "CovisionLab", "Endian", "Leitner", "BHeroes", "Unbound", "Goodify", "Gibi", "WeFix.it", "Properly Inc"
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
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Badge variant="secondary">{project.role}</Badge>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-accent mb-3">{project.subtitle}</h3>
                      </div>
                      <Badge 
                        variant={project.status === "Live Platform" ? "default" : "outline"}
                        className={project.status === "Live Platform" ? "bg-accent text-accent-foreground" : ""}
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
                  </CardContent>
                </div>

                <div className="space-y-4">
                  <div 
                    className="aspect-video bg-gradient-to-br from-muted to-secondary rounded-lg overflow-hidden cursor-pointer group-hover:scale-105 transition-transform duration-300 relative"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    {project.title === "Vinoteqa" ? (
                      <img 
                        src={vinoteqaScreenshot} 
                        alt="Vinoteqa - Wine Management SaaS Platform" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={collezionissimoScreenshot} 
                        alt="Collezionissimo - Collection Platform" 
                        className="w-full h-full object-cover"
                      />
                    )}
                    
                    {/* Overlay with icon and text */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          {project.title === "Vinoteqa" ? (
                            <Database className="w-8 h-8 text-white" />
                          ) : (
                            <Code className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <div className="text-sm font-medium text-white mb-1">
                          {project.title}
                        </div>
                        <div className="text-xs text-white/80">
                          {project.title === "Vinoteqa" ? "Wine Management SaaS" : "Collection Platform"}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.open(project.url, '_blank')}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit {project.title}
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
                    Other Projects at CodeWorks
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Badge variant="secondary">Tech Lead</Badge>
                    <span>•</span>
                    <span>2020-2022</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  During my tenure as Tech Lead at <a href="https://codeworks.build/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">CodeWorks</a>, I led the development to deliver <span className="font-bold">every project on time and budget</span>, by implementing rigorous development standards and automated deployment processes. This approach maximized efficiency, enabling the team to focus on crafting high-quality software solutions.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I contributed to the development of the projects for
                  <a href="https://www.goodify.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold  ml-1 hover:underline">Goodify</a>,
                  <a href="https://www.gibischool.it/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Gibi</a>,
                  <a href="https://wefix.it/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">WeFix.it</a>,
                  <a href="https://www.covisionquality.com/en" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Covision Quality</a>,
                  <a href="https://getproperly.com/" target="_blank" rel="noopener noreferrer" className="text-accent font-bold ml-1 hover:underline">Properly Inc</a>.
                </p>
                
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};