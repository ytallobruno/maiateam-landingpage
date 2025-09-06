"use client";

import { CheckCircle, Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WorkoutPreviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={ref}
      id="preview"
      className="py-24 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Quer ver como é a{" "}
            <span className="text-green-400">planilha completa?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Clique no botão abaixo para visualizar um exemplo da planilha que
            você receberá
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-700 to-black border border-green-500/20 rounded-3xl p-8 max-w-4xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0.9,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: isInView ? 0.4 : 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isInView ? 0 : -50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: isInView ? 0.6 : 0 }}
            >
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
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: isInView ? 0 : 50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: isInView ? 0.8 : 0 }}
            >
              <a
                href="https://youtu.be/rBELaV0ovl0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(74,222,128,0.25)] inline-flex items-center gap-2 hover:scale-105 no-underline"
              >
                <Play className="w-5 h-5" />
                Ver Planilha Exemplo
              </a>
              <p className="text-sm text-gray-400 mt-4">
                Mais completa que essa, você não vai encontrar!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
