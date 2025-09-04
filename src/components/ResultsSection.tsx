"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ResultsSection() {
  // Card de destaque da Catarina
  const featuredResult = {
    beforeImage: "/resultado0.webp",
    afterImage: "/resultado01.webp",
    name: "Catarina",
    result: "Quadríceps e posteriores: muito mais volume em 3 meses",
    quote: "Não faço dieta, apenas treino",
  };

  // Demais resultados
  const results = [
    {
      image: "/result2.webp",
      name: "Giovana",
      result: "Físico construído do zero em 2 anos",
      quote:
        "Era falsa magra, pouquíssima massa e MUITA gordura. Em 2 anos aprendemos a treinar e construímos um físico do zero.",
    },
    {
      image: "/result1.webp",
      name: "Luisa",
      result: "Glúteos transformados em 1 ano",
      quote:
        "Nunca me senti bem de biquíni/shorts; em 1 ano enfatizamos os glúteos e transformamos 'bunda' em glúteos de verdade.",
    },
    {
      image: "/resultado5.webp",
      name: "Vanessa",
      result: "Corte, detalhamento e volume em 3 meses",
      quote:
        "Aluna em processo de emagrecimento; em 3 meses melhoramos cortes, detalhamento e volume de quadríceps.",
    },
    {
      image: "/result3.webp",
      name: "Andresa",
      result: "Mais volume em 6 semanas",
      quote:
        "Após um período secando, em 6 semanas, comendo um pouco mais e focando no treino, trouxemos mais volume e um aspecto mais redondo.",
    },
    {
      image: "/result4.webp",
      name: "Maria Eduarda",
      result: "Mais volume e físico mais cheio em 8 semanas",
      quote:
        "Com um protocolo de 8 semanas aumentamos o volume dos glúteos e deixamos o físico com aspecto mais cheio.",
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

        {/* Card de Destaque da Catarina */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-400/20 to-green-600/20 border-2 border-green-400/40 rounded-3xl p-10 max-w-5xl mx-auto relative overflow-hidden">
            {/* Efeito de brilho */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Imagens antes e depois */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-6 justify-center items-center">
                <div className="relative">
                  <Image
                    src={featuredResult.beforeImage}
                    alt="Catarina"
                    width={200}
                    height={280}
                    className="rounded-2xl object-cover h-64 w-52 md:h-72 md:w-56"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full border border-green-400/30">
                    Antes/Depois
                  </div>
                </div>
                <div className="flex md:flex-col flex-row items-center flex-shrink-0">
                  <div className="w-10 h-0.5 md:w-0.5 md:h-10 bg-green-400"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full mx-3 md:mx-0 md:my-3"></div>
                  <div className="w-10 h-0.5 md:w-0.5 md:h-10 bg-green-400"></div>
                </div>
                <div className="relative">
                  <Image
                    src={featuredResult.afterImage}
                    alt="Catarina"
                    width={200}
                    height={280}
                    className="rounded-2xl object-cover h-64 w-52 md:h-72 md:w-56"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-400 text-black text-xs px-3 py-1 rounded-full font-bold">
                    Antes/Depois
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <span className="bg-green-400 text-black font-bold py-2 px-4 rounded-full text-sm inline-block">
                    ⭐ TRANSFORMAÇÃO DESTAQUE
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                  {featuredResult.name}
                </h3>
                <div className="text-xl md:text-2xl font-bold text-green-400 mb-4">
                  {featuredResult.result}
                </div>
                <p className="text-gray-300 text-lg mb-6 italic">
                  &ldquo;{featuredResult.quote}&rdquo;
                </p>
                <div className="bg-gradient-to-r from-green-400 to-green-500 text-black font-bold py-4 px-6 rounded-2xl text-lg">
                  🔥 Quer ter um resultado como esse?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mb-12 max-w-4xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="cursor-default bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(74,222,128,0.08)] group w-full max-w-[216px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Imagem de transformação */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={result.image}
                  alt={`Transformação de ${result.name}`}
                  width={216}
                  height={288}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-green-400 text-black font-bold py-1 px-2 rounded-full text-center text-xs">
                    {result.result}
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-2">
                <h3 className="text-sm font-bold mb-1 text-white text-center">
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
