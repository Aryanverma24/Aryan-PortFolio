import { Card } from '@/components/ui/card';

export const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 75, color: 'hsl(197, 71%, 52%)' }, // sky blue
    { name: 'Node.js', level: 80, color: 'hsl(102, 52%, 49%)' }, // green
    { name: 'JavaScript', level: 70, color: 'hsl(50, 89%, 58%)' }, // yellow
    { name: 'Java', level: 80, color: 'hsl(10, 80%, 55%)' }, // orange-red
    { name: 'Python', level: 70, color: 'hsl(220, 13%, 45%)' }, // slate-ish
    { name: 'TypeScript', level: 60, color: 'hsl(211, 60%, 52%)' }, // blue
    { name: 'Tailwind CSS', level: 87, color: 'hsl(189, 95%, 65%)' }, // cyan
    { name: 'HTML5', level: 85, color: 'hsl(14, 90%, 55%)' }, // orange
    { name: 'CSS3', level: 78, color: 'hsl(205, 80%, 52%)' }, // blue
  ];

  const categories = [
    {
      title: 'Frontend and Backend',
      technologies: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Node.js', 'Java', 'Python',],    },
    {
      title: 'Programming Languages and Databases',
      technologies: ['JavaScript', 'Java', 'Python', 'C', 'MongoDB' , 'SQL'],
    },
    {
      title: 'Tools & Design',
      technologies: ['Power BI', 'Git','Github' , 'PostMan' ,'Netlify', 'Vercel']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A diverse toolkit combining technical expertise with creative design principles
            </p>
          </div>

          {/* Skill Levels */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="p-6 hover:shadow-geometric transition-smooth">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%`, background: skill.color }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-geometric transition-smooth group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:glow-effect transition-smooth">
                    <div className="text-2xl text-primary-foreground">
                      {index === 0 ? '⚛️' : index === 1 ? '⚙️' : '🎨'}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-sm rounded-full border border-border hover:border-primary transition-smooth"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};