const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-8">
          About Me
        </h2>
        
        <div className="gaming-card text-left max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            With <span className="gradient-text font-semibold">3 years of dedicated Roblox development experience</span>, 
            I specialize in creating robust, scalable gaming solutions that push the boundaries of what's possible on the platform.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
            My expertise lies in developing <span className="text-primary font-semibold">modular systems</span> that prioritize 
            performance and maintainability. From complex inventory management to sophisticated NPC pathfinding systems, 
            I architect solutions that are both powerful and efficient.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I'm passionate about <span className="text-secondary font-semibold">scalability and optimization</span>, 
            ensuring that every system I build can handle growth and complexity while maintaining peak performance. 
            My approach combines technical excellence with creative problem-solving to deliver exceptional gaming experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;