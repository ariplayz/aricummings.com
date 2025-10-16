import { Github, Mail, Heart, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-muted-foreground">
              A passionate student developer at The Delphian School, 
              building the future one line of code at a time.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/ariplayz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Technical Skills
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Featured Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Education & Focus */}
          <div className="space-y-4">
            <h3 className="font-bold">Focus Areas</h3>
            <div className="space-y-2 text-muted-foreground">
              <div>C# Development</div>
              <div>iOS App Development</div>
              <div>Web Technologies</div>
              <div>Open Source Contributions</div>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                <strong>Education:</strong> The Delphian School
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🄯 GNU GPL v3 Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span> and Open Source using React & TypeScript</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Open to opportunities and collaboration
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};