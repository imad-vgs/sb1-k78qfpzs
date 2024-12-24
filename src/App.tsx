import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Biography } from './pages/Biography/Biography';
import { Articles } from './pages/Articles/Articles';
import { Lessons } from './pages/Lessons/Lessons';
import { Fatwa } from './pages/Fatwa/Fatwa';
import { Contact } from './pages/Contact/Contact';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Layout } from './components/layout/Layout';
import { SEOHead } from './components/SEOHead';

function App() {
  return (
    <HelmetProvider>
      <Layout>
        <SEOHead />
        <Hero />
        <Features />
        <Biography />
        <Articles />
        <Lessons />
        <Fatwa />
        <Contact />
      </Layout>
    </HelmetProvider>
  );
}

export default App;