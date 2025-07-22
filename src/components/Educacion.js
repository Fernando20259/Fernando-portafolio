import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Educacion = () => {
  const educacion = [
    {
      titulo: "Computación e Informática",
      institucion: "Instituto Privado Celendín",
      periodo: "2023 - 2025",
      descripcion: "Especialización en desarrollo de software y tecnologías web.",
      tipo: "formal"
    },
    {
      titulo: "Educación Autodidacta de Tecnologías Web",
      institucion: "Recursos en línea",
      periodo: "2020 - 2023",
      descripcion: "Aprendizaje continuo de tecnologías web, frameworks y metodologías ágiles.",
      tipo: "autodidacta"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Educación
        </h2>
        <div className="space-y-8">
          {educacion.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${
                  edu.tipo === 'formal' ? 'bg-blue-100' : 'bg-cyan-100'
                }`}>
                  <GraduationCap className={`${
                    edu.tipo === 'formal' ? 'text-blue-600' : 'text-cyan-600'
                  }`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{edu.titulo}</h3>
                  <p className="text-blue-600 font-medium text-lg mb-2">{edu.institucion}</p>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    {edu.periodo}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{edu.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacion;