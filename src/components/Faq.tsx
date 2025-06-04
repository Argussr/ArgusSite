import { useState } from "react";
import { useInView } from "../utils/animations"; // ajuste o caminho se necessário
import { IoChevronDownSharp } from "react-icons/io5";

const faqs = [
  {
    question: "Como posso rastrear meu equipamento?",
    answer: "Você pode rastrear seu equipamento acessando a plataforma com seu login e senha. Todas as localizações e históricos estarão disponíveis no painel.",
  },
  {
    question: "Qual o prazo de ativação após a compra?",
    answer: "O prazo médio é de até 24 horas úteis após a confirmação do pagamento e envio dos dados do rastreador.",
  },
  {
    question: "Preciso de ajuda com a instalação, como faço?",
    answer: "Nosso suporte técnico está disponível via WhatsApp ou e-mail para auxiliar com a instalação e configuração do rastreador.",
  },
  {
    question: "A plataforma funciona em qualquer rastreador?",
    answer: "Funcionamos com a maioria dos rastreadores do mercado. Consulte nossa lista de compatibilidade ou entre em contato com o suporte.",
  },
  {
    question: "É possível configurar alertas na plataforma?",
    answer: "Sim! Você pode configurar alertas de velocidade, ignição, cerca eletrônica, entre outros, diretamente pelo painel da plataforma.",
  },
  {
    question: "Consigo ver o histórico de rotas do veículo?",
    answer: "Sim. A plataforma armazena o histórico de rotas percorridas pelo veículo por até 90 dias, com horários, velocidades e paradas.",
  },
  {
    question: "O sistema funciona em tempo real?",
    answer: "Sim. Nossa plataforma atualiza os dados do veículo em tempo real, com localização dinâmica no mapa.",
  },
  {
    question: "Posso acessar a plataforma pelo celular?",
    answer: "Sim! A plataforma é responsiva e pode ser acessada pelo navegador do celular ou por nosso aplicativo oficial.",
  },
  {
    question: "Qual a frequência de atualização da localização?",
    answer: "A frequência padrão é de 10 a 30 segundos, dependendo do modelo do rastreador e da cobertura da rede GSM.",
  },
  {
    question: "Preciso pagar alguma mensalidade?",
    answer: "Sim. A plataforma requer uma mensalidade para manter os serviços de rastreamento e suporte técnico ativos.",
  },
  {
    question: "Consigo rastrear mais de um veículo na mesma conta?",
    answer: "Sim. Você pode adicionar e monitorar múltiplos veículos em uma única conta, com acesso individualizado por veículo.",
  },
  {
    question: "O que acontece se o rastreador for desligado ou removido?",
    answer: "A plataforma emite um alerta se o rastreador for desligado ou desconectado da fonte de energia do veículo.",
  },
  {
    question: "A plataforma permite bloquear o veículo à distância?",
    answer: "Sim, se o seu modelo de rastreador tiver essa função e estiver corretamente instalado, é possível realizar o bloqueio remoto.",
  },
  {
    question: "A localização pode ficar imprecisa?",
    answer: "Em locais com baixa cobertura de rede ou sinal GPS fraco, a precisão pode ser reduzida momentaneamente.",
  },
  {
    question: "Qual o suporte oferecido após a compra?",
    answer: "Oferecemos suporte técnico contínuo via WhatsApp, e-mail e acesso a tutoriais em vídeo para te ajudar sempre que precisar.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="faq"
      className={`bg-primary-light py-12 px-4 md:px-16 transition-opacity duration-500 ${isInView ? "animate-fade-in-up" : "opacity-0"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-accent mb-4 text-center">
            FAQ & Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-secondary-light rounded-lg mx-auto mb-6"></div>
        </div>
        <div className="w-full mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="border rounded-lg overflow-hidden bg-accent shadow-lg hover:shadow-lg transition-shadow "
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center px-6 py-4 font-medium text-secondary-light text-left hover:bg-primary transition"
                >
                  <span>{faq.question}</span>
                  <IoChevronDownSharp
                    className={`text-primary-light text-xl transform transition-transform ${isActive ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>
                {isActive && (
                  <div className="px-6 py-4 text-secondary border-t bg-accent-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
