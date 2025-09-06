"use client";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen bg-black flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Coluna esquerda - Conteúdo */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.8,
              delay: isInView ? 0.2 : 0,
              ease: "easeOut",
            }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6"
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{
                y: isInView ? 0 : -50,
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
              }}
              transition={{
                duration: 0.6,
                delay: isInView ? 0.6 : 0,
                ease: "easeOut",
              }}
            >
              <Trophy className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">
                Educador Físico
              </span>
            </motion.div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Conheça o
              <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Lucas Maia
              </span>
            </h2>

            {/* Descrições */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Formado em{" "}
                <strong className="text-white">Educação Física</strong> pela
                Universidade Federal Rural do Rio de Janeiro e{" "}
                <strong className="text-green-400">
                  atleta de fisiculturismo
                </strong>
                , sendo campeão Overall 3 vezes da minha categoria.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Já atendi{" "}
                <strong className="text-green-400 animate-pulse">
                  mais de 100 mulheres
                </strong>{" "}
                dentro da minha consultoria, que atualmente possui mais de{" "}
                <strong className="text-white">50 alunas ativas</strong>.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Meu objetivo com esse protocolo é ofertar um treino
                individualizado e direcionado para seus objetivos com um{" "}
                <strong className="text-green-400">valor acessível</strong>,
                pois sei que muitas pessoas ainda não podem investir em uma
                consultoria completa.
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-8 p-4 md:p-6 bg-gradient-to-br from-gray-700/50 to-black/50 rounded-2xl border border-green-500/20">
              {[
                { number: "100+", label: "Transformações" },
                { number: "50+", label: "Alunas Ativas" },
                { number: "3x", label: "Campeão" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-bold text-green-400 animate-pulse"
                    style={{
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita - Card do Lucas */}
          <motion.div
            className="flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
            transition={{
              duration: 0.8,
              delay: isInView ? 0.4 : 0,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              <div className="w-80 md:w-96 lg:w-80 h-80 md:h-96 lg:h-80 bg-gradient-to-br from-green-400/15 to-green-600/15 border border-green-400/30 rounded-3xl overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(74,222,128,0.2)] ">
                <div className="relative w-full h-full">
                  <Image
                    src="/LucasMaiaPersonal.webp"
                    alt="Lucas Maia - Personal Coach"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                  {/* Overlay gradiente para melhor legibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Texto sobre a imagem */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    {/* <p className="text-white font-bold text-xl drop-shadow-lg">
                      Lucas Maia
                    </p>
                    <p className="text-green-400 text-sm font-medium drop-shadow-lg">
                      Seu Personal Coach
                    </p> */}
                  </div>
                </div>
              </div>

              {/* Badge flutuante */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br animate-bounce rounded-lg w-15 h-15 flex items-center justify-center  shadow-lg"
                initial={{ y: -80, opacity: 0, scale: 0 }}
                animate={{
                  y: isInView ? 0 : -80,
                  opacity: isInView ? 1 : 0,
                  scale: isInView ? 1 : 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: isInView ? 0.8 : 0,
                  ease: "easeOut",
                }}
              >
                <Trophy className="w-7 h-7 text-green-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 40px rgba(74, 222, 128, 0.2);
          }
          100% {
            box-shadow: 0 0 80px rgba(74, 222, 128, 0.4);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }

          div[style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          div[style*="320px"] {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
