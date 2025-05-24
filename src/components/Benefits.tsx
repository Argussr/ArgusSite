import React from 'react';
import { DollarSign, Shield, BarChart, Clock, Car, Settings } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-accent" />,
      title: 'Redução de Custos',
      description: 'Economize em combustível, manutenção e seguros através da otimização de rotas e monitoramento de condução.'
    },
    {
      icon: <Shield className="w-10 h-10 text-accent" />,
      title: 'Maior Segurança',
      description: 'Proteja sua frota contra roubos com alertas em tempo real e localização precisa dos veículos.'
    },
    {
      icon: <BarChart className="w-10 h-10 text-accent" />,
      title: 'Aumento de Produtividade',
      description: 'Otimize o tempo de entrega e reduza o tempo ocioso com planejamento eficiente de rotas.'
    },
    {
      icon: <Clock className="w-10 h-10 text-accent" />,
      title: 'Economia de Tempo',
      description: 'Automatize processos de gestão de frota e gere relatórios com apenas alguns cliques.'
    },
    {
      icon: <Car className="w-10 h-10 text-accent" />,
      title: 'Manutenção Preventiva',
      description: 'Prolongue a vida útil dos veículos com alertas de manutenção baseados em quilometragem e uso.'
    },
    {
      icon: <Settings className="w-10 h-10 text-accent" />,
      title: 'Gestão Eficiente',
      description: 'Tome decisões baseadas em dados reais, melhorando a gestão da sua frota e otimizando recursos.'
    }
  ];

  return (
    <section id="benefícios" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefícios</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-200">
            Descubra como nossas soluções de rastreamento podem transformar 
            sua operação, trazendo mais segurança, eficiência e economia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-primary-dark p-6 rounded-lg border border-gray-700 hover:border-accent transition-all transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-light mb-4 mx-auto">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-300 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Pronto para transformar a gestão da sua frota?
          </h3>
          <button className="bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-md transition-all transform hover:scale-105 font-medium inline-flex items-center">
            Solicitar Demonstração
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;