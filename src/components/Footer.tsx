import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-gradient mb-2">Portfolio</div>
              <p className="text-muted-foreground">Aryan Verma 💖.</p>
            </div>

            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-gradient-primary hover:glow-effect transition-smooth group"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>© 2024 Portfolio. All rights reserved.</p>
            <div className="flex items-center space-x-1 mt-4 md:mt-0">
              <span>Made </span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>with by Aryan Verma</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};