"use client";

import { CheckCircle, Play } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function WorkoutPreviewSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  const handleVideoClick = () => {
    setIsPlaying(!isPlaying);
  };

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
            Veja como é a{" "}
            <span className="text-green-400">planilha completa</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Assista ao vídeo abaixo para visualizar um exemplo da planilha que
            você receberá
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-gray-700 to-black border border-green-500/20 rounded-3xl p-8 max-w-5xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0.9,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: isInView ? 0.4 : 0 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{
                x: isInView ? 0 : -50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: isInView ? 0.6 : 0 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                O que está incluído:
              </h3>
              <ul className="space-y-4">
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
              <p className="text-sm text-green-400 mt-6 font-semibold">
                Mais completa que essa, você não vai encontrar!
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{
                x: isInView ? 0 : 50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.6, delay: isInView ? 0.8 : 0 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-green-500/30">
                <div
                  className="relative aspect-video bg-black cursor-pointer group"
                  onClick={handleVideoClick}
                >
                  {!isPlaying ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10 flex items-center justify-center">
                        <div className="bg-green-500/90 rounded-full p-4 group-hover:bg-green-400 transition-all duration-300 group-hover:scale-110">
                          <Play className="w-8 h-8 text-black ml-1" />
                        </div>
                      </div>
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://img.youtube.com/vi/rBELaV0ovl0/0.jpg')",
                        }}
                      />
                    </>
                  ) : (
                    <iframe
                      ref={videoRef}
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/rBELaV0ovl0?autoplay=1&rel=0&modestbranding=1"
                      title="Planilha de Treino - Exemplo Completo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              </div>
              <p className="text-center text-sm text-gray-400 mt-4">
                {!isPlaying
                  ? "Clique para assistir ao vídeo"
                  : "Vídeo da planilha completa"}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
