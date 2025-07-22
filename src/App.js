import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Cursos from './components/Cursos';
import Proyectos from './components/Proyectos';
import Educacion from './components/Educacion';
import Contacto from './components/Contacto';


const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return <Inicio setActiveSection={setActiveSection} />;
      case 'sobre-mi':
        return <SobreMi />;
      case 'cursos':
        return <Cursos />;
      case 'proyectos':
        return <Proyectos />;
      case 'educacion':
        return <Educacion />;
      case 'contacto':
        return <Contacto />;
      default:
        return <Inicio />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="pt-20">
        {renderSection()}
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2025 Fernando Manuel Vásquez Chávez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;