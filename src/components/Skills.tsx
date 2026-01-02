import { useState } from 'react';
import { useScrollAnimation, getAnimationClasses, getStaggerDelay } from '@/hooks/useScrollAnimation';
import { 
  Code2,
  Server,
  Layout,
  Terminal, 
  TestTube2, 
  Zap, 
  GitBranch, 
  FileCode,
  Palette,
  Database,
  Layers,
  Settings,
  LucideIcon
} from 'lucide-react';

interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Frontend' | 'Backend' | 'Outils';
  level: number;
  description: string;
  experience: string;
}

const skills: Skill[] = [
  { 
    name: 'HTML5', 
    icon: Layout, 
    category: 'Frontend', 
    level: 90,
    description: 'Structure sémantique, accessibilité, SEO',
    experience: 'Solide maîtrise'
  },
  { 
    name: 'CSS3', 
    icon: Palette, 
    category: 'Frontend', 
    level: 85,
    description: 'Flexbox, Grid, Animations, Responsive',
    experience: 'Expérimenté'
  },
  { 
    name: 'JavaScript', 
    icon: Code2, 
    category: 'Frontend', 
    level: 80,
    description: 'ES6+, DOM, Async/Await, APIs',
    experience: 'Expérimenté'
  },
  { 
    name: 'React', 
    icon: Zap, 
    category: 'Frontend', 
    level: 75,
    description: 'Hooks, Components, State Management',
    experience: 'En progression'
  },
  { 
    name: 'Node.js', 
    icon: Server, 
    category: 'Backend', 
    level: 70,
    description: 'Express, APIs REST, NPM',
    experience: 'Intermédiaire'
  },
  { 
    name: 'TypeScript', 
    icon: FileCode, 
    category: 'Frontend', 
    level: 65,
    description: 'Types, Interfaces, Generics',
    experience: 'Apprentissage'
  },
  { 
    name: 'Jest', 
    icon: TestTube2, 
    category: 'Outils', 
    level: 70,
    description: 'Tests unitaires, Mocking, Coverage',
    experience: 'Intermédiaire'
  },
  { 
    name: 'Vite', 
    icon: Layers, 
    category: 'Outils', 
    level: 80,
    description: 'Build rapide, HMR, Configuration',
    experience: 'Expérimenté'
  },
  { 
    name: 'Git', 
    icon: GitBranch, 
    category: 'Outils', 
    level: 75,
    description: 'Versioning, Branches, Collaboration',
    experience: 'Expérimenté'
  },
  { 
    name: 'Tailwind', 
    icon: Settings, 
    category: 'Frontend', 
    level: 75,
    description: 'Utility-first CSS, Design Systems',
    experience: 'Expérimenté'
  },
];

const categoryIcons = {
  'Frontend': Palette,
  'Backend': Database,
  'Outils': Terminal,
};

const categoryColors = {
  'Frontend': 'from-primary to-accent',
  'Backend': 'from-green-500 to-emerald-600',
  'Outils': 'from-blue-500 to-cyan-600',
};

const Skills = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['Frontend', 'Backend', 'Outils'] as const;
  
  const filteredSkills = activeCategory 
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section 
      id="skills" 
      className="py-32 relative noise-overlay bg-card"
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Inspired by Brice Clain */}
        <div className="mb-20">
          <div className="flex items-start gap-8 mb-8">
            <span className={`text-8xl md:text-9xl font-display font-bold text-primary/10 ${getAnimationClasses(isVisible, 'fadeRight')}`}>
              03
            </span>
            <div>
              <span
                className={`inline-block text-sm font-mono text-primary mb-4 tracking-widest uppercase ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.1s' }}
              >
                Expertise
              </span>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Skills & <span className="gradient-text">Technologies</span>
              </h2>
            </div>
          </div>
          
          <p
            className={`text-muted-foreground text-lg max-w-3xl ${getAnimationClasses(isVisible, 'fadeUp')}`}
            style={{ transitionDelay: '0.3s' }}
          >
            Technologies maîtrisées au cours de mon parcours en développement web. 
            Chaque compétence a été développée à travers des projets pratiques et des labs intensifs.
          </p>
          
          {/* Decorative line */}
          <div 
            className={`w-32 h-0.5 mt-8 bg-gradient-to-r from-primary to-transparent origin-left ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transition-all duration-1000`} 
            style={{ transitionDelay: '0.4s' }}
          />
        </div>

        {/* Category Filters */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 ${getAnimationClasses(isVisible, 'fadeUp')}`} 
          style={{ transitionDelay: '0.5s' }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              !activeCategory 
                ? 'bg-primary text-primary-foreground' 
                : 'border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
            }`}
          >
            Toutes
          </button>
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group luxury-card rounded-2xl p-6 ${getAnimationClasses(isVisible, 'scale')}`}
              style={{ transitionDelay: getStaggerDelay(index, 0.6) }}
            >
              {/* Icon */}
              <div className="relative w-14 h-14 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${categoryColors[skill.category]} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Category Badge */}
              <div className="flex justify-center mb-3">
                <span className="text-xs text-muted-foreground font-mono px-2 py-0.5 rounded-full bg-secondary">
                  {skill.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground text-center mb-4 min-h-[32px]">
                {skill.description}
              </p>

              {/* Level bar */}
              <div className="mb-2">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{skill.experience}</span>
                  <span className="text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${categoryColors[skill.category]} rounded-full transition-all duration-1000 ease-out ${
                      isVisible ? '' : 'w-0'
                    }`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${0.5 + index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 ${getAnimationClasses(isVisible, 'fadeUp')}`} 
          style={{ transitionDelay: '1.2s' }}
        >
          {[
            { value: '7', label: 'Labs Complétés' },
            { value: '10+', label: 'Technologies' },
            { value: '100%', label: 'Passion' },
            { value: '∞', label: 'Curiosité' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
