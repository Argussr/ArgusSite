import React from 'react';
import { Map, BarChart2, BellRing, Truck, Users, File } from 'lucide-react';

const Solutions: React.FC = () => {
  const features = [
    {
      icon: <Map className="w-12 h-12 text-accent" />,
      title: 'Monitoramento em Tempo Real',
      description: 'Acompanhe a localização exata dos seus veículos 24 horas por dia, 7 dias por semana.'
    },
    {
      icon: <BarChart2 className="w-12 h-12 text-accent" />,
      title: 'Relatórios Personalizados',
      description: 'Gere relatórios detalhados sobre rotas, paradas, consumo de combustível e muito mais.'
    },
    {
      icon: <BellRing className="w-12 h-12 text-accent" />,
      title: 'Alertas Inteligentes',
      description: 'Receba notificações sobre desvios de rota, excesso de velocidade ou possíveis roubos.'
    },
    {
      icon: <Truck className="w-12 h-12 text-accent" />,
      title: 'Compatibilidade Universal',
      description: 'Nossa solução funciona com diversos tipos de veículos, desde carros até caminhões e máquinas pesadas.'
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: 'Gestão de Motoristas',
      description: 'Avalie o desempenho dos seus motoristas com métricas de condução segura e econômica.'
    },
    {
      icon: <File className="w-12 h-12 text-accent" />,
      title: 'Documentação Digital',
      description: 'Gerencie documentos relacionados aos veículos e motoristas diretamente na plataforma.'
    }
  ];

  return (
    <section id="soluções" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nossas Soluções</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Conheça nossa plataforma completa de rastreamento e monitoramento, 
            desenvolvida para otimizar a gestão e segurança da sua frota.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7709906/pexels-photo-7709906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dashboard da plataforma" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  Plataforma intuitiva e fácil de usar
                </h3>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Plataforma completa de rastreamento
            </h3>
            <p className="text-secondary mb-6 leading-relaxed">
              Nossa plataforma de rastreamento oferece uma solução completa para monitoramento 
              de veículos e cargas. Com interface intuitiva e recursos avançados, você terá 
              controle total sobre sua frota, podendo acessar informações em tempo real de 
              qualquer lugar, a qualquer momento.
            </p>
            <ul className="space-y-2">
              {[
                'Interface amigável e intuitiva', 
                'Acesso via web ou aplicativo móvel', 
                'Atualizações em tempo real', 
                'Histórico completo de rotas e eventos'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-all transform hover:scale-105 font-medium self-start">
              Conheça a Plataforma
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;