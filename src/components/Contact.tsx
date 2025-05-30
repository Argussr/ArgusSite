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
  const [isSubmitting, setIsSubmitting] = useState(false);

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Previne múltiplos envios
    if (isSubmitting) return;

    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await fetch("https://formsubmit.co/argussrastreamento@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
          body: JSON.stringify({
            "Nome": formData.name,       // "Name" → "Nome"
            "E-mail": formData.email,    // "Email" → "E-mail"
            "Telefone": formData.phone,  // "Phone" → "Telefone"
            "Mensagem": formData.message, // "Message" → "Mensagem"
            "_subject": "Novo contato do site Argus", // Assunto personalizado
            "_captcha": "false",
            "_template": "table",
            "Origem": "Formulário de Contato - Site Argus",
          }),
        });

        setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error("Erro ao enviar o formulário:", error);
      } finally {
        setIsSubmitting(false); // Garante que o estado é resetado mesmo em caso de erro
      }
    };


    return (
      <section id="contato" className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Entre em Contato</h2>
            <div className="w-24 h-1 bg-secondary-light rounded-lg mx-auto mb-6"></div>
            <p className="text-secondary max-w-2xl mx-auto">
              Estamos prontos para atender às suas necessidades de rastreamento veicular.
              Entre em contato conosco para uma demonstração ou para tirar suas dúvidas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-accent-light rounded-lg shadow-md p-8">
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-accent focus:ring-primary ${errors.name ? 'border-primary-light' : 'border-primary-dark'
                      }`}
                  />
                  {errors.name && <p className="text-primary-light text-xs mt-1">{errors.name}</p>}
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-accent focus:ring-primary ${errors.email ? 'border-primary-light' : 'border-primary-dark'
                      }`}
                  />
                  {errors.email && <p className="text-primary-light text-xs mt-1">{errors.email}</p>}
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-accent focus:ring-primary ${errors.phone ? 'border-primary-light' : 'border-primary-dark'
                      }`}
                  />
                  {errors.phone && <p className="text-primary-light text-xs mt-1">{errors.phone}</p>}
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
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 bg-accent  focus:ring-primary ${errors.message ? 'border-primary-light' : 'border-primary-dark'
                      }`}
                  ></textarea>
                  {errors.message && <p className="text-primary-light text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary hover:bg-primary-light text-accent hover:text-secondary py-3 px-6 rounded-md transition-all font-medium flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!isSubmitting && <Send size={18} className="ml-2" />}
                </button>
              </form>
            </div>

            <div className="flex flex-col">
              <div className="bg-primary text-accent rounded-lg shadow-md p-3 mb-6">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-accent/40 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-secondary-light" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Telefone</h4>
                      <p className="text-accent-light">(11) 5555-5555</p>
                      <p className="text-accent-light">(11) 98888-8888</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent/40 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-secondary-light" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Email</h4>
                      <p className="text-accent-light">contato@argus.com.br</p>
                      <p className="text-accent-light">suporte@argus.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent/40 p-3 rounded-full mr-4 ">
                      <MapPin className="w-6 h-6 text-secondary-light" />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary">Endereço</h4>
                      <p className="text-accent-light">
                        Av. Paulista, 1000 - Bela Vista<br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-light rounded-lg shadow-md p-8 flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-6">Horário de Funcionamento</h3>

                <div className="space-y-3">
                  <div className="flex justify-between border-b border-primary-light pb-2">
                    <span className="text-secondary font-medium">Segunda a Quinta</span>
                    <span className="text-primary font-bold">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-primary-light pb-2">
                    <span className="text-secondary font-medium">Sexta</span>
                    <span className="text-primary font-bold">8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary font-medium">Sábado e Domingo</span>
                    <span className="text-primary font-bold">Fechado</span>
                  </div>
                </div>

                {/* <div className="mt-6">
                <h4 className="font-bold text-primary mb-2">Suporte 24/7</h4>
                <p className="text-secondary">
                  Nosso suporte técnico está disponível 24 horas por dia, 
                  7 dias por semana para emergências.
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;