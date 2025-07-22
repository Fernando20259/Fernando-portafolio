import React, { useState } from 'react';
import { 
  ExternalLink,
  Calendar,
  Calculator,
  Church,
  Trophy,
  Crown,
  Gamepad2,
  Monitor
} from 'lucide-react';

const Proyectos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const proyectos = [
    {
      titulo: "Calculadora React",
      tipo: "Proyecto Finalizado",
      descripcion: "Calculadora funcional desarrollada con React, operaciones básicas y diseño responsivo",
      tecnologias: ["React", "CSS3", "JavaScript"],
      estado: "finalizado",
      fecha: "2025",
      icono: Calculator,
      imagen: null, // Sin imagen, usará enlace
      link: "https://github.com/Fernando20259/Calculadora-Fernando" 
    },
    {
      titulo: "Portafolio Personal",
      tipo: "Proyecto Finalizado", 
      descripcion: "Portafolio web responsivo desarrollado con React y Tailwind CSS",
      tecnologias: ["React", "Tailwind CSS", "Lucide-react", "Vercel"],
      estado: "finalizado",
      fecha: "2025",
      icono: Monitor,
      imagen: null, // Sin imagen, usará enlace
      link: "https://example.com/portafolio" 
    },
    {
      titulo: "Evento Corpus Christi",
      tipo: "Participación",
      descripcion: "Participé en la colaboración y realización de flyers publicitarios y contenido digital para evento cultural religioso",
      tecnologias: ["Adobe photoshop", "Diseño Gráfico"],
      estado: "participacion",
      fecha: "24-25 Junio 2025",
      icono: Church,
      imagen: "/images/corpus-christi-image.jpg" 
    },
    {
      titulo: "Gran Pregón Estudiantil IPC",
      tipo: "Participación",
      descripcion: "Colaboré en la publicidad y diseño de flyers para el 18° aniversario del Instituto Privado Celendín",
      tecnologias: ["Adobe ilustrator", "Diseño Gráfico"],
      estado: "participacion",
      fecha: "30 Mayo 2025",
      icono: Trophy,
      imagen: "/images/pregon-image.jpg" 
    },
    {
      titulo: "Certamen de Belleza IPC",
      tipo: "Participación",
      descripcion: "Participé en la realización de flyers y material publicitario digital para certamen de belleza Míster IPC",
      tecnologias: ["Adobe ilustrator", "Diseño Gráfico"],
      estado: "participacion",
      fecha: "29 Mayo 2025",
      icono: Crown,
      imagen: "/images/certamen-image.jpg" 
    },
    {
      titulo: "Juegos Deportivos IPC",
      tipo: "Participación",
      descripcion: "Colaboré en la publicidad y creación de contenido visual para los juegos deportivos institucionales",
      tecnologias: ["Adobe ilustrator", "Diseño Gráfico"],
      estado: "participacion",
      fecha: "2 Junio 2025",
      icono: Gamepad2,
      imagen: "/images/juegos-image.jpg" 
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Proyectos
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="md:flex">
                {/* Contenedor de imagen o enlace */}
                <div className="md:w-1/3 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center p-8">
                  <proyecto.icono className="text-blue-600" size={64} /> {}
                </div>
                
                {/* Contenido del proyecto */}
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {proyecto.link ? (
                          <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {proyecto.titulo}
                          </a>
                        ) : (
                          proyecto.titulo
                        )}
                      </h3>
                      <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                        proyecto.estado === 'finalizado' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {proyecto.tipo}
                      </span>
                    </div>
                    <ExternalLink 
                      className="text-gray-400 hover:text-blue-600 cursor-pointer"
                      size={20}
                      onClick={() => proyecto.imagen ? setSelectedImage(proyecto.imagen) : window.open(proyecto.link, '_blank', 'noopener,noreferrer')}
                    />
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{proyecto.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm flex items-center">
                    <Calendar className="mr-2" size={14} />
                    {proyecto.fecha}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para la imagen ampliada */}
        {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-full max-h-full p-4">
            <img 
              src={selectedImage} 
              alt="Ampliada" 
              className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg max-h-[90vh] w-auto h-auto rounded shadow-lg object-contain" 
            />
            <button 
            className="absolute top-2 right-2 text-white text-2xl"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Proyectos;