import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href='#início' className="flex items-center no-underline mb-4">
              <Logo size={40} />
              <div id='name-logo' className="font-bold text-xl">
                ARGUS
                {/* <span className="block text-xs font-medium text-accent-light">
                  Soluções em Rastreamento
                </span> */}
              </div>
            </a>
            <p className="text-accent mb-6">
              Fornecemos soluções avançadas de rastreamento para veículos e cargas, 
              garantindo segurança e eficiência para sua empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent hover:text-sky-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent hover:hover:text-sky-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent hover:text-rose-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-accent hover:text-sky-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Soluções', 'Benefícios', 'Depoimentos', 'FAQ', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-accent-light hover:text-primary transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Soluções</h3>
            <ul className="space-y-2">
              {[
                'Rastreamento de Veículos', 
                'Monitoramento de Frotas', 
                'Gestão de Motoristas', 
                'Relatórios Personalizados', 
                'Alertas em Tempo Real', 
                'Aplicativo Móvel'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#soluções" 
                    className="text-accent-light hover:text-primary transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Entre em Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" />
                <span className="text-accent-light">
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✉</span>
                <a href="mailto:contato@argus.com.br" className="text-accent-light hover:text-primary-light transition-colors">
                  contato@argus.com.br
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">☏</span>
                <a href="tel:+551155555555" className="text-accent-light hover:text-primary-light transition-colors">
                  (11) 5555-5555
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-light/80 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-light/60 text-sm text-center w-full">
            &copy; {new Date().getFullYear()} ARGUS Soluções em Rastreamento. Todos os direitos reservados.
          </p>
          {/* <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;