import React from 'react';
import { 
  User, 
  Home, 
  BookOpen, 
  FolderOpen, 
  GraduationCap, 
  Mail,
  Menu,
  X
} from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'sobre-mi', label: 'Sobre Mí', icon: User },
    { id: 'cursos', label: 'Cursos', icon: BookOpen },
    { id: 'proyectos', label: 'Proyectos', icon: FolderOpen },
    { id: 'educacion', label: 'Educación', icon: GraduationCap },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            Fernando Vásquez
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  activeSection === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveSection(id);
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-colors mb-2 ${
                  activeSection === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;