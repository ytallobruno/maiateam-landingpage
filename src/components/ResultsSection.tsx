"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
  const results = [
    {
      image: "/result1.webp",
      name: "Ana Silva",
      result: "Perdeu 10kg em 4 meses",
      quote: "Nunca me senti melhor na minha vida!",
    },
    {
      image: "/result2.webp",
      name: "Carla Santos",
      result: "Ganhou 3kg de massa magra",
      quote: "Treinos inteligentes e acompanhamento real.",
    },
    {
      image: "/result3.webp",
      name: "Maria Costa",
      result: "Reduziu 8cm de cintura",
      quote: "O protocolo mudou minha relação com o treino.",
    },
    {
      image: "/result4.webp",
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
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(74,222,128,0.08)] group"
            >
              {/* Imagem de transformação */}
              <div className="relative h-[28rem] overflow-hidden">
                <Image
                  src={result.image}
                  alt={`Transformação de ${result.name}`}
                  width={300}
                  height={448}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-green-400 text-black font-bold py-2 px-3 rounded-full text-center text-xs">
                    {result.result}
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-white text-center">
                  {result.name}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed italic text-center">
                  &ldquo;{result.quote}&rdquo;
                </p>
              </div>
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
