import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold glow-text mb-3">
              Arman Singh Raghav
            </h3>
            <p className="text-muted-foreground mb-4">
              Big Data Engineering Student specializing in ML & AI
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                onClick={() => window.open('https://github.com/armanraghav', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/armanraghavwork', '_blank')}
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary transition-colors"
                onClick={() => window.open('mailto:armanraghavwork@gmail.com')}
              >
                <Mail size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors mx-auto"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Greater Noida, UP</p>
              <p className="text-muted-foreground">armanraghavwork@gmail.com</p>
              <p className="text-muted-foreground">NIIT University</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;