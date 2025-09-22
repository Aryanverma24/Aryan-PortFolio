import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import BazaarImg from '@/assets/Screenshot (152).png';
import booksyImg from '@/assets/Screenshot (148).png';
import vidtubeImg from '@/assets/Screenshot (149).png';
import todoImg from '@/assets/Screenshot (150).png';
import landImg from '@/assets/Screenshot (151).png';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Bazaar E-Commerce',
      description: 'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, wishlist, and secure checkout. Includes admin dashboard for product/order management, user roles, and sales analytics. Offers responsive design, search/filtering, product reviews, and order tracking.',
      image: BazaarImg,
      technologies: ['React (Frontend)', 'Node.js & Express (Backend)', 'MongoDB (Database)', 'REST API', 'Multer', 'JWT', 'Redux (State Management)' ],
      liveUrl: 'https://github.com/Aryanverma24/Bazaar_E-Commmerce',
      githubUrl: 'https://github.com/Aryanverma24/Bazaar_E-Commmerce'
    },,
    {
      title: 'Land Utility – Land Assets Platform',
      description: 'Land Utility is a web app for managing and discovering land assets. Users can view land details, owner info, images, and leave ratings or reviews. The platform supports secure data storage and real-time updates for efficient land transactions.',
      image: landImg,
      technologies: ['React (Frontend)', 'Node.js & Express (Backend)', 'MongoDB (Database)', 'REST API', 'Cloudinary', 'Multer', 'Cloud Storage for Images'],
      liveUrl: 'https://github.com/Aryanverma24/Terrain-Utility',
      githubUrl: 'https://github.com/Aryanverma24/Terrain-Utility'
    },
    {
      title: 'Booksy – Modern React Bookstore',
      description: 'Booksy is a fast, responsive React + Vite bookstore SPA with a clean Tailwind CSS v4 + DaisyUI UI. It showcases curated book sections with slick carousels, light/dark theming via Context.',
      image: booksyImg,
      technologies: ['React 19', 'Vite', 'React Router', 'Tailwind CSS v4', 'DaisyUI', 'Slick Carousel', 'Open Library API', 'React Icons'],
      liveUrl: 'https://aryan-bookstore.netlify.app',
      githubUrl: 'https://github.com/Aryanverma24/Booksy'
    },
    {
      title: 'VidTube – YouTube-style App',
      description: 'VidTube is a lightweight YouTube-style React app featuring a home feed, dynamic watch pages via React Router, and a responsive navbar/sidebar. Built with Vite for speed, it formats timestamps with Moment.js and uses the YouTube Data API. Clean components, ESLint, and plain CSS ensure a fast, maintainable, modern UI.',
      image: vidtubeImg,
      technologies: ['React 18', 'React Router v6', 'Vite', 'Moment.js', 'YouTube Data API', 'React Icons', 'CSS'],
      liveUrl: 'https://aryan-youtube-clone.netlify.app/',
      githubUrl: 'https://github.com/Aryanverma24/VidTube'
    },
    {
      title: 'ToDoApp – React Task Manager',
      description: 'ToDoApp is a lightweight React task manager enabling add, edit, delete, and complete toggling with localStorage persistence. It uses Context API with a custom hook for state, Tailwind CSS for styling, and Vite for fast builds.',
      image: todoImg,
      technologies: ['React 18', 'React DOM', 'Vite', 'Tailwind CSS', 'Context API', 'Custom Hook', 'localStorage', 'React Icons'],
      liveUrl: 'https://aryan-to-do.netlify.app/',
      githubUrl: 'https://github.com/Aryanverma24/ToDo-App'
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 clip-polygon-section bg-secondary/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of recent work combining innovative design with cutting-edge technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-geometric transition-smooth group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1 bg-gradient-primary hover:glow-effect text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                        <ExternalLink className="h-4 w-4 mr-1 text-white" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="geometric-border text-foreground">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-foreground">
                        <Github className="h-4 w-4 text-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
              <a href="https://github.com/Aryanverma24?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
            <Button variant="outline" size="lg" className="geometric-border">
              View All Projects
            </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};