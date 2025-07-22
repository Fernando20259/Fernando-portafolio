import React from 'react';
import {Code, Award } from 'lucide-react';

const SobreMi = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400">
                  <img 
                  src="/images/fernando.jpg" 
                  alt="Fernando Manuel Vasquez Chavez" 
                  className="w-full h-full object-cover object-top rounded-full"
                />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Soy Fernando Manuel Vásquez Chávez, estudiante de Computación e Informática 
              en el Instituto Privado Celendín. Mi pasión por la tecnología me ha llevado 
              a especializarme en el desarrollo de software y tecnologías web.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Durante mi formación, he adquirido experiencia en frameworks modernos, 
              metodologías ágiles y desarrollo full-stack. Me caracterizo por mi 
              autodidactismo y constante búsqueda de nuevos conocimientos en el 
              campo tecnológico.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Code size={32} className="text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Desarrollo Web</p>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg">
                <Award size={32} className="text-cyan-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-800">Aprendizaje Continuo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;