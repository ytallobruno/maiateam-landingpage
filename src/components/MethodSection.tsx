"use client";
import { FileText, Camera, Calendar, Activity, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePromotion } from "@/hooks/usePromotion";

export default function MethodSection() {
    const { prices } = usePromotion();
    const steps = [
        {
            icon: FileText,
            title: "Anamnese Completa",
            description: "Questionário detalhado para conhecer seus objetivos, rotina e nível de treinamento atual",
        },
        {
            icon: Camera,
            title: "Avaliação Funcional",
            description:
                "Análise do seu físico, pontos fortes, fracos, flexibilidade e postura através de fotos guiadas",
        },
        {
            icon: Calendar,
            title: "Mapeamento de Rotina",
            description: "Entendimento completo da sua agenda para criar um treino que se encaixe perfeitamente",
        },
        {
            icon: Activity,
            title: "Análise Prévia",
            description: "Revisão do seu treino anterior para definir o ponto de partida ideal",
        },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px -20% 0px",
    });

    return (
        <motion.section
            ref={ref}
            id="method"
            className="py-24 bg-gradient-to-b from-black to-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        O que é o <span className="text-green-400">Protocolo Personalizado?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Acesso a um treino exclusivo e sob medida por um valor acessível. Você passará pelo mesmo
                        processo das minhas consultorias premium.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{
                                    x: isInView ? 0 : -50,
                                    opacity: isInView ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: isInView ? 0.4 + index * 0.2 : 0,
                                }}
                            >
                                <div className="bg-gradient-to-br from-gray-700 to-black border border-green-500/20 rounded-2xl p-6 h-full transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)]">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                                        <Icon className="w-8 h-8 text-black" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{
                                            x: isInView ? 0 : -20,
                                            opacity: isInView ? 1 : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: isInView ? 0.6 + index * 0.2 : 0,
                                        }}
                                    >
                                        <ArrowRight className="w-6 h-6 text-green-400" />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="bg-gradient-to-r from-green-400/10 to-green-600/10 border border-green-500/30 rounded-3xl p-8 text-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{
                        y: isInView ? 0 : 30,
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: isInView ? 1.2 : 0,
                    }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        <span className="text-green-400">Metodologia comprovada</span> que transformou 100+ mulheres
                    </h3>
                    <p className="text-xl text-gray-300 mb-6">
                        Com um preço que <strong className="text-green-400">cabe no seu bolso</strong>
                    </p>
                    <div className="flex justify-center">
                        <div className="bg-green-400 text-black font-bold py-3 px-6 rounded-full text-lg">
                            Valor normal: R$ 300+ → A partir de: R$ {prices?.protocolo.toFixed(2).replace(".", ",")}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
