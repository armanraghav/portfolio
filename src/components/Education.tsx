import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Big Data Engineering)',
      institution: 'NIIT University',
      period: '2022 - 2026',
      status: 'In Progress',
      color: 'primary',
    },
    {
      degree: 'XII (CBSE)',
      institution: 'Kendriya Vidyalaya, Delhi',
      period: '2022',
      status: 'Completed',
      color: 'accent',
    },
    {
      degree: 'X (CBSE)',
      institution: 'Kendriya Vidyalaya, Delhi',
      period: '2020',
      status: 'Completed',
      color: 'accent',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background hidden md:block ${
                  edu.color === 'primary' ? 'bg-primary' : 'bg-accent'
                }`}></div>

                <div className="tech-card md:ml-20">
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        edu.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <GraduationCap size={16} className="mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end mt-4 sm:mt-0">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'In Progress'
                          ? 'bg-primary/10 text-primary border border-primary/30'
                          : 'bg-accent/10 text-accent border border-accent/30'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;