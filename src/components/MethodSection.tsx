"use client";
import { FileText, Camera, Calendar, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { usePromotion } from "@/hooks/usePromotion";

export default function MethodSection() {
    const { prices } = usePromotion();
    const steps = [
        {
            number: "01",
            icon: FileText,
            title: "Anamnese Completa",
            description: "Questionário detalhado para conhecer seus objetivos, rotina e nível de treinamento atual",
        },
        {
            number: "02",
            icon: Camera,
            title: "Avaliação Funcional",
            description:
                "Análise do seu físico, pontos fortes, fracos, flexibilidade e postura através de fotos guiadas",
        },
        {
            number: "03",
            icon: Calendar,
            title: "Mapeamento de Rotina",
            description: "Entendimento completo da sua agenda para criar um treino que se encaixe perfeitamente",
        },
        {
            number: "04",
            icon: Activity,
            title: "Análise Prévia",
            description: "Revisão do seu treino anterior para definir o ponto de partida ideal",
        },
    ];

    return (
        <motion.section
            id="method"
            className="bg-gradient-to-b from-black via-black to-gray-900 py-16 md:py-20 lg:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    className="mb-10 text-center md:mb-12 lg:mb-14"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1 text-sm font-semibold tracking-wide text-green-300">
                        Processo em 4 etapas
                    </span>
                    <h2 className="mb-5 mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:mt-5 md:text-5xl">
                        O que é o <span className="text-green-400">Protocolo Personalizado?</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                        Acesso a um treino exclusivo e sob medida por um valor acessível. Você passará pelo mesmo
                        processo das minhas consultorias premium.
                    </p>
                </motion.div>

                <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5 lg:mb-14 lg:grid-cols-4 lg:gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                className="relative h-full"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + index * 0.1,
                                }}
                            >
                                <div className="h-full rounded-2xl border border-green-500/20 bg-gradient-to-b from-zinc-900 to-black p-5 transition-colors duration-300 hover:border-green-400/40 md:p-6">
                                    <div className="mb-4 flex items-center justify-between gap-4 md:mb-5">
                                        <span className="text-xs font-semibold tracking-[0.2em] text-green-300/80">
                                            ETAPA {step.number}
                                        </span>
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400 text-black md:h-12 md:w-12">
                                            <Icon className="h-5 w-5 md:h-6 md:w-6" />
                                        </div>
                                    </div>
                                    <h3 className="mb-2.5 text-lg font-bold text-white md:mb-3 md:text-xl">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="absolute right-[-12px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-green-400/70 to-transparent lg:block" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-500/10 via-green-400/5 to-green-500/10 p-6 md:p-8"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.5,
                    }}
                >
                    <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:text-left">
                        <div>
                            <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                                <span className="text-green-400">Metodologia comprovada</span> que transformou 100+
                                mulheres
                            </h3>
                            <p className="text-base text-gray-300 md:text-lg">
                                Com um preço que <strong className="text-green-400">cabe no seu bolso</strong>
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm rounded-2xl border border-green-400/30 bg-green-400 px-4 py-3 text-center text-black sm:max-w-md sm:px-5 sm:py-3.5 lg:mx-0 lg:w-auto lg:max-w-none lg:text-left">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/70 sm:text-sm">
                                Valor normal: R$ 300+
                            </p>
                            <p className="mt-1 text-base font-extrabold sm:text-lg lg:text-xl">
                                A partir de: R${" "}
                                {typeof prices?.protocolo === "number"
                                    ? prices.protocolo.toFixed(2).replace(".", ",")
                                    : "--"}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
