import { useScrollAnimation, getAnimationClasses, getStaggerDelay } from '@/hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

// Import images
import lab1Image from '@/assets/lab1-html-css.jpg';
import lab2Image from '@/assets/lab2-javascript.jpg';
import lab3Image from '@/assets/lab3-nodejs.jpg';
import lab4Image from '@/assets/lab4-jest.jpg';
import lab5Image from '@/assets/lab5-react.jpg';
import lab6Image from '@/assets/lab6-vite.jpg';
import lab7Image from '@/assets/lab7-kanban.jpg';

const projects = [
  {
    labNumber: 1,
    title: 'Introduction au Web',
    description: 'Apprentissage de la structure HTML5 et du design avec CSS3.',
    detailedDescription: 'Ce premier laboratoire constitue la base fondamentale du développement web. Nous avons exploré en profondeur la sémantique HTML5, comprenant l\'importance des balises structurelles comme header, main, section, article et footer pour l\'accessibilité et le SEO. Le CSS3 a été abordé avec les sélecteurs avancés, le modèle de boîte, Flexbox et Grid Layout.',
    objectives: [
      'Maîtriser la structure sémantique HTML5',
      'Comprendre le modèle de boîte CSS (margin, padding, border)',
      'Implémenter des layouts responsives avec Flexbox et Grid',
      'Appliquer les bonnes pratiques d\'accessibilité web'
    ],
    learnings: [
      'Création de pages web sémantiques et accessibles',
      'Stylisation avancée avec CSS3 et les pseudo-classes',
      'Responsive design avec media queries',
      'Validation W3C et bonnes pratiques SEO'
    ],
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    image: lab1Image,
  },
  {
    labNumber: 2,
    title: 'JavaScript Moderne',
    description: "Manipulation du DOM, gestion des événements et ES6+.",
    detailedDescription: 'Ce laboratoire approfondit JavaScript ES6+ avec les nouvelles syntaxes comme les arrow functions, destructuring, spread operator, et les template literals. Nous avons manipulé le DOM de manière efficace, géré les événements utilisateur, et implémenté des fonctionnalités interactives complexes.',
    objectives: [
      'Maîtriser la syntaxe ES6+ (let, const, arrow functions)',
      'Manipuler le DOM avec querySelector et manipulation de classes',
      'Gérer les événements et la propagation',
      'Utiliser les Promises et async/await'
    ],
    learnings: [
      'Écriture de code JavaScript moderne et maintenable',
      'Création d\'interfaces utilisateur interactives',
      'Gestion asynchrone avec Promises et Fetch API',
      'Debugging efficace avec les DevTools'
    ],
    techStack: ['JavaScript', 'ES6+', 'DOM API', 'Fetch'],
    image: lab2Image,
  },
  {
    labNumber: 3,
    title: 'Node.js & NPM',
    description: "Initialisation de projets et gestion des paquets avec NPM.",
    detailedDescription: 'Introduction à l\'écosystème Node.js et à la gestion de dépendances avec NPM. Nous avons configuré des projets, géré les versions de packages, créé des scripts personnalisés, et mis en place un serveur HTTP basique pour comprendre le fonctionnement côté serveur.',
    objectives: [
      'Initialiser et configurer un projet Node.js',
      'Gérer les dépendances avec package.json',
      'Créer des scripts NPM personnalisés',
      'Comprendre le fonctionnement d\'un serveur HTTP'
    ],
    learnings: [
      'Configuration d\'environnement de développement professionnel',
      'Gestion des versions et des dépendances',
      'Création de serveurs HTTP avec Node.js',
      'Utilisation des modules CommonJS et ES Modules'
    ],
    techStack: ['Node.js', 'NPM', 'HTTP', 'Express'],
    image: lab3Image,
  },
  {
    labNumber: 4,
    title: 'Tests Unitaires',
    description: 'Mise en œuvre de tests automatisés avec Jest.',
    detailedDescription: 'Ce laboratoire introduit les concepts de Test-Driven Development (TDD) avec Jest. Nous avons écrit des tests unitaires, utilisé les matchers, configuré les mocks et stubs, et mesuré la couverture de code pour garantir la qualité et la fiabilité du code.',
    objectives: [
      'Comprendre les principes du TDD',
      'Écrire des tests unitaires avec Jest',
      'Utiliser les matchers et les assertions',
      'Configurer les mocks et mesurer la couverture'
    ],
    learnings: [
      'Méthodologie TDD et son importance',
      'Structure des tests (Arrange, Act, Assert)',
      'Mocking des dépendances externes',
      'Analyse et amélioration de la couverture de code'
    ],
    techStack: ['Jest', 'TDD', 'Mocking', 'Coverage'],
    image: lab4Image,
  },
  {
    labNumber: 5,
    title: 'Fondamentaux React',
    description: "Création de composants réutilisables et gestion de l'état.",
    detailedDescription: 'Introduction approfondie à React avec la création de composants fonctionnels, l\'utilisation des Hooks (useState, useEffect, useContext), et la gestion du state local. Nous avons exploré les patterns de composition et le flux de données unidirectionnel.',
    objectives: [
      'Créer des composants React réutilisables',
      'Gérer l\'état avec useState et useReducer',
      'Comprendre le cycle de vie avec useEffect',
      'Implémenter la communication parent-enfant avec props'
    ],
    learnings: [
      'Architecture basée sur les composants',
      'Hooks React et leur utilisation optimale',
      'Gestion d\'état local et global',
      'Patterns de composition et réutilisabilité'
    ],
    techStack: ['React', 'JSX', 'Hooks', 'Props'],
    image: lab5Image,
  },
  {
    labNumber: 6,
    title: 'Tooling avec Vite',
    description: "Configuration d'un environnement de développement moderne.",
    detailedDescription: 'Exploration de Vite comme outil de build moderne. Configuration de l\'environnement de développement avec Hot Module Replacement (HMR), optimisation des assets, configuration TypeScript, et déploiement pour la production.',
    objectives: [
      'Configurer un projet avec Vite',
      'Comprendre le HMR et le bundling ESBuild',
      'Optimiser les assets pour la production',
      'Configurer les variables d\'environnement'
    ],
    learnings: [
      'Avantages de Vite sur les bundlers traditionnels',
      'Configuration et personnalisation de Vite',
      'Optimisation de build pour la production',
      'Intégration avec TypeScript et les frameworks'
    ],
    techStack: ['Vite', 'ESBuild', 'HMR', 'TypeScript'],
    image: lab6Image,
  },
  {
    labNumber: 7,
    title: 'Kanban Board',
    description: 'Application complète de gestion de tâches (CRUD) avec React.',
    detailedDescription: 'Projet final intégrant toutes les compétences acquises. Développement d\'une application Kanban complète avec opérations CRUD, drag & drop, persistance des données, et interface utilisateur moderne. Application des bonnes pratiques de développement React.',
    objectives: [
      'Développer une application React complète',
      'Implémenter les opérations CRUD',
      'Gérer le state complexe avec plusieurs composants',
      'Créer une interface drag & drop intuitive'
    ],
    learnings: [
      'Architecture d\'application React scalable',
      'Gestion d\'état global avec Context ou state lifting',
      'Implémentation de fonctionnalités drag & drop',
      'Bonnes pratiques UX et accessibilité'
    ],
    techStack: ['React', 'Vite', 'CRUD', 'Drag & Drop'],
    image: lab7Image,
  },
];

