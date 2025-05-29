import React from 'react';
import { Shield, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-10 text-secondary-light" />,
      title: 'Segurança',
      description: 'Priorizamos a proteção dos seus bens com tecnologia de ponta e monitoramento constante.'
    },
    {
      icon: <Clock className="w-12 h-10 text-secondary-light" />,
      title: 'Disponibilidade',
      description: 'Suporte técnico 24/7 para garantir que sua operação nunca fique desprotegida.'
    },
    {
      icon: <Award className="w-12 h-10 text-secondary-light" />,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade e a melhoria contínua de nossas soluções.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-accent-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Sobre a ARGUS</h2>
          <div className="w-24 h-1 bg-secondary-light mx-auto mb-6 rounded-sm"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Somos especialistas em soluções de rastreamento veicular e de cargas, 
            oferecendo tecnologia de ponta para garantir a segurança e eficiência 
            do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Equipe ARGUS" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Fornecer soluções tecnológicas inovadoras de rastreamento que 
              aumentem a segurança, reduzam custos e otimizem a gestão de frotas 
              e cargas, contribuindo para o sucesso dos nossos clientes.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Ser referência nacional em soluções de rastreamento, reconhecida 
              pela excelência, inovação e compromisso com a satisfação dos clientes.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mb-4">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
              {values.map((value, index) => (
                <div key={index} className="text-center p-2 rounded-lg bg-accent shadow-lg">
                  <div className="flex justify-center mb-3">{value.icon}</div>
                  <h4 className="font-bold text-primary mb-2">{value.title}</h4>
                  <p className="text-sm text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;