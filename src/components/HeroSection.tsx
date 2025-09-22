import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import heroImage from '@/assets/hero-geometric-bg.jpg';
import resumePdf from '@/assets/Aryan Verma Full Stack Resume.pdf';

export const HeroSection = () => {
  const titles = [
    'Full-Stack Developer',
    'Frontend Developer',
    'React.js Developer',
    'UI Developer',
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const currentTitle = titles[titleIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-dark opacity-80" />
      
      {/* Geometric Overlay */}
      <div className="absolute inset-0 clip-polygon-hero bg-gradient-glow opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-accent/30 rotate-12 animate-geometric-spin" />
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-primary/20 rotate-45" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground transition-opacity duration-500 ease-in-out">
              {currentTitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto">
            Designing and developing modern, responsive web experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:glow-effect transition-smooth">
              <a href={resumePdf} download="Aryan-Verma-Resume.pdf" target="_blank" rel="noreferrer noopener">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            
            <div className="flex gap-4">
              <Button asChild variant="outline" size="lg" className="geometric-border">
                <a href="https://github.com/Aryanverma24" target="_blank" rel="noreferrer noopener">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="geometric-border">
                <a href="https://www.linkedin.com/in/aryan-verma-554115283/" target="_blank" rel="noreferrer noopener">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <button 
            onClick={scrollToNext}
            className="animate-bounce hover:text-primary transition-smooth"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};
