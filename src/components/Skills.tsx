import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C#", level: "Advanced", description: "Desktop apps, APIs, game development" },
        { name: "Swift", level: "Intermediate", description: "iOS apps, UI/UX design" },
        { name: "JavaScript", level: "Advanced", description: "Modern ES6+, async programming" },
        { name: "HTML/CSS", level: "Advanced", description: "Responsive design, animations" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: "🚀",
      skills: [
        { name: "React", level: "Intermediate", description: "Component-based development" },
        { name: ".NET", level: "Advanced", description: "Cross-platform applications" },
        { name: "SwiftUI", level: "Intermediate", description: "Modern iOS interfaces" },
        { name: "JetBrains IDEs", level: "Advanced", description: "IntelliJ IDEA, WebStorm, development tools" },
        { name: "Node.js", level: "Beginner", description: "Backend JavaScript development" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: "Advanced", description: "Version control, collaboration" },
        { name: "JetBrains IDEs", level: "Advanced", description: "IntelliJ IDEA, WebStorm, professional development" },
        { name: "Visual Studio", level: "Advanced", description: "IDE for C# development" },
        { name: "Xcode", level: "Intermediate", description: "iOS development environment" },
        { name: "VS Code", level: "Advanced", description: "Code editing, extensions" },
      ]
    },
    {
      title: "Concepts & Practices",
      icon: "🧠",
      skills: [
        { name: "OOP", level: "Advanced", description: "Object-oriented programming" },
        { name: "Open Source", level: "Intermediate", description: "Contributing to projects" },
        { name: "Responsive Design", level: "Advanced", description: "Mobile-first development" },
        { name: "Problem Solving", level: "Advanced", description: "Algorithmic thinking" },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <Badge className={getLevelColor(skill.level)}>
                          {skill.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Goals */}
        <div className="mt-16">
          <Card className="bg-gradient-hero text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-lg opacity-90 mb-6">
                Currently expanding my knowledge in machine learning, cloud computing, and advanced software architecture.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Python", "AWS", "Docker", "React Native", "GraphQL"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-white/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};