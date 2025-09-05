import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      icon: Code,
      skills: ['Python', 'Java (Basic)', 'MySQL', 'Git'],
    },
    {
      title: 'Data Analytics & Visualization',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Matplotlib'],
    },
    {
      title: 'AI/ML Frameworks',
      icon: Brain,
      skills: ['Scikit-learn', 'NLP (Basic)', 'TensorFlow', 'GPT4o (Basic)'],
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: ['Docker (Basic)', 'Jenkins (Basic)', 'Flask API (Basic)', 'React.js (Basic)'],
    },
  ];

  const certifications = [
    'Python and MySQL Certification – Ducat',
    'Banking FAQ Chatbot and PDF Summarization System Certification – Newgen',
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text">
            Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="tech-card text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Certifications
          </h3>
          
          <div className="flex flex-col space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="tech-card fade-in-up flex items-center p-4 bg-background/80 backdrop-blur-sm border-l-4 border-accent hover:border-primary transition-colors duration-300"
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="flex items-center w-full">
                  <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                  <p className="text-foreground font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;