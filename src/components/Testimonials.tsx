import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    company: 'Transportadora Express',
    position: 'Diretor de Operações',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Desde que implementamos o sistema da ARGUS, reduzimos em 30% os custos com combustível e melhoramos nossa segurança. O suporte técnico é excelente e sempre pronto para ajudar.'
  },
  {
    name: 'Maria Oliveira',
    company: 'Logística MO',
    position: 'CEO',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'A plataforma de rastreamento da ARGUS nos permitiu aumentar a eficiência das entregas e melhorar a satisfação dos nossos clientes. O investimento valeu cada centavo.'
  },
  {
    name: 'Carlos Mendes',
    company: 'CM Distribuição',
    position: 'Gerente de Frota',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text: 'Após várias tentativas com outras empresas, finalmente encontramos na ARGUS a solução completa que precisávamos. O sistema é intuitivo e as informações são precisas.'
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">O Que Nossos Clientes Dizem</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista. 
            Confira alguns depoimentos de empresas que já utilizam nossas soluções.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" 
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative bg-gray-50 rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FF6E31" color="#FF6E31" />
                  ))}
                </div>
                <p className="text-secondary italic mb-4">"{testimonials[current].text}"</p>
                <h4 className="font-bold text-primary">{testimonials[current].name}</h4>
                <p className="text-sm text-secondary">
                  {testimonials[current].position}, {testimonials[current].company}
                </p>
              </div>
            </div>

            {/* Quote mark */}
            <div className="absolute top-6 right-6 text-gray-200 opacity-50">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
              </svg>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md rounded-full p-2 text-primary hover:text-accent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md rounded-full p-2 text-primary hover:text-accent transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-70">
          {['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D'].map((company, index) => (
            <div key={index} className="text-center">
              <div className="h-16 flex items-center justify-center">
                <div className="text-2xl font-bold text-gray-400">{company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;