import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PointsSlip Cross-Platform Suite",
      description: "A comprehensive productivity management system for Delphian School students to track daily production points. Includes desktop app (macOS/Windows), iOS app in the app store, Apple Watch app, and Android app (awaiting Google Play release).",
      tech: ["C#", "Swift", "Kotlin", "Cross-platform", "Desktop", "Mobile"],
      category: "Full Stack",
      status: "Completed",
      highlight: true,
      githubUrl: "https://github.com/orgs/pointsslip/repositories"
    },
    {
      title: "MileageTracker",
      description: "A modern cross-platform mobile application for tracking and sharing mileage data with a robust C# backend API. Features real-time syncing, categorization, and collaborative mileage sharing for teams and families. Built with SwiftUI, Kotlin, and .NET Core.",
      tech: ["SwiftUI", "Kotlin", "C#", ".NET Core", "iOS", "API", "Real-time"],
      category: "Mobile",
      status: "In Progress",
      highlight: true,
      githubUrl: "https://github.com/orgs/Mileage-Tracker-App/repositories"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Completed": return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "In Progress": return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      case "In Review": return "bg-orange-500/10 text-orange-600 border-orange-500/20";
      case "Awaiting Release": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      case "Merged": return "bg-purple-500/10 text-purple-600 border-purple-500/20";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, from mobile apps to web applications and open source contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 ${
                project.highlight ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2 pt-2">
                  {project.githubUrl ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {project.status === "Live" && (
                    <Button variant="default" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
              <p className="text-lg opacity-90 mb-6">
                Check out my GitHub profile for more projects, code samples, and contributions to the open source community.
              </p>
              <Button variant="secondary" size="lg">
                <Github className="h-5 w-5" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
