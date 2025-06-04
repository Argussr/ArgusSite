import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="início" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.9)), url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-4 leading-tight">
            Tecnologia e Segurança para Monitorar o que é Seu!
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Rastreie seus veículos em tempo real com precisão e confiabilidade. 
            Nossa plataforma oferece o monitoramento avançado que sua empresa precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href='#send_message' className="bg-primary hover:bg-accent/90 text-accent hover:text-secondary/90 py-3 px-6 rounded-md transition-all transform hover:scale-105 font-medium flex items-center justify-center">
              Solicitar Demonstração
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a href='#' className="border-2 border-accent text-accent py-3 px-6 rounded-md transition-all hover:bg-accent/10 hover:border-primary hover:text-primary font-medium">
              Conheça a Plataforma
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#sobre" 
          className="animate-bounce bg-accent/10 p-2 rounded-full hover:bg-accent/20  transition-colors"
        >
          <svg 
            className="w-6 h-6 text-accent hover:text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;