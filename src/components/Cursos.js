import React from 'react';
import { BookOpen } from 'lucide-react';

const Cursos = () => {
  const cursos = [
    {
      titulo: "Diseño gráfico",
      institucion: "Instituto Privado Celendín",
      duracion: "2025",
      descripcion: "Crea soluciones visuales para comunicar mensajes de forma efectiva"
    },
    {
      titulo: "Diseño web",
      institucion: "Instituto Privado Celendín",
      duracion: "2025",
      descripcion: "HTML5, CSS3, JavaScript y frameworks modernos"
    },
    {
      titulo: "Animación de gráficos",
      institucion: "Instituto Privado Celendín",
      duracion: "2025",
      descripcion: "Da vida y movimiento a elementos visuales para captar la atención y contar historias"
    },
    {
    titulo: "Estado",
      descripcion: 'Completado'
    },

    {
    titulo: "Estado",
      descripcion: 'Completado'
    },

    {
    titulo: "Estado",
      descripcion: 'Completado'
    }

    /*{
      titulo: "Programación Orientada a Objetos",
      institucion: "Instituto Privado Celendín",
      duracion: "2024",
      descripcion: "Conceptos avanzados de POO y patrones de diseño"
    },
    {
      titulo: "Desarrollo de Aplicaciones Web",
      institucion: "Instituto Privado Celendín",
      duracion: "2025",
      descripcion: "Frameworks backend y frontend para aplicaciones completas"
    }*/
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Cursos de Formación
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">{curso.titulo}</h3>
              </div>
              <p className="text-blue-600 font-medium mb-2">{curso.institucion}</p>
              <p className="text-gray-600 text-sm mb-3">{curso.duracion}</p>
              <p className="text-gray-700">{curso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;