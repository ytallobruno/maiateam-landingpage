"use client";

import { CheckCircle } from "lucide-react";

export default function ResultsSection() {
  const results = [
    {
      name: "Ana Silva",
      result: "Perdeu 10kg em 4 meses",
      quote: "Nunca me senti melhor na minha vida!",
    },
    {
      name: "Carla Santos",
      result: "Ganhou 3kg de massa magra",
      quote: "Treinos inteligentes e acompanhamento real.",
    },
    {
      name: "Maria Costa",
      result: "Reduziu 8cm de cintura",
      quote: "O protocolo mudou minha relação com o treino.",
    },
    {
      name: "Julia Lima",
      result: "Perdeu 15kg em 6 meses",
      quote: "Metodologia que realmente funciona!",
    },
  ];

  return (
    <section
      id="results"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            <span className="text-green-400">Transformações</span> Reais
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Conheça algumas das histórias de sucesso das minhas alunas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-700 to-black border border-green-500/20 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)]"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-xl">
                  {result.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 text-white">
                {result.name}
              </h3>
              <div className="bg-green-500/10 rounded-lg p-3 mb-4">
                <p className="text-green-400 font-bold text-center">
                  {result.result}
                </p>
              </div>
              <p className="text-gray-300 text-center text-sm italic">
                {result.quote}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Você terá acesso à{" "}
              <span className="text-green-400">mesma metodologia</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As mesmas estratégias que usei com todas essas mulheres para obter
              esses resultados incríveis.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-400 text-black font-bold py-3 px-6 rounded-full">
              <CheckCircle className="w-5 h-5" />
              Metodologia Comprovada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
