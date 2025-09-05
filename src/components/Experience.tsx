import React from 'react';
import { Building2, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 glow-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="fade-in-up">
              <div className="tech-card relative md:ml-20">
                {/* Timeline Dot */}
                <div className="absolute -left-32 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Machine Learning Intern
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 size={16} className="mr-2" />
                      <span>Newgen Software Ltd</span>
                      <span className="mx-2">•</span>
                      <span>Remote</span>
                    </div>
                  </div>
                  <div className="flex items-center text-accent">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">Jun 2025 - Aug 2025</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-accent">
                    AskFi — Banking FAQ Chatbot
                  </h4>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built with Python, Streamlit, Hugging Face Transformers, and FAISS for accurate, 
                      context-based banking query responses and PDF summarization.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Implemented fine-tuned BERT with exact FAQ matching and FAISS semantic search.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Integrated PDF chunking & summarization for user-uploaded documents.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimized search ranking for higher retrieval accuracy.
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 mb-6">
                  <p className="text-accent font-medium">
                    <strong>Impact:</strong> Improved FAQ retrieval and enabled instant summarization of 
                    lengthy banking/legal PDFs, boosting client efficiency.
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/armanraghav/AskFi_Solo', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </Button>
              </div>
            </div>

            {/* Positions of Responsibility */}
            <div className="fade-in-up mt-12">
              <div className="tech-card relative md:ml-20">
                <div className="absolute -left-32 top-8 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Contingent Mentor
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building2 size={16} className="mr-2" />
                      <span>NIIT University</span>
                    </div>
                  </div>
                  <div className="flex items-center text-accent">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">2023-24</span>
                  </div>
                </div>

                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Guided new students in adapting to campus life, academics, and college culture.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Acted as a bridge between seniors and juniors, providing mentorship and resolving queries.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Organized orientation activities to help freshers transition smoothly into university life.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;