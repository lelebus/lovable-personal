import { Code, Lightbulb, Users, Zap, Database, GitBranch, Shield, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Database,
    title: "System Architecture",
    description: "Design scalable, maintainable software architectures that support business growth and technical requirements.",
    features: ["Microservices Design", "Database Architecture", "Scalability Planning"]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack development with modern technologies, clean code practices, and robust testing strategies.",
    features: ["Full-stack Solutions", "Clean Code", "Testing Strategy"]
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Streamline development workflows with automated testing, deployment pipelines, and infrastructure as code.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Lead development teams, establish coding standards, and mentor engineers for optimal productivity.",
    features: ["Team Leadership", "Code Standards", "Technical Mentoring"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices, compliance frameworks, and secure coding standards.",
    features: ["Security Audits", "Compliance", "Secure Development"]
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Optimize system performance, database queries, and application responsiveness for better user experience.",
    features: ["Performance Tuning", "Database Optimization", "Load Testing"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a software architect, I provide comprehensive technical consulting and development services 
            to help organizations build robust, scalable software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-serif text-foreground">{service.title}</CardTitle>
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