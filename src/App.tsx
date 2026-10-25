import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import DatabaseSection from './components/DatabaseSection';
import AutomationSection from './components/AutomationSection';
import Stats from './components/Stats';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header scrollY={scrollY} />
      <Hero />
      <Services />
      <DatabaseSection />
      <AutomationSection />
      <Stats />
      <Courses />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
