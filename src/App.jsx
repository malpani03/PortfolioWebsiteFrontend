import React, { Suspense, lazy } from 'react';

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
