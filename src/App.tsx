import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
