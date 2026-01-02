import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import SectionTransition from '@/components/SectionTransition';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionTransition variant="wave" className="text-card -mt-1" />
        <About />
        <SectionTransition variant="curve" flip className="text-background -mb-1" />
        <Projects />
        <SectionTransition variant="diagonal" className="text-card -mt-1" />
        <Skills />
        <SectionTransition variant="wave" flip className="text-background -mb-1" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
