import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Code, Terminal, Sparkles } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import TypewriterText from '@/components/effects/TypewriterText';
import heroProfile from '@/assets/hero-profile.jpg';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '7', label: 'Projets' },
    { value: '8+', label: 'Technologies' },
    { value: 'M1', label: 'STIC' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Animated Gold Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-slow" />
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse-slow" style={{ animationDelay: '3s' }} />
        
        {/* Vertical lines */}
        <div className="absolute top-0 left-[10%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-[5%] opacity-20 animate-float hidden lg:block">
        <Code className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-[15%] opacity-20 animate-float hidden lg:block" style={{ animationDelay: '2s' }}>
        <Terminal className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-1/3 right-[5%] opacity-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-10 h-10 text-primary" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Section Number */}
            <div
              className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="text-7xl md:text-8xl font-display font-bold text-primary/10">01</span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent max-w-[100px]" />
            </div>

            {/* Main Content */}
            <div
              className={`transition-all duration-1000 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-primary font-mono text-sm tracking-wider mb-4 uppercase">
                M1 STIC — Web Application Design
              </p>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-6">
                <span className="text-foreground">Bonjour,</span>
                <br />
                <span className="text-foreground">je suis </span>
                <GlitchText text="Yassmine" className="gradient-text text-shadow-gold" />
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full" />
                <h2 className="text-xl md:text-2xl font-display text-muted-foreground">
                  <TypewriterText text="Junior React Developer" delay={80} />
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mb-8">
                Passionnée par le développement web moderne et les interfaces utilisateur élégantes. 
                J'explore les dernières technologies pour créer des expériences digitales mémorables.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button
                variant="gold"
                size="xl"
                onClick={() => scrollToSection('projects')}
                className="group"
              >
                Découvrir mes projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="gold-outline"
                size="xl"
                onClick={() => scrollToSection('contact')}
              >
                Me contacter
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Photo */}
          <div 
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Main Photo Container */}
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative Frame */}
              <div 
                className="absolute -inset-4 border border-primary/20 rounded-lg"
                style={{
                  transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              />
              <div 
                className="absolute -inset-8 border border-primary/10 rounded-lg hidden md:block"
                style={{
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                  transition: 'transform 0.3s ease-out',
                }}
              />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-lg aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src={heroProfile}
                  alt="Yassmine - Junior React Developer"
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(1.1)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
                
                {/* Gold Accent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card border border-primary/20 rounded-lg p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to work</span>
                </div>
              </div>

              {/* Tech Badge */}
              <div className="absolute -top-4 -right-4 md:-right-8 bg-card border border-primary/20 rounded-lg p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono text-primary">React.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Fixed Left */}
      <div
        className={`fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <a
          href="https://github.com/Sarasoufi/caw-labs.git"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 transition-all duration-300 hover:-translate-y-1"
        >
          <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-2 transition-all duration-300 hover:-translate-y-1"
        >
          <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <a
          href="mailto:gridyassmine@gmail.com"
          className="group p-2 transition-all duration-300 hover:-translate-y-1"
        >
          <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      {/* Scroll Indicator - Fixed Right */}
      <div
        className={`fixed right-6 bottom-0 hidden lg:flex flex-col items-center gap-4 z-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-4 bg-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
