import { Card } from '@/components/ui/card';
import { Code, Palette, Zap } from 'lucide-react';
import profileImage from '@/assets/1758083547706.jpg';

export const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with modern best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality for exceptional user experiences'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and efficiency across all platforms'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 clip-polygon-section bg-secondary/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hi, I’m Aryan Verma, a developer who loves turning ideas into powerful digital experiences. I believe in writing clean, structured code and designing with clarity and precision. My focus is on modern web technologies, especially the MERN stack, to build applications that are not only visually engaging but also reliable and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
              My journey into web development started with a curiosity to understand how websites are built and function. I began learning the fundamentals of HTML, CSS, and JavaScript, which gave me a strong base to bring simple ideas to life. Over time, I explored frameworks and libraries like React and Node.js, gradually stepping into full-stack development.

              </p>
              <p className="text-muted-foreground leading-relaxed">
              With every project I build, I gain new skills and insights. For me, this journey is about continuous learning—writing cleaner code, designing better user experiences, and experimenting with modern tools. What excites me most is the ability to turn creative ideas into practical, functional digital solutions that can make a difference.
              </p>
            </div>

            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 mx-auto relative">
                {/* Decorative geometric accents */}
                <div className="absolute inset-0 -z-10 bg-gradient-primary rounded-[2rem] rotate-6 opacity-40" />
                <div className="absolute inset-0 -z-10 bg-gradient-glow rounded-[2rem] -rotate-3 opacity-30" />

                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Aryan Verma profile"
                  className="w-full h-full rounded-full object-cover border-4 border-border shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-geometric transition-smooth group">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:glow-effect transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};