import { ExternalLink, Github, BookOpen, Target, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import Card3D from '@/components/effects/Card3D';
interface ProjectCardProps {
  title: string;
  labNumber: number;
  description: string;
  detailedDescription: string;
  objectives: string[];
  learnings: string[];
  techStack: string[];
  githubLink: string;
  image: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  labNumber, 
  description, 
  detailedDescription,
  objectives,
  learnings,
  techStack, 
  githubLink, 
  image,
  delay = 0 
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card3D className="h-full">
      <div
        className="group relative luxury-card rounded-2xl overflow-hidden animate-slide-up h-full"
        style={{ animationDelay: `${delay}s` }}
      >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-card transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full animate-pulse bg-secondary" />
        </div>
        <img 
          src={image} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Lab Number Badge - Styled like Brice Clain */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-6xl font-display font-bold text-primary/20">
            {String(labNumber).padStart(2, '0')}
          </span>
        </div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
          Lab {labNumber}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Short Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Expandable Detailed Section */}
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Detailed Description */}
          <div className="mb-4 p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Description détaillée</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {detailedDescription}
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-4 p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Objectifs</span>
            </div>
            <ul className="space-y-2">
              {objectives.map((obj, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">→</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="mb-4 p-4 rounded-lg bg-secondary/50 border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Apprentissages clés</span>
            </div>
            <ul className="space-y-2">
              {learnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-1">✓</span>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium text-muted-foreground group/btn"
          >
            <BookOpen size={16} className="group-hover/btn:rotate-12 transition-transform" />
            {isExpanded ? 'Réduire' : 'En savoir plus'}
          </button>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-sm font-medium"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Card3D>
  );
};

export default ProjectCard;