const githubBase = 'https://github.com/Sarasoufi/caw-labs';

const Projects = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef as React.RefObject<HTMLElement>}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Inspired by Brice Clain */}
        <div className="mb-20">
          <div className="flex items-start gap-8 mb-8">
            <span className={`text-8xl md:text-9xl font-display font-bold text-primary/10 ${getAnimationClasses(isVisible, 'fadeRight')}`}>
              02
            </span>
            <div>
              <span
                className={`inline-block text-sm font-mono text-primary mb-4 tracking-widest uppercase ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.1s' }}
              >
                Portfolio
              </span>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold ${getAnimationClasses(isVisible, 'fadeUp')}`}
                style={{ transitionDelay: '0.2s' }}
              >
                Mes <span className="gradient-text">Projets</span>
              </h2>
            </div>
          </div>
          
          <p
            className={`text-muted-foreground text-lg max-w-3xl ${getAnimationClasses(isVisible, 'fadeUp')}`}
            style={{ transitionDelay: '0.3s' }}
          >
            7 Labs réalisés pendant le semestre M1 STIC - Conception d'Applications Web. 
            Chaque projet représente une étape clé dans mon apprentissage du développement web moderne.
          </p>
          
          {/* Decorative line */}
          <div 
            className={`w-32 h-0.5 mt-8 bg-gradient-to-r from-primary to-transparent origin-left ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transition-all duration-1000`} 
            style={{ transitionDelay: '0.4s' }}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.labNumber}
              className={`${getAnimationClasses(isVisible, 'fadeUp')}`}
              style={{ transitionDelay: getStaggerDelay(index, 0.4) }}
            >
              <ProjectCard
                {...project}
                githubLink={githubBase}
                delay={0}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 ${getAnimationClasses(isVisible, 'fadeUp')}`} 
          style={{ transitionDelay: '1.2s' }}
        >
          <a
            href={githubBase}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 hover:border-primary bg-card/50 hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-300 group"
          >
            <span className="font-medium">Voir le repository complet sur GitHub</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
