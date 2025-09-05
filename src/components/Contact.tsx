import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'armanraghavwork@gmail.com',
      action: () => window.open('mailto:armanraghavwork@gmail.com'),
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/armanraghavwork',
      action: () => window.open('https://www.linkedin.com/in/armanraghavwork', '_blank'),
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/armanraghav',
      action: () => window.open('https://github.com/armanraghav', '_blank'),
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Greater Noida, Uttar Pradesh',
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about data science and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className={`tech-card group ${contact.action ? 'cursor-pointer' : ''} fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={contact.action || undefined}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{contact.label}</h3>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="tech-card inline-block">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>
            <Button 
              className="hero-button"
              onClick={() => window.open('mailto:armanraghavwork@gmail.com')}
            >
              <Mail size={16} className="mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;