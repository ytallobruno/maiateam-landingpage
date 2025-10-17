"use client";
import { ArrowRight, Play, Star, Trophy, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
    const [particles, setParticles] = useState<Array<{ left: number; top: number; duration: number; delay: number }>>(
        []
    );

    useEffect(() => {
        const newParticles = Array.from({ length: 20 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setParticles(newParticles);
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-10% 0px -10% 0px",
    });

    return (
        <motion.section
            ref={ref}
            id="hero"
            className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-black flex items-center relative overflow-hidden pt-28 md:mt-0 pb-12 md:pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Animated background grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')",
                }}
            />

            {/* Floating particles */}
            {particles.map((particle, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-bounce"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}

            {/* Container principal */}
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
                    {/* Coluna esquerda - Conteúdo */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                        transition={{
                            duration: 0.8,
                            delay: isInView ? 0.4 : 0,
                            ease: "easeOut",
                        }}
                    >
                        {/* Badge do troféu */}
                        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 cursor-pointer transition-transform duration-200 hover:scale-105 mx-auto lg:mx-0">
                            <Trophy className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-medium">Campeão Overall 3x</span>
                        </div>

                        {/* Título principal */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                            Transforme seu
                            <br />
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
                                corpo e mente
                            </span>
                            com ciência
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                            Protocolo de treino personalizado que já transformou mais de 100 mulheres.
                            <br className="hidden sm:block" />
                            Metodologia comprovada a partir de{" "}
                            <strong className="text-green-400 animate-pulse">R$ 149,90</strong>
                        </p>

                        {/* Botões */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 mb-12 mx-auto lg:mx-0 max-w-md sm:max-w-none justify-center lg:justify-start"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                            transition={{
                                duration: 0.6,
                                delay: isInView ? 0.6 : 0,
                                ease: "easeOut",
                            }}
                        >
                            <a
                                href="#purchase"
                                className="bg-gradient-to-r from-green-400 to-green-600 text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 shadow-lg shadow-green-400/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-400/40 justify-center"
                            >
                                <span>Quero Meu Treino</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href="#method"
                                className="border-2 border-green-400 text-green-400 font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-200 hover:bg-green-400 hover:text-black hover:scale-105 justify-center"
                            >
                                <Play className="w-5 h-5" />
                                <span>Ver Como Funciona</span>
                            </a>
                        </motion.div>

                        {/* Estatísticas */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-400 justify-center lg:justify-start"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
                            transition={{
                                duration: 0.6,
                                delay: isInView ? 0.8 : 0,
                                ease: "easeOut",
                            }}
                        >
                            <div className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-green-400">
                                <Users className="w-5 h-5 text-green-400" />
                                <span>100+ Transformações</span>
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-green-400">
                                <Star className="w-5 h-5 text-green-400" />
                                <span>Avaliação 5.0</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Coluna direita - Card do Lucas */}
                    <motion.div
                        className="flex justify-center mb-8 lg:mb-0"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                        transition={{
                            duration: 0.8,
                            delay: isInView ? 0.5 : 0,
                            ease: "easeOut",
                        }}
                    >
                        <div className="relative group">
                            {/* Card principal com foto do Lucas */}
                            <div className="w-80 md:w-96 lg:w-80 h-80 md:h-96 lg:h-80 bg-gradient-to-br from-green-400/15 to-green-600/15 border border-green-400/30 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-green-400/20 relative">
                                {/* Imagem de perfil do Lucas */}
                                <Image
                                    src="/LucasMaiaPerfil.webp"
                                    alt="Lucas Maia - Educador Físico"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Gradiente preto de baixo para cima */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                {/* Textos sobrepostos */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-center pointer-events-none">
                                    <p className="text-green-400 font-semibold text-lg mb-1">Lucas Maia</p>
                                    <p className="text-gray-300 text-sm">Educador Físico & Coach</p>
                                </div>
                            </div>

                            {/* Badge de alunas ativas */}
                            <div className="absolute -bottom-4 -left-4 bg-black/80 border border-green-400/30 rounded-xl px-4 py-2 backdrop-blur-sm cursor-pointer transition-transform duration-200 hover:scale-110">
                                <p className="text-green-400 font-bold text-sm m-0">50+ alunas ativas</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes glow {
                    0%,
                    100% {
                        box-shadow: 0 0 40px rgba(74, 222, 128, 0.2);
                    }
                    50% {
                        box-shadow: 0 0 80px rgba(74, 222, 128, 0.4);
                    }
                }

                @media (max-width: 1024px) {
                    .grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem !important;
                        text-align: center;
                    }
                }

                @media (min-width: 641px) and (max-width: 1024px) {
                    .min-h-[80vh] {
                        min-height: 60vh !important;
                    }
                }

                @media (max-width: 640px) {
                    .w-80 {
                        width: 280px !important;
                        height: 280px !important;
                    }
                }
            `}</style>
        </motion.section>
    );
}
