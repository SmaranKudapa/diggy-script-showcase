import { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Project, sampleProjects } from '../data/sampleData';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(sampleProjects);

  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getProjectTypeColor = (type: string) => {
    const colors = {
      development: 'bg-primary/20 text-primary',
      system: 'bg-secondary/20 text-secondary',
      design: 'bg-accent/20 text-accent',
      ui: 'bg-muted/20 text-muted-foreground',
      other: 'bg-border/20 text-foreground'
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-16">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.sort((a, b) => a.sort_order - b.sort_order).map((project) => (
            <div key={project.id} className="gaming-card group">
              {/* YouTube Video Embed */}
              <div className="relative mb-6 rounded-lg overflow-hidden">
                <iframe
                  src={getYouTubeEmbedUrl(project.youtube_video_id)}
                  title={project.title}
                  className="w-full h-48 object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs rounded-full glass-effect text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Type Badge */}
              <div className="mb-6">
                <span className={`px-3 py-1 text-xs rounded-full ${getProjectTypeColor(project.project_type)}`}>
                  {project.project_type.charAt(0).toUpperCase() + project.project_type.slice(1)}
                </span>
              </div>
              
              {/* Play Game Button */}
              <a
                href={project.game_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                <Play size={16} />
                Play Game
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;