import { Code, Lightbulb, Users, Zap, Database, GitBranch, Shield, Cpu } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Database,
    title: "Technical Architecture & Product Strategy",
    subtitle: "Build a Future-Proof Foundation",
    description: "I design scalable, maintainable software architectures tailored to your business goals — covering system design, APIs, database architecture, and scalability planning.",
    benefit: "Ensure your product is built on a robust, adaptable platform designed for growth and innovation.",
    features: ["System Design", "API Architecture", "Database Design", "Scalability Planning"]
  },
  {
    icon: Code,
    title: "Full-Stack Software Development & Delivery",
    subtitle: "Turn Ideas Into Production-Ready Software",
    description: "From frontend to backend, I deliver clean, maintainable code using modern frameworks like Vue.js, Nuxt.js, Golang, and Node.js — backed by rigorous testing strategies.",
    benefit: "Accelerate your product development with reliable, scalable solutions crafted for performance and longevity.",
    features: ["Full-stack Solutions", "Modern Frameworks", "Clean Code", "Testing Strategy"]
  },
  {
    icon: GitBranch,
    title: "DevOps, Automation & Cloud Infrastructure",
    subtitle: "Streamline Deployment & Operations",
    description: "I implement automated CI/CD pipelines, scalable cloud infrastructure (AWS), containerization (Docker), and monitoring systems — so your product stays resilient and deployment-ready at all times.",
    benefit: "Reduce operational overhead, mitigate risks, and ensure seamless delivery across environments.",
    features: ["CI/CD Pipelines", "AWS Services", "Docker", "Monitoring"]
  },
  {
    icon: Users,
    title: "Leadership & Team Enablement",
    subtitle: "Empower Your Tech Team to Deliver Excellence",
    description: "I lead and mentor development teams, establish agile workflows, and manage projects with precision — fostering productivity and alignment to business objectives.",
    benefit: "Build high-performing teams that consistently meet deadlines and quality standards.",
    features: ["Team Leadership", "Agile Workflows", "Technical Mentoring", "Project Management"]
  },
  {
    icon: Lightbulb,
    title: "Business & Process Consulting",
    subtitle: "Align Technology with Strategic Growth",
    description: "I analyze and optimize your business processes, enhance user experience, and define technology strategies — enabling operational efficiency and competitive advantage.",
    benefit: "Transform your technology from a cost center into a driver of growth and customer satisfaction.",
    features: ["Process Optimization", "UX Enhancement", "Technology Strategy", "Growth Planning"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-[1.1] py-2">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I partner with visionary leaders to architect, build, and scale digital products that drive growth and deliver lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-serif text-foreground mb-2">{service.title}</CardTitle>
                    <h3 className="text-lg font-semibold text-accent mb-2">{service.subtitle}</h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-accent/5 border-l-4 border-accent pl-4 py-3 rounded-r-lg">
                    <p className="text-sm font-medium text-foreground">
                      {service.benefit}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Call to Action Card */}
          <Card className="sophisticated-card hover:shadow-sophisticated-premium transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
            <CardHeader className="pb-6 text-center">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/50 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-accent" />
              </div>
              <CardTitle className="text-2xl font-serif text-foreground mb-3">
                Ready to Elevate Your Digital Product?
              </CardTitle>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Let's Build Something Amazing Together
              </h3>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ready to transform your vision into a scalable, high-performing digital solution? Let's discuss how I can help you architect, build, and launch your next big thing.
                </p>
                <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-4">
                  <p className="text-sm font-medium text-foreground">
                    Schedule a free consultation to explore your project requirements and discover the perfect solution for your business.
                  </p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="sophisticated-button text-white font-semibold px-10 py-4 text-lg rounded-full shadow-sophisticated-premium hover:shadow-tech-glow transition-all duration-500 hover:scale-105"
                onClick={() => window.open('https://calendar.app.google/sp9qAT94MGxqTP8S6', '_blank')}
              >
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};