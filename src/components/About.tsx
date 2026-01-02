import { Lightbulb, Compass, Palette, Code2, Rocket } from 'lucide-react';
import { useScrollAnimation, getAnimationClasses, getStaggerDelay } from '@/hooks/useScrollAnimation';

const processSteps = [
  {
    number: '01',
    title: 'Idée',
    description: 'Analyse des besoins et définition du projet',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Analyse',
    description: 'Recherche et définition de la direction',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Design',
    description: 'Création visuelle et UX/UI',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Développement',
    description: 'Code propre et fonctionnel',
    icon: Code2,
  },
  {
    number: '05',
    title: 'Lancement',
    description: 'Déploiement et optimisation',
    icon: Rocket,
  },
];

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      className="py-32 relative overflow-hidden bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-start gap-8 mb-8">
            <span className={`text-8xl md:text-9xl font-display font-bold text-primary/10 ${getAnimationClasses(isVisible, 'fadeRight')}`}>
              01
            </span>
            <div>
              <span
                className={`inline-block text-sm font-mono text-primary mb-4 tracking-widest uppercase ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.1s' }}
              >
                À Propos
              </span>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Mon <span className="gradient-text">Parcours</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div 
            className={`space-y-6 ${getAnimationClasses(isVisible, 'fadeRight')}`} 
            style={{ transitionDelay: '0.3s' }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Étudiante en <span className="text-foreground font-medium">M1 STIC</span> spécialisée en Conception d'Applications Web, 
              je suis passionnée par la création d'expériences numériques élégantes et fonctionnelles.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              À travers mon cursus, j'ai développé des compétences solides en <span className="text-primary">React</span>, 
              <span className="text-primary"> JavaScript moderne</span>, et les meilleures pratiques du développement web.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque projet présenté ici représente une étape de mon apprentissage, de la maîtrise des fondamentaux HTML/CSS 
              jusqu'au développement d'applications React complètes.
            </p>
            
            {/* Decorative Quote */}
            <div className="relative pl-6 py-4 border-l-2 border-primary/50 mt-8">
              <p className="text-foreground italic font-display text-xl">
                "Le code est de la poésie qui résout des problèmes."
              </p>
            </div>
          </div>

          {/* Visual Element - Process Timeline Mobile */}
          <div 
            className={`relative ${getAnimationClasses(isVisible, 'fadeLeft')}`} 
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="luxury-card rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold mb-6 text-center">
                Ma <span className="gradient-text">Méthodologie</span>
              </h3>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.number}
                    className={`flex items-center gap-4 ${getAnimationClasses(isVisible, 'fadeLeft')}`}
                    style={{ transitionDelay: getStaggerDelay(index, 0.5) }}
                  >
                    {/* Number */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-mono font-bold">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <step.icon className="w-4 h-4 text-primary" />
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-[30px] w-px h-6 bg-primary/20" style={{ top: `${76 + index * 72}px` }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps - Desktop Horizontal */}
        <div 
          className={`hidden lg:block ${getAnimationClasses(isVisible, 'fadeUp')}`} 
          style={{ transitionDelay: '0.7s' }}
        >
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  className={`text-center ${getAnimationClasses(isVisible, 'scale')}`}
                  style={{ transitionDelay: getStaggerDelay(index, 0.8) }}
                >
                  {/* Icon Circle */}
                  <div className="relative mx-auto w-16 h-16 mb-4">
                    <div className="absolute inset-0 rounded-full bg-card border border-primary/30 flex items-center justify-center group hover:border-primary/60 hover:bg-primary/5 transition-all duration-300">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
