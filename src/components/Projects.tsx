import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'NEWZY',
      subtitle: 'AI-Powered News Category Classification',
      description: 'Used ML & NLP to classify news articles into simple categories with real-time API predictions.',
      tech: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
      github: 'https://github.com/armanraghav/Newzy_Solo',
      featured: true,
    },
    {
      title: 'Resume Classifier',
      subtitle: 'AI-Driven Resume Screening Tool',
      description: 'Developed a machine learning model to automatically classify resumes into relevant job categories, enabling efficient candidate filtering with real-time API predictions.',
      tech: ['Python', 'Scikit-learn', 'FastAPI', 'React'],
      github: 'https://github.com/armanraghav/Resume-Analyzer_Solo',
      featured: true,
    },
    {
      title: 'FlixBro',
      subtitle: 'AI-Powered Movie Review Analysis',
      description: 'Used ML & NLP to analyze movie reviews and provide real-time sentiment insights.',
      tech: ['Python', 'NLP', 'ML algorithms'],
      github: '#',
      featured: false,
    },
    {
      title: 'NUVault',
      subtitle: 'Lost and Found Management System',
      description: 'Developed a campus portal for reporting and claiming lost items with real-time updates and admin approval.',
      tech: ['MySQL', 'HTML', 'JavaScript'],
      github: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-br from-background via-muted/20 to-background backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 glow-text font-heading animate-pulse-slow">
            Featured Projects
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-accent/20 via-accent to-accent/20 mx-auto mb-10 rounded-full shadow-accent"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in machine learning, 
            data analysis, and full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group p-10 bg-gradient-to-br from-background via-muted/5 to-background border-2 hover:border-accent/50 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-3 font-heading group-hover:text-accent transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-xl text-accent font-semibold mb-4">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-12 h-12 hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github size={24} />
                    </Button>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="hero-button-secondary text-lg px-8 py-4"
                    onClick={() => window.open(project.github, '_blank')}
                    disabled={project.github === '#'}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    View Project
                  </Button>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;