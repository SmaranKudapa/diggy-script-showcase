import { ChevronDown, MessageCircle, Eye } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactDiscord = () => {
    // Open Discord with user ID
    window.open('https://discord.com/users/731669935461498890', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 gradient-hero-text animate-glow">
          Diggy
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
          Roblox Scripter & Developer
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting innovative Roblox experiences with <span className="gradient-text font-semibold">3 years</span> of dedicated development expertise. 
          Specializing in modular systems, performance optimization, and scalable solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={contactDiscord}
            className="btn-primary flex items-center gap-2 text-lg"
          >
            <MessageCircle size={20} />
            Contact on Discord
          </button>
          
          <button 
            onClick={scrollToProjects}
            className="btn-secondary flex items-center gap-2 text-lg"
          >
            <Eye size={20} />
            View My Work
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToProjects}
            className="animate-bounce p-2 rounded-full glass-effect hover:shadow-glow transition-all duration-300"
          >
            <ChevronDown size={24} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;