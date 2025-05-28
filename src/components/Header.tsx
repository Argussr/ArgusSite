import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size={isScrolled ? 40 : 48} />
          <div className={`ml-3 font-bold text-xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
            ARGUS
            <span className={`block text-xs font-medium ${isScrolled ? 'text-secondary' : 'text-gray-200'}`}>
              Soluções em Rastreamento
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Sobre', 'Soluções', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium text-sm hover:text-accent transition-colors ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium">
            Solicitar Demonstração
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 flex flex-col space-y-3">
          {['Início', 'Sobre', 'Soluções', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-secondary hover:text-accent py-2 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="bg-accent hover:bg-accent/90 text-white py-2 px-4 rounded-md transition-colors text-sm font-medium w-full mt-2">
            Solicitar Demonstração
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;