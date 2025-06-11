import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import JobsSection from './components/JobsSection';
import CommunitySection from './components/CommunitySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <JobsSection />
      <CommunitySection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;