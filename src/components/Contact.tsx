import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Here you would typically send the data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Entre em Contato</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Estamos prontos para atender às suas necessidades de rastreamento veicular. 
            Entre em contato conosco para uma demonstração ou para tirar suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie uma Mensagem</h3>
            
            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                  Nome Completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1">
                  Telefone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">
                  Mensagem*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition-all font-medium flex items-center justify-center"
              >
                Enviar Mensagem
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-primary text-white rounded-lg shadow-md p-8 mb-6">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telefone</h4>
                    <p className="text-gray-200">(11) 5555-5555</p>
                    <p className="text-gray-200">(11) 98888-8888</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-200">contato@argus.com.br</p>
                    <p className="text-gray-200">suporte@argus.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-accent/20 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Endereço</h4>
                    <p className="text-gray-200">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-6">Horário de Funcionamento</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-secondary font-medium">Segunda a Sexta</span>
                  <span className="text-primary font-bold">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-secondary font-medium">Sábado</span>
                  <span className="text-primary font-bold">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary font-medium">Domingo</span>
                  <span className="text-primary font-bold">Fechado</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-bold text-primary mb-2">Suporte 24/7</h4>
                <p className="text-secondary">
                  Nosso suporte técnico está disponível 24 horas por dia, 
                  7 dias por semana para emergências.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;