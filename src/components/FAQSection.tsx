"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como irei receber meu treino?",
      answer:
        "Você receberá seu treino via WhatsApp após me encaminhar todo material solicitado para elaboração do seu protocolo personalizado.",
    },
    {
      question: "Tenho acesso por quanto tempo?",
      answer:
        "Seu acesso é vitalício! Assim que adquirir, você terá o treino por tempo ilimitado e poderá permanecer com ele por quanto tempo desejar.",
    },
    {
      question: "Irei receber uma ficha genérica?",
      answer:
        "NÃO! Seu treino será construído do ZERO e feito sob medida para seus objetivos. Por isso todo material de fotos e anamnese é solicitado, para que sua experiência seja única.",
    },
    {
      question: "Posso enviar vídeos para correção?",
      answer:
        "Infelizmente, não. O protocolo é uma forma acessível de ter um treino prescrito por mim, mas não inclui correção de vídeos e feedbacks semanais, pois esse serviço é prestado na consultoria premium.",
    },
    {
      question: "Como funciona após o pagamento?",
      answer:
        "Após o pagamento, enviarei uma mensagem no seu WhatsApp solicitando todo material para construir seu treino e em 5 dias corridos retornarei seu protocolo completo.",
    },
    {
      question: "Terei suporte?",
      answer:
        "Sim! Você terá suporte para retirada de dúvidas referente à organização e execução do seu treino personalizado.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Perguntas <span className="text-green-400">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Tire todas suas dúvidas sobre o protocolo personalizado
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full bg-gradient-to-br from-gray-700 to-black border rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer ${
                  openFaq === index
                    ? "border-green-500/40"
                    : "border-green-500/20 hover:border-green-500/40"
                }`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-green-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-green-400 flex-shrink-0" />
                  )}
                </div>
                {openFaq === index && (
                  <div className="mt-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
