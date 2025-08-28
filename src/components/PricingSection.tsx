"use client";

import { CheckCircle, Phone } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="purchase"
      className="py-24 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Quanto vai <span className="text-green-400">investir?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pode parecer mentira, mas você receberá o melhor treino da sua vida,
            com explicação de métodos avançados e vídeos de cada exercício.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-gray-700 to-black border-2 border-green-400 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-400 to-green-600 text-black text-center py-2 font-bold">
              OFERTA LIMITADA
            </div>

            <div className="text-center mt-6">
              <div className="mb-4">
                <span className="text-gray-400 text-xl line-through">
                  De R$ 300,00
                </span>
              </div>
              <div className="text-5xl font-bold text-green-400 mb-2">
                R$ 149,90
              </div>
              <div className="text-gray-300 mb-6">
                Pagamento único • Acesso vitalício
              </div>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Treino 100% personalizado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Vídeos de todos os exercícios
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Métodos avançados explicados
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Suporte para dúvidas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Entrega em 5 dias</span>
                </div>
              </div>

              <a
                href="https://pay.kiwify.com.br/Xcq6j4S"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 rounded-full text-lg transition-all duration-300 shadow-[0_10px_25px_rgba(74,222,128,0.25)] mb-4 border-none cursor-pointer hover:scale-105 text-center no-underline"
              >
                QUERO MEU PROTOCOLO
              </a>

              <div className="text-center">
                <a
                  href="https://wa.me/5521972179585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-green-400 transition-colors duration-200 underline"
                >
                  Ou pague via PIX com desconto
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5521972179585"
            target="_blank"
            className="inline-flex items-center gap-3 bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(22,163,74,0.25)] no-underline hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
