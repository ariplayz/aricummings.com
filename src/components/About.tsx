import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Heart, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate student developer at The Delphian School, dedicated to creating 
            innovative solutions and contributing to the open source community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                As a high school student at The Delphian School, I've discovered my passion for 
                programming and software development. I believe in the power of technology to 
                solve real-world problems and make a positive impact.
              </p>
              <p className="text-muted-foreground">
                My focus areas include C# for desktop and backend applications, Swift for iOS 
                development, and modern web technologies like JavaScript, HTML, and CSS. I'm 
                committed to writing clean, efficient code and contributing to open source projects.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-foreground">Student at The Delphian School</span>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-foreground">3+ years of programming experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-foreground">Passionate about open source</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-foreground">Goal: Computer Science at university</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <p className="text-sm text-muted-foreground">Open Source Contributions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <p className="text-sm text-muted-foreground">Programming Languages</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">∞</div>
                <p className="text-sm text-muted-foreground">Curiosity & Drive</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};