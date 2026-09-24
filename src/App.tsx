import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ServicesSection } from './components/ServicesSection';
import { SelectedWork } from './components/SelectedWork';
import { WhyDreamDeploy } from './components/WhyDreamDeploy';
import { ProcessSection } from './components/ProcessSection';
import { ScopeCalculator } from './components/ScopeCalculator';
import { StudioJammu } from './components/StudioJammu';
import { FAQSection } from './components/FAQSection';
import { ContactClosing } from './components/ContactClosing';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [contactPreFill, setContactPreFill] = useState<{
    service?: string;
    estimatedRange?: string;
    features?: string[];
  }>({});

  // Intersection Observer to update active navigation item dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'work', 'why-us', 'process', 'calculator', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleExploreWork = () => {
    scrollToSection('work');
  };

  const handleServiceSelectForContact = (serviceTitle: string) => {
    setContactPreFill({
      service: serviceTitle,
    });
    scrollToSection('contact');
  };

  const handleInquireProject = (projectTitle: string) => {
    setContactPreFill({
      service: 'Business Website',
      features: [`Reference Build: ${projectTitle}`]
    });
    scrollToSection('contact');
  };

  const handleScopeCalculated = (scopeData: {
    service: string;
    estimatedRange: string;
    features: string[];
  }) => {
    setContactPreFill(scopeData);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#13131A] font-sans antialiased relative selection:bg-[#7E57C2]/20 selection:text-[#4C1D95]">
      {/* Sticky Premium Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1 & 2: Hero */}
        <Hero
          onStartProject={handleStartProject}
          onExploreWork={handleExploreWork}
        />

        {/* Section 3: Brand Introduction Manifesto */}
        <BrandIntro />

        {/* Section 4: Services */}
        <ServicesSection
          onSelectServiceForContact={handleServiceSelectForContact}
        />

        {/* Section 5: Selected Work / Portfolio */}
        <SelectedWork
          onInquireProject={handleInquireProject}
        />

        {/* Section 6: Why DreamDeploy */}
        <WhyDreamDeploy />

        {/* Section 7: 4-Stage Process */}
        <ProcessSection />

        {/* Interactive Scope & Timeline Estimator */}
        <ScopeCalculator
          onPreFillContact={handleScopeCalculated}
        />

        {/* Jammu Studio & Regional Grounding */}
        <StudioJammu />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Section 8 & 9: Contact Closing Section & Form */}
        <ContactClosing
          preFillData={contactPreFill}
          onScrollToForm={() => scrollToSection('contact')}
        />
      </main>

      {/* Agency Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
