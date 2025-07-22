import React from 'react';
import {Mail, FolderOpen } from 'lucide-react';

// Se agrega setActiveSection como prop para permitir que los botones actualicen el estado en App.js
const Inicio = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {/* Se ajusta el contenedor para que la imagen se vea circular y muestre la cara */}
          <div className="w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-400">
              <img 
                src="/images/fernando.jpg" 
                alt="Fernando Manuel Vasquez Chavez" 
                className="w-full h-full object-cover object-top"
                />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Fernando Manuel<br />
            <span className="text-blue-600">Vásquez Chávez</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Desarrollador de Software & Tecnologías Web
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Estudiante de Computación e Informática apasionado por el desarrollo web moderno. 
            Especializado en tecnologías frontend y backend, con experiencia en frameworks 
            actuales y metodologías ágiles de desarrollo.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          {/* onClick para que al hacer clic se ejecute setActiveSection con 'contacto' */}
          <button
            onClick={() => setActiveSection('contacto')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Mail size={20} />
            <span>Contactar</span>
          </button>
          {/* onClick para que al hacer clic se ejecute setActiveSection con 'proyectos' */}
          <button
            onClick={() => setActiveSection('proyectos')}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center space-x-2"
          >
            <FolderOpen size={20} />
            <span>Ver Proyectos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;