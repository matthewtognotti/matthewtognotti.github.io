import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setHasEntered(true);
    }, 500);
  };

  useEffect(() => {
    if (hasEntered) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [hasEntered]);

  if (!hasEntered) {
    return (
      <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Landing onEnter={handleEnter} />
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <section id="start"></section>
      <Header />
      <main id="content">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Experience />
          <Publications />
          <Projects />
          <Awards />
          <Videos />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
