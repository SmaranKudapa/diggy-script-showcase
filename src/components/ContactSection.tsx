import * as LucideIcons from 'lucide-react';
import { sampleSocialMedia } from '../data/sampleData';

const ContactSection = () => {
  const contactMethods = sampleSocialMedia.map(social => {
    const IconComponent = LucideIcons[social.icon as keyof typeof LucideIcons] as any;
    return {
      icon: IconComponent,
      title: social.title,
      description: social.description,
      action: () => window.open(social.url, '_blank'),
      isPrimary: social.isPrimary
    };
  });

  const services = [
    "Custom Scripts & Systems",
    "System Architecture", 
    "Performance Optimization",
    "Bug Fixes & Debugging",
    "Code Reviews & Refactoring",
    "Technical Consulting"
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-8">
          Let's Work Together
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Ready to bring your Roblox vision to life? I'm here to help you build scalable, 
          high-performance systems that elevate your game to the next level.
        </p>
        
        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className={`gaming-card text-center cursor-pointer group ${
                method.isPrimary ? 'ring-2 ring-primary/50' : ''
              }`}
              onClick={method.action}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                  method.isPrimary 
                    ? 'bg-primary/20 text-primary group-hover:shadow-glow' 
                    : 'glass-effect text-secondary group-hover:text-primary'
                }`}>
                  <method.icon size={32} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                  {method.title}
                </h3>
                <p className="text-muted-foreground">
                  {method.description}
                </p>
              </div>
              
              <div className="inline-flex items-center text-primary font-semibold">
                <span>{method.title === 'Discord' ? 'Contact Now' : `Visit ${method.title}`}</span>
                <method.icon size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Services Overview */}
        <div className="gaming-card text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Services I Offer
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center justify-center px-4 py-3 glass-effect rounded-lg text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-primary mr-2">✓</span>
                {service}
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-6 italic">
            Most other scripting things too - just DM me to ask!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;