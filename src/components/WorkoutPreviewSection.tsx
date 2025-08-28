"use client";

import { CheckCircle, Play } from "lucide-react";

export default function WorkoutPreviewSection() {
  return (
    <section id="preview" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Quer ver como é a{" "}
            <span className="text-green-400">planilha completa?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Clique no botão abaixo para visualizar um exemplo da planilha que
            você receberá
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-700 to-black border border-green-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                O que está incluído:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Exercícios detalhados com vídeos
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Métodos avançados explicados
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Diretrizes completas de treinamento
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Alongamentos e mobilidade
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Acesso vitalício</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="#preview"
                className="bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(74,222,128,0.25)] inline-flex items-center gap-2 hover:scale-105 no-underline"
              >
                <Play className="w-5 h-5" />
                Ver Planilha Exemplo
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Mais completa que essa, você não vai encontrar!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
