import { Code, Settings, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Core Roblox Development",
      skills: [
        "Knit Framework",
        "Object-Oriented Programming",
        "DataStoreService",
        "Pathfinding",
        "CollectionService",
        "TextChatService",
        "Module Scripts"
      ]
    },
    {
      icon: Settings,
      title: "Technical Systems",
      skills: [
        "Client-Server Architecture",
        "Physics Systems",
        "HttpService",
        "UI Backend Development",
        "UserInputService",
        "TweenService",
        "Cross-Platform Optimization"
      ]
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: [
        "Clear Communication",
        "English Fluency",
        "Notion & Task Management",
        "Project Documentation",
        "Client Relations",
        "Problem Solving"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          My Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="gaming-card text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto rounded-full glass-effect flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <category.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-4 py-2 rounded-lg glass-effect text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;