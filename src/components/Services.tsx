import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "Tech Strategy",
    description: "Strategic technology planning, architecture design, and digital transformation roadmaps tailored to your business goals.",
    features: ["Technology Assessment", "Architecture Planning", "Digital Roadmaps"]
  },
  {
    icon: Code,
    title: "Product Development",
    description: "Full-stack development, MVP creation, and product scaling with modern technologies and best practices.",
    features: ["MVP Development", "Full-stack Solutions", "Code Architecture"]
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Technical leadership, team building, and development process optimization for growing technology teams.",
    features: ["Team Building", "Process Design", "Technical Mentoring"]
  },
  {
    icon: Zap,
    title: "System Integration",
    description: "API design, third-party integrations, and system interconnection to streamline your business operations.",
    features: ["API Development", "Third-party Integrations", "Automation"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            How I Can Help Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience in technology and entrepreneurship, 
            I provide comprehensive consulting services to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};