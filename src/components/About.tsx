import React from 'react';
import { MapPin, User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-br from-background via-muted/30 to-background backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 glow-text font-heading animate-pulse-slow">
            About Me
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto mb-10 rounded-full shadow-glow"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Data enthusiast with a passion for turning complex information into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-10 items-stretch">
          <div className="fade-in-left w-full">
            <div className="tech-card group h-full p-8 bg-gradient-to-br from-background via-muted/5 to-background border border-primary/20 rounded-xl shadow-lg hover:shadow-primary">
              <div className="flex items-center mb-8 bg-gradient-to-r from-primary/20 to-accent/10 p-4 rounded-lg">
                <User className="text-primary mr-3" size={24} />
                <span className="text-xl text-foreground font-medium">Data Science Specialist</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-primary font-heading border-b border-primary/30 pb-3">
                About Me
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I am a B.Tech student specializing in Big Data Engineering with experience in 
                data analytics, statistical modeling, and machine learning. I have worked on 
                academic and collaborative projects involving AI, NLP, data pipelines, and 
                real-time processing to achieve optimized, data-driven solutions.
              </p>
              
              <div className="flex items-center mb-6 bg-gradient-to-r from-accent/10 to-transparent p-4 rounded-lg">
                <MapPin className="text-accent mr-3" size={24} />
                <span className="text-xl text-foreground font-medium">Greater Noida, Uttar Pradesh</span>
              </div>
              
              <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-r from-accent/20 to-primary/10 border border-accent/30 backdrop-blur-sm hover:shadow-accent transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-red-glow opacity-10"></div>
                <p className="relative text-xl font-semibold text-accent">
                  <strong>Goal:</strong> Build a career as a Data Analyst or Machine Learning Engineer to create 
                  impactful, scalable solutions from large datasets.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-right mt-6">
            <div className="tech-card group h-full p-8 bg-gradient-to-br from-background via-muted/5 to-background border border-primary/20 rounded-xl shadow-lg hover:shadow-primary">
              <div className="flex flex-col space-y-6">
                <div className="flex items-center mb-2 bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-lg">
                  <GraduationCap className="text-primary mr-3" size={24} />
                  <span className="text-xl text-foreground font-medium">Education</span>
                </div>
                
                <div className="p-4 border border-primary/10 rounded-lg bg-gradient-to-br from-muted/10 to-transparent hover:shadow-sm hover:border-primary/30 transition-all duration-300">
                  <h4 className="text-lg font-bold text-primary">B.Tech in Big Data Engineering</h4>
                  <p className="text-muted-foreground">NIIT University</p>
                  <p className="text-sm text-accent">Expected Graduation: 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;