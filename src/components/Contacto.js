import React from 'react';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react';

const Contacto = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              ¡Conversemos!
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Estoy disponible para nuevas oportunidades y colaboraciones. 
              No dudes en contactarme para cualquier proyecto o consulta.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Phone className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Teléfono</p>
                  <p className="text-gray-600">+51 976 596 107</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Correo electrónico</p>
                  <p className="text-gray-600">fernandovasquezchavez24@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Facebook className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Facebook</p>
                  <a 
                    href="https://www.facebook.com/share/1AqFXZW28u/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ubicación</p>
                  <p className="text-gray-600">Jose Gálves-Chaquil, Celendín, Cajamarca, Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Envíame un mensaje
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escribe tu mensaje"
                  rows={4}
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
