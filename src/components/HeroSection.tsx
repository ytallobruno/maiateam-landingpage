"use client";
import { ArrowRight, Play, Star, Trophy, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { usePromotion } from "@/hooks/usePromotion";

const heroContainer: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
            staggerChildren: 0.08,
        },
    },
};

const heroItem: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HeroSection() {
    const { isBlackFriday, savings, prices } = usePromotion();
    const transformacoes = 200;

    return (
        <motion.section
            id="hero"
            className="relative overflow-hidden bg-surface-base pb-12 pt-24 md:pb-16 md:pt-28 lg:pb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroContainer}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_72%_18%,rgba(34,197,94,0.2),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-green-400/10 to-transparent" />

            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-4 sm:px-6 md:min-h-[calc(100vh-5rem)]">
                <div className="grid w-full gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                    <motion.div className="text-center lg:text-left" variants={heroItem}>
                        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-stroke-medium bg-surface-elevated px-3.5 py-1.5 lg:mx-0 md:mb-5 md:px-4 md:py-2">
                            <Trophy className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-medium">Campeão Overall 3x</span>
                        </div>

                        {isBlackFriday && (
                            <a
                                href="#pricing"
                                className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 font-bold text-black no-underline lg:mx-0 md:mb-6"
                            >
                                <Sparkles className="w-4 h-4" />
                                <span>⚡ Até R$ {savings?.platinum.toFixed(0)} OFF em Consultorias</span>
                            </a>
                        )}

                        <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
                            Transforme seu
                            <br />
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent block">
                                corpo e mente
                            </span>
                            com ciência
                        </h1>

                        <p className="mx-auto mb-7 max-w-2xl text-base leading-relaxed text-text-secondary lg:mx-0 sm:text-lg md:mb-9 md:text-xl">
                            Protocolo de treino personalizado que já transformou mais de {transformacoes} mulheres.
                            <br className="hidden sm:block" />
                            Metodologia comprovada a partir de{" "}
                            <strong className="text-green-400">
                                R$ {prices?.protocolo.toFixed(2).replace(".", ",")}
                            </strong>
                        </p>

                        <motion.div
                            className="mb-8 flex max-w-md flex-col justify-center gap-3.5 sm:max-w-none sm:flex-row sm:gap-4 lg:justify-start md:mb-10"
                            variants={heroItem}
                        >
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 px-7 py-3.5 font-bold text-black shadow-[0_14px_32px_rgba(34,197,94,0.28)] transition-all duration-200 hover:brightness-105 md:px-8 md:py-4"
                            >
                                <span>Quero Meu Treino</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a
                                href={isBlackFriday ? "#pricing" : "#preview"}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-400/60 bg-white/[0.02] px-7 py-3.5 font-bold text-green-300 transition-all duration-200 hover:border-green-300 hover:bg-green-400/10 md:px-8 md:py-4"
                            >
                                <Play className="w-5 h-5" />
                                <span>{isBlackFriday ? "Ver Ofertas BF" : "Ver Como Funciona"}</span>
                            </a>
                        </motion.div>

                        <div className="flex flex-col items-center justify-center gap-4 text-sm text-text-tertiary sm:flex-row sm:gap-6 sm:text-base lg:justify-start">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-green-400" />
                                <span>{transformacoes}+ Transformações</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-green-400" />
                                <span>Avaliação 5.0</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="flex justify-center lg:justify-end" variants={heroItem}>
                        <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px]">
                            <div className="relative">
                                <div className="rounded-[2rem] border border-stroke-medium bg-surface-elevated p-3 shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
                                    <div className="relative overflow-hidden rounded-[1.5rem] border border-green-400/30">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
                                        <Image
                                            src="/LucasMaiaPerfil.webp"
                                            alt="Lucas Maia, personal trainer online para mulheres com foco em treino personalizado"
                                            width={420}
                                            height={540}
                                            className="h-[390px] w-full object-cover object-top sm:h-[440px] lg:h-[470px]"
                                            priority
                                        />
                                        <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-left sm:p-6">
                                            <p className="text-xl font-semibold text-green-300">Lucas Maia</p>
                                            <p className="text-sm text-text-secondary">Educador Físico & Coach</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -left-2 top-4 rounded-xl border border-green-400/30 bg-surface-focal/90 px-3 py-2.5 backdrop-blur-sm sm:-left-3 sm:top-6 sm:rounded-2xl sm:px-4 sm:py-3">
                                    <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                                        alunas ativas
                                    </p>
                                    <p className="text-xl font-bold text-green-300">95+</p>
                                </div>

                                <div className="absolute -right-1 bottom-4 z-30 rounded-xl border border-white/10 bg-black/85 px-3 py-2.5 backdrop-blur-sm sm:-right-2 sm:bottom-6 sm:rounded-2xl sm:px-4 sm:py-3">
                                    <p className="text-xs uppercase tracking-[0.16em] text-text-secondary">
                                        resultados reais
                                    </p>
                                    <p className="text-xl font-bold text-white">{transformacoes}+</p>
                                </div>
                            </div>

                            <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-text-secondary sm:mt-3 sm:px-5 sm:py-4">
                                Treinos periodizados, individualizados e orientados para evolução consistente.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
