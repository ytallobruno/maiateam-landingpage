"use client";

import { CheckCircle, Phone, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { usePromotion } from "@/hooks/usePromotion";
import BlackFridayCountdown from "./BlackFridayCountdown";
import {
    plansConfig,
    getPlanOrder,
    getPlanBadge,
    getWhatsAppLink,
    getPaymentLink,
    isPlanHighlighted,
    getPlanThemeClasses,
} from "@/config/plans.config";

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
        const order = getPlanOrder(isBlackFriday);
        return order.map((planId) => {
            const plan = plansConfig[planId];
            const priceKey = planId === "avulso" ? "protocolo" : planId;

            return {
                id: plan.id as Plan["id"],
                name: plan.name,
                badge: getPlanBadge(planId, isBlackFriday),
                price: isBlackFriday ? (prices[priceKey as keyof typeof prices] as number) : null,
                priceVista: isBlackFriday ? null : (prices[`${priceKey}Vista` as keyof typeof prices] as number | null),
                priceCredito: isBlackFriday
                    ? null
                    : (prices[`${priceKey}Credito` as keyof typeof prices] as number | null),
                originalPrice: isBlackFriday
                    ? (prices[`${priceKey}Original` as keyof typeof prices] as number | null)
                    : null,
                savings:
                    isBlackFriday && priceKey !== "protocolo" && savings
                        ? savings[priceKey as "prata" | "ouro" | "platinum" | "mensal"]
                        : null,
                description: plan.description,
                features: plan.features,
                paymentLink: getPaymentLink(planId),
                whatsappLink: getWhatsAppLink(planId, isBlackFriday),
                highlighted: isPlanHighlighted(planId, isBlackFriday),
                isBlackFriday,
            };
        });
    };

    const rawPlans = getPlans();
    const plans = rawPlans.map((plan) => {
        if (plan.id === "avulso" && isProtocoloAvulsoPromo) {
            return { ...plan, badge: protocoloAvulsoMessage };
        }
        return plan;
    });

    const isRecommendedPlan = (plan: Plan) => plan.badge.includes("RECOMENDADO") || plan.badge.includes("MAIS POPULAR");

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

                <div className="mx-auto mb-10 flex flex-wrap justify-center items-stretch gap-4 sm:mb-12 md:gap-5 lg:gap-6 max-w-6xl">
                    {plans.map((plan, index) => {
                        const recommended = isRecommendedPlan(plan);
                        const hasPremiumFocus = recommended || plan.highlighted;
                        const theme = getPlanThemeClasses(plan.id, plan.isBlackFriday, hasPremiumFocus);

                        return (
                            <motion.div
                                key={plan.id}
                                className={`relative flex w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] flex-col overflow-hidden rounded-2xl border-2 ${theme.cardBorder} ${theme.cardBg} p-5 transition-all duration-300 md:p-6 ${theme.hoverClass} ${hasPremiumFocus ? "md:-translate-y-2" : ""}`}
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
