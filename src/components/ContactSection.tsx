import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'aryanv2204.com',
      href: 'mailto:aryanv2204.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9528614564',
      href: 'tel:+952861456'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Prem Nagar Dehradun,India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 hover:shadow-geometric transition-smooth">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="geometric-border focus:glow-effect"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="geometric-border focus:glow-effect"
                    />
                  </div>
                </div>
                
                <Input 
                  placeholder="Subject" 
                  className="geometric-border focus:glow-effect"
                />
                
                <Textarea 
                  placeholder="Your Message" 
                  rows={6}
                  className="geometric-border focus:glow-effect resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary bg-gray-700 hover:glow-effect transition-smooth text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or potential collaborations. Whether you have a specific project in mind 
                  or just want to connect, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-geometric transition-smooth group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:glow-effect transition-smooth">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">{info.title}</h4>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-smooth"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Availability Status */}
              <Card className="p-6 bg-gradient-glow">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-medium">Available for new projects</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Currently accepting freelance and contract opportunities
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};