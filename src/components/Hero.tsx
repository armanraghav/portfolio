import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-red-glow opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="slide-in-scale mb-12">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-12 leading-none tracking-tight">
              <span className="text-white font-heading relative inline-block">
                Arman Singh
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
              </span>
              <br />
              <span className="text-white font-heading relative inline-block">
                Raghav
                <span className="absolute -bottom-2 right-0 w-1/3 h-1 bg-primary"></span>
              </span>
            </h1>
            
            <div className="mb-8">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">
                Big Data Engineering Student
              </p>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Specializing in Data Analytics, Machine Learning & AI Solutions. 
                Passionate about creating scalable, data-driven solutions that make an impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={scrollToAbout}
                className="hero-button text-xl px-12 py-6 bg-primary hover:bg-primary/80 text-white relative overflow-hidden group transition-all duration-500 shadow-lg hover:shadow-primary/50"
              >
                <span className="relative z-10">Explore My Work</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
              <Button 
                className="hero-button-secondary text-xl px-12 py-6 bg-transparent border-2 border-primary text-white hover:bg-primary/20 relative overflow-hidden group transition-all duration-500"
                onClick={() => window.open('mailto:armanraghavwork@gmail.com')}
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Button>
            </div>

            <div className="flex justify-center space-x-8 mb-16">
              <Button
                variant="ghost"
                size="icon"
                className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-primary/30 text-white hover:text-primary hover:border-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] relative overflow-hidden group"
                onClick={() => window.open('https://github.com/armanraghav', '_blank')}
              >
                <Github size={32} className="relative z-10" />
                <span className="absolute inset-0 bg-black/50 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-primary/30 text-white hover:text-primary hover:border-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] relative overflow-hidden group"
                onClick={() => window.open('https://www.linkedin.com/in/armanraghavwork', '_blank')}
              >
                <Linkedin size={32} className="relative z-10" />
                <span className="absolute inset-0 bg-black/50 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-primary/30 text-white hover:text-primary hover:border-primary transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] relative overflow-hidden group"
                onClick={() => window.open('mailto:armanraghavwork@gmail.com')}
              >
                <Mail size={32} className="relative z-10" />
                <span className="absolute inset-0 bg-black/50 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
              </Button>
            </div>

            <Button
              onClick={scrollToAbout}
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-black/30 backdrop-blur-sm border border-primary/30 text-white hover:text-primary hover:border-primary transition-all duration-500 animate-bounce hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] relative overflow-hidden group"
            >
              <ArrowDown size={32} className="relative z-10" />
              <span className="absolute inset-0 bg-black/50 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;