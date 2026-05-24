"use client";

import { CheckCircle, Phone, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePromotion } from "@/hooks/usePromotion";
import BlackFridayCountdown from "./BlackFridayCountdown";

type Plan = {
    id: "mensal" | "prata" | "ouro" | "platinum" | "avulso";
    name: string;
    badge: string;
    price: number | null;
    priceVista: number | null;
    priceCredito: number | null;
    originalPrice: number | null;
    savings: number | undefined | null;
    description: string;
    features: string[];
    paymentLink: string;
    whatsappLink: string;
    highlighted: boolean;
    isBlackFriday: boolean;
};

type PlanTheme = {
    cardBorder: string;
    cardBg: string;
    badgeClass: string;
    priceClass: string;
    iconClass: string;
    hoverClass: string;
    buttonClass: string;
    featureBoxClass: string;
    pixSavingsClass: string;
};

const formatCurrency = (value: number) => `R$ ${value.toFixed(2).replace(".", ",")}`;

export default function PricingSection() {
    const {
        isBlackFriday,
        isPriceCountdown,
        prices,
        savings,
        blackFridayEndDate,
        isProtocoloAvulsoPromo,
        protocoloAvulsoMessage,
    } = usePromotion();
    const getPlans = (): Plan[] => {
        if (isBlackFriday) {
            return [
                {
                    id: "mensal",
                    name: "PLANO MENSAL",
                    badge: "MENSAL",
                    price: prices.mensal,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: prices.mensalOriginal,
                    savings: savings?.mensal,
                    description: "Plano Basic mensal com protocolo fixo de 4 semanas, renovado todo mês",
                    features: [
                        "Acesso à nova plataforma de alunos",
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                        "Protocolo de 4 semanas (renovação mensal)",
                    ],
                    paymentLink: "#",
                    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
                    highlighted: false,
                    isBlackFriday: true,
                },
                {
                    id: "prata",
                    name: "PLANO PRATA",
                    badge: "🔥 BLACK FRIDAY",
                    price: prices.prata,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: prices.prataOriginal,
                    savings: savings?.prata,
                    description:
                        "Plano Premium de entrada com 2 protocolos de treino e acesso à nova plataforma de alunos",
                    features: [
                        "Acesso à nova plataforma de alunos",
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata%20BLACK%20FRIDAY",
                    highlighted: false,
                    isBlackFriday: true,
                },
                {
                    id: "ouro",
                    name: "PLANO OURO",
                    badge: "🏆 BLACK FRIDAY + MAIS POPULAR",
                    price: prices.ouro,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: prices.ouroOriginal,
                    savings: savings?.ouro,
                    description: "Plano Premium com 3 protocolos de treino e acompanhamento mais próximo",
                    features: [
                        "Acesso à nova plataforma de alunos",
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                        "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro%20BLACK%20FRIDAY",
                    highlighted: true,
                    isBlackFriday: true,
                },
                {
                    id: "platinum",
                    name: "PLANO PLATINUM",
                    badge: "👑 BLACK FRIDAY PREMIUM",
                    price: prices.platinum,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: prices.platinumOriginal,
                    savings: savings?.platinum,
                    description: "Plano Premium com 4 protocolos de treino e acompanhamento avançado",
                    features: [
                        "Acesso à nova plataforma de alunos",
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                        "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum%20BLACK%20FRIDAY",
                    highlighted: false,
                    isBlackFriday: true,
                },
                {
                    id: "avulso",
                    name: "PROTOCOLO AVULSO",
                    badge: isProtocoloAvulsoPromo ? protocoloAvulsoMessage : "Preço Fixo",
                    price: prices.protocolo,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: null,
                    savings: null,
                    description: "Plano Basic avulso com protocolo de 4 semanas e vagas limitadas",
                    features: [
                        "Protocolo de 4 semanas",
                        "1 planilha de treino permanente",
                        "Alongamentos específicos",
                        "Diretrizes de execução",
                        "Acesso vitalício",
                        "Sem acesso à nova plataforma de alunos",
                    ],
                    paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
                    highlighted: false,
                    isBlackFriday: false,
                },
            ];
        }

        return [
            {
                id: "mensal",
                name: "PLANO MENSAL",
                badge: "MENSAL",
                price: prices.mensalCredito,
                priceVista: prices.mensalVista,
                priceCredito: prices.mensalCredito,
                originalPrice: null,
                savings: null,
                description: "Plano Basic mensal com protocolo fixo de 4 semanas, renovado todo mês",
                features: [
                    "Acesso à nova plataforma de alunos",
                    "Planilha com vídeos de TODOS os exercícios",
                    "Planilha de controle de carga",
                    "Alongamentos específicos",
                    "Ajustes periódicos nos treinos",
                    "Protocolo de 4 semanas (renovação mensal)",
                ],
                paymentLink: "#",
                whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
                highlighted: false,
                isBlackFriday: false,
            },
            {
                id: "prata",
                name: "PLANO PRATA",
                badge: "INICIAL",
                price: prices.prataCredito,
                priceVista: prices.prataVista,
                priceCredito: prices.prataCredito,
                originalPrice: null,
                savings: null,
                description: "Plano Premium de entrada com 2 protocolos de treino e acesso à nova plataforma de alunos",
                features: [
                    "Acesso à nova plataforma de alunos",
                    "Planilha com vídeos de TODOS os exercícios",
                    "Planilha de controle de carga",
                    "Alongamentos específicos",
                    "Ajustes periódicos nos treinos",
                    "Protocolo de 6 semanas",
                ],
                paymentLink: "#",
                whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata",
                highlighted: false,
                isBlackFriday: false,
            },
            {
                id: "avulso",
                name: "PROTOCOLO AVULSO",
                badge: isProtocoloAvulsoPromo ? protocoloAvulsoMessage : "MAIS VENDIDO",
                price: prices.protocolo,
                priceVista: prices.protocoloVista,
                priceCredito: prices.protocoloCredito,
                originalPrice: null,
                savings: null,
                description: "Plano Basic avulso com protocolo de 4 semanas e vagas limitadas (15)",
                features: [
                    "Protocolo de 4 semanas",
                    "1 planilha de treino permanente",
                    "Alongamentos específicos",
                    "Diretrizes de execução",
                    "Acesso vitalício",
                    "Sem acesso à nova plataforma de alunos",
                ],
                paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                whatsappLink:
                    "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
                highlighted: true,
                isBlackFriday: false,
            },
            {
                id: "ouro",
                name: "PLANO OURO",
                badge: "RECOMENDADO",
                price: prices.ouroCredito,
                priceVista: prices.ouroVista,
                priceCredito: prices.ouroCredito,
                originalPrice: null,
                savings: null,
                description: "Plano Premium com 3 protocolos de treino e acompanhamento mais próximo",
                features: [
                    "Acesso à nova plataforma de alunos",
                    "Planilha com vídeos de TODOS os exercícios",
                    "Planilha de controle de carga",
                    "Alongamentos específicos",
                    "Ajustes periódicos nos treinos",
                    "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
                ],
                paymentLink: "#",
                whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro",
                highlighted: false,
                isBlackFriday: false,
            },
            {
                id: "platinum",
                name: "PLANO PLATINUM",
                badge: "PREMIUM",
                price: prices.platinumCredito,
                priceVista: prices.platinumVista,
                priceCredito: prices.platinumCredito,
                originalPrice: null,
                savings: null,
                description: "Plano Premium com 4 protocolos de treino e acompanhamento avançado",
                features: [
                    "Acesso à nova plataforma de alunos",
                    "Planilha com vídeos de TODOS os exercícios",
                    "Planilha de controle de carga",
                    "Alongamentos específicos",
                    "Ajustes periódicos nos treinos",
                    "Chamada de alinhamento a cada 6 semanas para entrega do protocolo",
                ],
                paymentLink: "#",
                whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum",
                highlighted: false,
                isBlackFriday: false,
            },
        ];
    };

    const plans = getPlans();

    const isRecommendedPlan = (plan: Plan) => plan.badge.includes("RECOMENDADO") || plan.badge.includes("MAIS POPULAR");
    const getPlanTheme = (plan: Plan, hasPremiumFocus: boolean): PlanTheme => {
        if (plan.isBlackFriday) {
            return {
                mensal: {
                    cardBorder: "border-purple-400/55",
                    cardBg: "bg-gradient-to-b from-[#1b102a] to-[#0d0915]",
                    badgeClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black",
                    priceClass: "text-purple-200",
                    iconClass: "text-purple-300",
                    hoverClass: "hover:border-purple-200 hover:shadow-[0_24px_48px_rgba(168,85,247,0.2)]",
                    buttonClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black hover:brightness-105",
                    featureBoxClass: "border-purple-300/25 bg-purple-400/[0.06]",
                    pixSavingsClass: "bg-purple-400/15 border-purple-300/45 text-purple-200",
                },
                prata: {
                    cardBorder: "border-amber-500/50",
                    cardBg: "bg-gradient-to-b from-[#16110a] to-[#0d0a07]",
                    badgeClass: "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
                    priceClass: "text-amber-300",
                    iconClass: "text-amber-300",
                    hoverClass: "hover:border-amber-300 hover:shadow-[0_24px_44px_rgba(245,158,11,0.16)]",
                    buttonClass: "bg-amber-500 text-black hover:bg-amber-400",
                    featureBoxClass: "border-amber-400/20 bg-amber-500/[0.06]",
                    pixSavingsClass: "bg-amber-500/15 border-amber-400/40 text-amber-300",
                },
                ouro: {
                    cardBorder: "border-yellow-400/75",
                    cardBg: "bg-gradient-to-b from-[#1a1508] to-[#100d06]",
                    badgeClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black",
                    priceClass: "text-yellow-300",
                    iconClass: "text-yellow-300",
                    hoverClass: "hover:border-yellow-300 hover:shadow-[0_24px_48px_rgba(250,204,21,0.2)]",
                    buttonClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black hover:brightness-105",
                    featureBoxClass: "border-yellow-300/25 bg-yellow-400/[0.06]",
                    pixSavingsClass: "bg-yellow-400/15 border-yellow-300/45 text-yellow-200",
                },
                platinum: {
                    cardBorder: "border-orange-300/70",
                    cardBg: "bg-gradient-to-b from-[#181007] to-[#0f0a05]",
                    badgeClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black",
                    priceClass: "text-orange-200",
                    iconClass: "text-orange-200",
                    hoverClass: "hover:border-orange-200 hover:shadow-[0_24px_48px_rgba(251,146,60,0.2)]",
                    buttonClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black hover:brightness-105",
                    featureBoxClass: "border-orange-300/25 bg-orange-400/[0.06]",
                    pixSavingsClass: "bg-orange-400/15 border-orange-300/45 text-orange-200",
                },
                avulso: {
                    cardBorder: "border-amber-500/50",
                    cardBg: "bg-gradient-to-b from-[#14100b] to-[#0b0907]",
                    badgeClass: "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
                    priceClass: "text-amber-300",
                    iconClass: "text-amber-300",
                    hoverClass: "hover:border-amber-300 hover:shadow-[0_24px_44px_rgba(245,158,11,0.16)]",
                    buttonClass: "bg-amber-500 text-black hover:bg-amber-400",
                    featureBoxClass: "border-amber-400/20 bg-amber-500/[0.06]",
                    pixSavingsClass: "bg-amber-500/15 border-amber-400/40 text-amber-300",
                },
            }[plan.id];
        }

        const themes: Record<Plan["id"], PlanTheme> = {
            mensal: {
                cardBorder: "border-purple-400/45",
                cardBg: "bg-gradient-to-b from-[#140c22] to-[#0b0814]",
                badgeClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black",
                priceClass: "text-purple-200",
                iconClass: "text-purple-300",
                hoverClass: "hover:border-purple-200 hover:shadow-[0_24px_44px_rgba(168,85,247,0.18)]",
                buttonClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black hover:brightness-105",
                featureBoxClass: "border-purple-300/20 bg-purple-400/[0.06]",
                pixSavingsClass: "bg-purple-400/15 border-purple-300/40 text-purple-200",
            },
            prata: {
                cardBorder: "border-zinc-300/35",
                cardBg: "bg-gradient-to-b from-[#121212] to-[#0b0b0b]",
                badgeClass: "bg-gradient-to-r from-zinc-300 to-zinc-500 text-black",
                priceClass: "text-zinc-100",
                iconClass: "text-zinc-300",
                hoverClass: "hover:border-zinc-200/60 hover:shadow-[0_24px_44px_rgba(212,212,216,0.14)]",
                buttonClass: "bg-zinc-200 text-black hover:bg-zinc-100",
                featureBoxClass: "border-zinc-300/15 bg-zinc-300/[0.05]",
                pixSavingsClass: "bg-zinc-400/15 border-zinc-300/35 text-zinc-200",
            },
            ouro: {
                cardBorder: hasPremiumFocus ? "border-yellow-300/75" : "border-yellow-400/45",
                cardBg: "bg-gradient-to-b from-[#171406] to-[#0d0b05]",
                badgeClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black",
                priceClass: "text-yellow-300",
                iconClass: "text-yellow-300",
                hoverClass: "hover:border-yellow-300 hover:shadow-[0_24px_44px_rgba(250,204,21,0.16)]",
                buttonClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black hover:brightness-105",
                featureBoxClass: "border-yellow-300/20 bg-yellow-400/[0.06]",
                pixSavingsClass: "bg-yellow-400/15 border-yellow-300/40 text-yellow-200",
            },
            platinum: {
                cardBorder: "border-cyan-300/55",
                cardBg: "bg-gradient-to-b from-[#091218] to-[#070b0f]",
                badgeClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black",
                priceClass: "text-cyan-200",
                iconClass: "text-cyan-300",
                hoverClass: "hover:border-cyan-200 hover:shadow-[0_24px_44px_rgba(34,211,238,0.16)]",
                buttonClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black hover:brightness-105",
                featureBoxClass: "border-cyan-300/20 bg-cyan-400/[0.06]",
                pixSavingsClass: "bg-cyan-500/15 border-cyan-300/40 text-cyan-200",
            },
            avulso: {
                cardBorder: hasPremiumFocus ? "border-green-400/75" : "border-green-400/45",
                cardBg: "bg-gradient-to-b from-[#07140d] to-[#050d08]",
                badgeClass: "bg-gradient-to-r from-green-300 to-green-500 text-black",
                priceClass: "text-green-300",
                iconClass: "text-green-400",
                hoverClass: "hover:border-green-300 hover:shadow-[0_24px_44px_rgba(74,222,128,0.18)]",
                buttonClass: "bg-gradient-to-r from-green-300 to-green-500 text-black hover:brightness-105",
                featureBoxClass: "border-green-300/20 bg-green-400/[0.06]",
                pixSavingsClass: "bg-green-500/15 border-green-300/40 text-green-200",
            },
        };

        return themes[plan.id];
    };

    return (
        <motion.section
            id="pricing"
            className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black py-16 md:py-20 lg:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            {isBlackFriday && (
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Sparkles className="absolute top-20 left-10 h-8 w-8 text-amber-400/20" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                    >
                        <Sparkles className="absolute top-40 right-20 h-6 w-6 text-amber-400/20" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.16 }}
                    >
                        <Sparkles className="absolute bottom-20 left-1/4 h-10 w-10 text-amber-400/20" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.22 }}
                    >
                        <Sparkles className="absolute bottom-40 right-1/3 h-7 w-7 text-amber-400/20" />
                    </motion.div>
                </div>
            )}

            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {isBlackFriday ? (
                    <motion.div
                        className="mb-10 text-center md:mb-12"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2 font-bold text-black">
                            <Sparkles className="w-5 h-5" />
                            <span>BLACK FRIDAY 2025</span>
                            <Sparkles className="w-5 h-5" />
                        </div>

                        <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                            Consultoria com <span className="text-amber-400">Desconto Especial</span>
                        </h2>

                        <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:mb-8 md:text-xl">
                            Aproveite descontos de até R$ 90,90 nos planos de consultoria!
                        </p>

                        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-amber-600/10 p-4 sm:p-5 md:p-6">
                            <p className="text-amber-400 font-bold mb-4 text-lg">⏰ Oferta expira em:</p>
                            <BlackFridayCountdown targetDate={blackFridayEndDate} />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="mb-12 text-center md:mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl">
                            Quanto vai <span className="text-green-400">investir?</span>
                        </h2>
                        <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                            Pode parecer mentira, mas você receberá o melhor treino da sua vida, com explicação de
                            métodos avançados e vídeos de cada exercício.
                        </p>
                        <p className="text-sm text-gray-400 uppercase tracking-[0.18em]">
                            Escolha seu nível de acompanhamento e feche em minutos
                        </p>

                        {isPriceCountdown && (
                            <div className="mx-auto mt-6 max-w-2xl rounded-xl border-2 border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10 p-4">
                                <p className="text-red-400 font-bold text-sm">
                                    ⚠️ Aproveite os preços atuais! Em breve os valores serão reajustados.
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}

                <div className="mx-auto mb-10 grid max-w-6xl grid-cols-1 items-stretch gap-4 sm:mb-12 sm:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6">
                    {plans.map((plan, index) => {
                        const recommended = isRecommendedPlan(plan);
                        const hasPremiumFocus = recommended || plan.highlighted;
                        const theme = getPlanTheme(plan, hasPremiumFocus);

                        return (
                            <motion.div
                                key={plan.id}
                                className={`relative flex flex-col overflow-hidden rounded-2xl border-2 ${theme.cardBorder} ${theme.cardBg} p-5 transition-all duration-300 md:p-6 ${theme.hoverClass} ${hasPremiumFocus ? "md:-translate-y-2" : ""}`}
                                initial={{ y: 80, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.25 + index * 0.08,
                                    ease: "easeOut",
                                }}
                            >
                                {plan.badge && (
                                    <div
                                        className={`absolute left-0 right-0 top-0 ${theme.badgeClass} flex items-center justify-center gap-1 py-2 text-center text-[11px] font-bold sm:text-xs`}
                                    >
                                        {plan.id === "avulso" && !plan.isBlackFriday && <Star className="w-3 h-3" />}
                                        {plan.badge}
                                        {plan.id === "avulso" && !plan.isBlackFriday && <Star className="w-3 h-3" />}
                                    </div>
                                )}

                                <div className="mt-5 flex flex-grow flex-col text-center md:mt-6">
                                    <h3 className="mb-3 text-lg font-bold text-white">{plan.name}</h3>

                                    {plan.isBlackFriday && plan.originalPrice && (
                                        <>
                                            <div className="mb-2">
                                                <span className="text-gray-400 text-sm line-through">
                                                    {formatCurrency(plan.originalPrice)}
                                                </span>
                                            </div>
                                            <div className={`mb-2 text-2xl font-bold sm:text-3xl ${theme.priceClass}`}>
                                                {formatCurrency(plan.price!)}
                                            </div>
                                            {plan.savings && (
                                                <div
                                                    className={`text-xs font-bold py-1 px-3 rounded-full inline-block mb-3 border ${theme.pixSavingsClass}`}
                                                >
                                                    💰 ECONOMIZE {formatCurrency(plan.savings)}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {!plan.isBlackFriday && plan.priceVista && plan.priceCredito && (
                                        <>
                                            <div className="mb-2">
                                                <div className="text-gray-400 text-xs mb-1">À vista (PIX)</div>
                                                <div className={`text-2xl font-bold sm:text-3xl ${theme.priceClass}`}>
                                                    {formatCurrency(plan.priceVista)}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="text-gray-500 text-xs mb-1">ou no crédito</div>
                                                <div className="text-gray-300 text-sm">
                                                    {formatCurrency(plan.priceCredito)}
                                                </div>
                                                <div
                                                    className={`text-xs font-bold py-1 px-2 rounded-full inline-block mt-1 border ${theme.pixSavingsClass}`}
                                                >
                                                    💰 Economize {formatCurrency(plan.priceCredito - plan.priceVista)}{" "}
                                                    no PIX
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {!plan.isBlackFriday && !plan.priceVista && plan.price && (
                                        <>
                                            <div className="mb-2">
                                                <div className="text-gray-400 text-xs mb-1">No cartão</div>
                                                <div className={`text-3xl font-bold ${theme.priceClass}`}>
                                                    {formatCurrency(plan.price)}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                {plan.id === "avulso" && plan.whatsappLink ? (
                                                    <a
                                                        href={plan.whatsappLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 text-xs hover:text-green-400 transition-colors duration-200 underline inline-block"
                                                    >
                                                        Ou pague via PIX com desconto
                                                    </a>
                                                ) : (
                                                    <>
                                                        <div className="text-gray-500 text-xs mb-1 invisible">
                                                            placeholder
                                                        </div>
                                                        <div className="text-gray-400 text-sm invisible">
                                                            placeholder
                                                        </div>
                                                        <div className="text-xs font-bold py-1 px-2 rounded-full inline-block mt-1 invisible">
                                                            placeholder
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </>
                                    )}

                                    <p className="mb-4 text-sm leading-relaxed text-gray-300">{plan.description}</p>

                                    <div
                                        className={`mb-5 flex-grow space-y-2 rounded-xl border p-3.5 text-left sm:mb-6 sm:p-4 ${theme.featureBoxClass}`}
                                    >
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle
                                                    className={`w-4 h-4 ${theme.iconClass} flex-shrink-0 mt-0.5`}
                                                />
                                                <span className="text-xs leading-relaxed text-gray-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        {plan.highlighted && plan.id === "avulso" ? (
                                            <a
                                                href={plan.paymentLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block w-full cursor-pointer rounded-full py-2.5 text-center text-sm font-bold no-underline transition-all duration-300 sm:py-3 ${theme.buttonClass} shadow-[0_10px_25px_rgba(74,222,128,0.22)]`}
                                            >
                                                QUERO MEU PROTOCOLO
                                            </a>
                                        ) : (
                                            <a
                                                href={plan.whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block w-full rounded-full py-2.5 text-center text-sm font-bold no-underline transition-all duration-300 sm:py-3 ${theme.buttonClass}`}
                                            >
                                                {plan.isBlackFriday ? "GARANTIR DESCONTO" : "SABER MAIS"}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a
                        href="https://wa.me/5521972179585?text=Oii+Lucas%2C+como+funciona+sua+consultoria+online%3F+Pode+me+passar+mais+informa%C3%A7%C3%B5es%3F+"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-green-600 px-6 py-3.5 text-sm font-bold text-white no-underline shadow-[0_10px_25px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500 sm:px-8 sm:py-4 sm:text-base"
                    >
                        <Phone className="w-5 h-5" />
                        Falar no WhatsApp
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
