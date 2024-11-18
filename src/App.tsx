import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ApiShowcase from './components/ApiShowcase';
import ContactForm from './components/ContactForm';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto p-6 space-y-24">
          <section id="home"><Hero /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="api"><ApiShowcase /></section>
          <section id="contact"><ContactForm /></section>
        </div>
      </main>
    </div>
  );
}

export default App;