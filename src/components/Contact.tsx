import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, MapPin, Calendar, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "architect@example.com",
    href: "mailto:architect@example.com"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/software-architect",
    href: "https://linkedin.com/in/software-architect"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "United States • Remote",
    href: null
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", project: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build robust, scalable software solutions? I'd love to hear about your 
            technical challenges and explore how we can architect the right solution together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="sophisticated-card">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Project Inquiry</CardTitle>
              <CardDescription>
                Tell me about your project requirements and I'll respond within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-accent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-border focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      placeholder="e.g., System Design, Architecture Review"
                      className="border-border focus:ring-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="border-border focus:ring-accent resize-none"
                    placeholder="Describe your project requirements, technical challenges, timeline, and how I can help..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sophisticated-button text-white shadow-sophisticated-premium"
                >
                  Send Project Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="sophisticated-card">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-foreground">Get In Touch</CardTitle>
                <CardDescription>
                  Choose your preferred way to connect. I'm always excited to discuss new technical challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1 text-foreground">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-sophisticated-soft">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-serif font-bold mb-4 text-foreground">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's schedule a technical consultation to discuss your architecture needs and explore solutions.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};