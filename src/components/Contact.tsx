import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MapPin } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@aricummings.com",
      description: "Best way to reach me for opportunities or collaboration",
      action: "mailto:contact@aricummings.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@ariplayz",
      description: "Check out my code and open source contributions",
      action: "https://github.com/ariplayz"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "The Delphian School, Oregon",
      description: "Available for remote work and local opportunities",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration, mentorship, or just want to chat about technology? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-muted-foreground">
                As a passionate student developer, I'm always excited to connect with fellow developers, 
                mentors, and anyone interested in technology. Whether you have a project idea, 
                want to discuss open source contributions, or just want to share programming tips, 
                don't hesitate to reach out!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium">{method.title}</h4>
                          <p className="text-sm text-primary font-medium truncate">
                            {method.value}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {method.description}
                          </p>
                          {method.action && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="p-0 h-auto mt-2 text-primary hover:text-primary"
                              asChild
                            >
                              <a href={method.action} target="_blank" rel="noopener noreferrer">
                                Connect
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <Card className="bg-gradient-hero text-primary-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold mb-3">Available For</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Open Source Projects</div>
                  <div>• Mentorship Opportunities</div>
                  <div>• Student Collaborations</div>
                  <div>• Tech Discussions</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};