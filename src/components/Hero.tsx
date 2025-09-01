import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2 } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-xl text-muted-foreground">
                <Code2 className="h-6 w-6 text-primary" />
                <span>The Delphian School</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Hello, I'm Ari Cummings, a student at
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Open Source
                </span>
                <br />
                Developer
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate high school developer specializing in C#, Swift, and web technologies. 
              Building innovative solutions and contributing to open source projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://github.com/ariplayz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  View My Work
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {["C#", "Swift", "JavaScript", "HTML/CSS", "React", "Git"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gradient-card border border-border rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Coding workspace" 
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero/20"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-elegant animate-glow-pulse">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-elegant">
              <Github className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};