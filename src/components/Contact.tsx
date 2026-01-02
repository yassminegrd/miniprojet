import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation, getAnimationClasses } from '@/hooks/useScrollAnimation';
const Contact = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual Formspree endpoint)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre message. Je vous répondrai bientôt.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer ou m'envoyer un email directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 relative" ref={sectionRef as React.RefObject<HTMLElement>}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span
            className={`inline-block text-sm font-mono text-primary mb-4 tracking-widest uppercase ${getAnimationClasses(isVisible, 'fadeUp')}`}
          >
            Contact
          </span>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 ${getAnimationClasses(isVisible, 'fadeUp')}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl mx-auto ${getAnimationClasses(isVisible, 'fadeUp')}`}
            style={{ transitionDelay: '0.2s' }}
          >
            N'hésitez pas à me contacter pour toute opportunité ou collaboration
          </p>
          
          {/* Decorative line */}
          <div 
            className={`w-24 h-0.5 mx-auto mt-8 bg-gradient-to-r from-transparent via-primary to-transparent origin-center ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } transition-all duration-1000`} 
            style={{ transitionDelay: '0.3s' }}
          />
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div 
            className={`space-y-8 ${getAnimationClasses(isVisible, 'fadeRight')}`} 
            style={{ transitionDelay: '0.4s' }}
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">
                Informations de contact
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Je suis toujours ouverte aux nouvelles opportunités et collaborations. 
                N'hésitez pas à me contacter !
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="mailto:gridyassmine@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl luxury-card"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    gridyassmine@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl luxury-card"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Connectez-vous avec moi
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/Sarasoufi/caw-labs.git"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl luxury-card"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    Voir mes repositories
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`${getAnimationClasses(isVisible, 'fadeLeft')}`} 
            style={{ transitionDelay: '0.5s' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer le message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
