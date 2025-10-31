"use client";

import { CheckCircle, Phone, Star, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePromotion } from "@/hooks/usePromotion";
import BlackFridayCountdown from "./BlackFridayCountdown";

export default function PricingSection() {
    const { isBlackFriday, isPriceCountdown, prices, savings, blackFridayEndDate } = usePromotion();
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px -20% 0px",
    });

    const getPlans = () => {
        if (isBlackFriday) {
            return [
                {
                    id: "prata",
                    name: "PLANO PRATA",
                    badge: "🔥 BLACK FRIDAY",
                    originalPrice: prices.prataOriginal,
                    price: prices.prata,
                    priceVista: null,
                    priceCredito: null,
                    savings: savings?.prata,
                    description: "2 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata%20BLACK%20FRIDAY",
                    highlighted: false,
                    theme: "gold",
                    isBlackFriday: true,
                },
                {
                    id: "ouro",
                    name: "PLANO OURO",
                    badge: "🏆 BLACK FRIDAY + MAIS POPULAR",
                    originalPrice: prices.ouroOriginal,
                    price: prices.ouro,
                    priceVista: null,
                    priceCredito: null,
                    savings: savings?.ouro,
                    description: "3 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "Chamada no Meet",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro%20BLACK%20FRIDAY",
                    highlighted: true,
                    theme: "gold",
                    isBlackFriday: true,
                },
                {
                    id: "platinum",
                    name: "PLANO PLATINUM",
                    badge: "👑 BLACK FRIDAY PREMIUM",
                    originalPrice: prices.platinumOriginal,
                    price: prices.platinum,
                    priceVista: null,
                    priceCredito: null,
                    savings: savings?.platinum,
                    description: "4 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "24 semanas de acompanhamento",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum%20BLACK%20FRIDAY",
                    highlighted: false,
                    theme: "gold",
                    isBlackFriday: true,
                },
                {
                    id: "avulso",
                    name: "PROTOCOLO AVULSO",
                    badge: "Preço Fixo",
                    price: prices.protocolo,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: null,
                    savings: null,
                    description: "1 treino único personalizado, mas sem o acompanhamento",
                    features: [
                        "1 planilha de treino permanente",
                        "Alongamentos específicos",
                        "Diretrizes de execução",
                        "Acesso vitalício",
                    ],
                    paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
                    highlighted: false,
                    theme: "green",
                    isBlackFriday: false,
                },
            ];
        } else {
            return [
                {
                    id: "prata",
                    name: "PLANO PRATA",
                    badge: "INICIAL",
                    price: prices.prataCredito,
                    priceVista: prices.prataVista,
                    priceCredito: prices.prataCredito,
                    originalPrice: null,
                    savings: null,
                    description: "2 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                    ],
                    paymentLink: "#",
                    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata",
                    highlighted: false,
                    theme: "gray",
                    isBlackFriday: false,
                },
                {
                    id: "avulso",
                    name: "PROTOCOLO AVULSO",
                    badge: "MAIS VENDIDO",
                    price: prices.protocolo,
                    priceVista: null,
                    priceCredito: null,
                    originalPrice: null,
                    savings: null,
                    description: "1 treino único personalizado, mas sem o acompanhamento",
                    features: [
                        "1 planilha de treino permanente",
                        "Alongamentos específicos",
                        "Diretrizes de execução",
                        "Acesso vitalício",
                    ],
                    paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
                    highlighted: true,
                    theme: "green",
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
                    description: "3 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "Chamada no Meet",
                    ],
                    paymentLink: "#",
                    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro",
                    highlighted: false,
                    theme: "yellow",
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
                    description: "4 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "24 semanas de acompanhamento",
                    ],
                    paymentLink: "#",
                    whatsappLink: "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum",
                    highlighted: false,
                    theme: "purple",
                    isBlackFriday: false,
                },
            ];
        }
    };

    const plans = getPlans();

    const getThemeClasses = (theme: string, highlighted: boolean, isBF: boolean) => {
        if (isBF) {
            return {
                border: highlighted ? "border-amber-400" : "border-amber-500/50",
                badgeBg: "bg-gradient-to-r from-amber-500 to-amber-600",
                badgeText: "text-black",
                price: "text-amber-400",
                icon: "text-amber-400",
                button: "bg-amber-500 text-black hover:bg-amber-400",
                hover: highlighted
                    ? "hover:border-amber-300 hover:shadow-[0_25px_50px_rgba(245,158,11,0.3)]"
                    : "hover:border-amber-400 hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)]",
                glow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]",
            };
        }

        const themes = {
            gray: {
                border: "border-gray-600",
                badgeBg: "bg-gradient-to-r from-gray-600 to-gray-700",
                badgeText: "text-white",
                price: "text-green-400",
                icon: "text-green-400",
                button: "bg-gray-700 hover:bg-gray-500",
                hover: "hover:border-gray-400 hover:shadow-[0_20px_40px_rgba(156,163,175,0.1)]",
                glow: "",
            },
            green: {
                border: highlighted ? "border-green-400/50" : "border-gray-600/50",
                badgeBg: "bg-gradient-to-r from-green-400 to-green-600",
                badgeText: "text-black",
                price: "text-green-400",
                icon: "text-green-400",
                button: "bg-green-500 text-black hover:bg-green-400",
                hover: highlighted
                    ? "hover:border-green-400 hover:shadow-[0_25px_50px_rgba(74,222,128,0.15)]"
                    : "hover:border-green-500",
                glow: "",
            },
            yellow: {
                border: "border-yellow-600/50",
                badgeBg: "bg-gradient-to-r from-yellow-600 to-yellow-700",
                badgeText: "text-white",
                price: "text-yellow-400",
                icon: "text-yellow-400",
                button: "bg-yellow-700 hover:bg-yellow-600",
                hover: "hover:border-yellow-500 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)]",
                glow: "",
            },
            purple: {
                border: "border-purple-500/50",
                badgeBg: "bg-gradient-to-r from-purple-600 to-purple-700",
                badgeText: "text-white",
                price: "text-purple-400",
                icon: "text-purple-400",
                button: "bg-purple-700 hover:bg-purple-600",
                hover: "hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)]",
                glow: "",
            },
        };
        return themes[theme as keyof typeof themes];
    };

    return (
        <motion.section
            ref={ref}
            id="pricing"
            className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            {isBlackFriday && (
                <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute top-20 left-10 w-8 h-8 text-amber-400/20 animate-pulse" />
                    <Sparkles
                        className="absolute top-40 right-20 w-6 h-6 text-amber-400/20 animate-pulse"
                        style={{ animationDelay: "1s" }}
                    />
                    <Sparkles
                        className="absolute bottom-20 left-1/4 w-10 h-10 text-amber-400/20 animate-pulse"
                        style={{ animationDelay: "2s" }}
                    />
                    <Sparkles
                        className="absolute bottom-40 right-1/3 w-7 h-7 text-amber-400/20 animate-pulse"
                        style={{ animationDelay: "1.5s" }}
                    />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6">
                {isBlackFriday ? (
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
                            <Sparkles className="w-5 h-5" />
                            <span>BLACK FRIDAY 2025</span>
                            <Sparkles className="w-5 h-5" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
                            Consultoria com <span className="text-amber-400">Desconto Especial</span>
                        </h2>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                            Aproveite descontos de até R$ 90,90 nos planos de consultoria!
                        </p>

                        <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-2 border-amber-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
                            <p className="text-amber-400 font-bold mb-4 text-lg">⏰ Oferta expira em:</p>
                            <BlackFridayCountdown targetDate={blackFridayEndDate} />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Quanto vai <span className="text-green-400">investir?</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Pode parecer mentira, mas você receberá o melhor treino da sua vida, com explicação de
                            métodos avançados e vídeos de cada exercício.
                        </p>

                        {isPriceCountdown && (
                            <div className="mt-6 bg-gradient-to-r from-red-500/10 to-red-600/10 border-2 border-red-500/30 rounded-xl p-4 max-w-2xl mx-auto">
                                <p className="text-red-400 font-bold text-sm">
                                    ⚠️ Aproveite os preços atuais! Em breve os valores serão reajustados.
                                </p>
                            </div>
                        )}
                    </motion.div>
                )}

                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6 max-w-6xl mx-auto items-stretch mb-12">
                    {plans.map((plan, index) => {
                        const themeClasses = getThemeClasses(plan.theme, plan.highlighted, plan.isBlackFriday);

                        return (
                            <motion.div
                                key={plan.id}
                                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${themeClasses.border} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${themeClasses.hover} ${themeClasses.glow} ${plan.highlighted ? "scale-105" : ""} flex flex-col`}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: isInView ? 0 : 80, opacity: isInView ? 1 : 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: isInView ? 0.4 + index * 0.1 : 0,
                                    ease: "easeOut",
                                }}
                            >
                                {plan.badge && (
                                    <div
                                        className={`absolute top-0 left-0 right-0 ${themeClasses.badgeBg} ${themeClasses.badgeText} text-center py-2 font-bold text-xs flex items-center justify-center gap-1`}
                                    >
                                        {plan.id === "avulso" && !plan.isBlackFriday && <Star className="w-3 h-3" />}
                                        {plan.badge}
                                        {plan.id === "avulso" && !plan.isBlackFriday && <Star className="w-3 h-3" />}
                                    </div>
                                )}

                                <div className="text-center mt-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-white mb-3">{plan.name}</h3>

                                    {plan.isBlackFriday && plan.originalPrice && (
                                        <>
                                            <div className="mb-2">
                                                <span className="text-gray-400 text-sm line-through">
                                                    R$ {plan.originalPrice.toFixed(2).replace(".", ",")}
                                                </span>
                                            </div>
                                            <div className={`text-3xl font-bold ${themeClasses.price} mb-2`}>
                                                R$ {plan.price!.toFixed(2).replace(".", ",")}
                                            </div>
                                            {plan.savings && (
                                                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs font-bold py-1 px-3 rounded-full inline-block mb-3">
                                                    💰 ECONOMIZE R$ {plan.savings.toFixed(2).replace(".", ",")}
                                                </div>
                                            )}
                                        </>
                                    )}
                                    {!plan.isBlackFriday && plan.priceVista && plan.priceCredito && (
                                        <>
                                            <div className="mb-2">
                                                <div className="text-gray-400 text-xs mb-1">À vista (PIX)</div>
                                                <div className={`text-3xl font-bold ${themeClasses.price}`}>
                                                    R$ {plan.priceVista.toFixed(2).replace(".", ",")}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="text-gray-500 text-xs mb-1">ou no crédito</div>
                                                <div className="text-gray-400 text-sm">
                                                    R$ {plan.priceCredito.toFixed(2).replace(".", ",")}
                                                </div>
                                                <div className="bg-green-500/20 text-green-400 text-xs font-bold py-1 px-2 rounded-full inline-block mt-1">
                                                    💰 Economize R${" "}
                                                    {(plan.priceCredito - plan.priceVista).toFixed(2).replace(".", ",")}{" "}
                                                    no PIX
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    {!plan.isBlackFriday && !plan.priceVista && plan.price && (
                                        <>
                                            <div className="mb-2">
                                                <div className="text-gray-400 text-xs mb-1">No cartão</div>
                                                <div className={`text-3xl font-bold ${themeClasses.price}`}>
                                                    R$ {plan.price.toFixed(2).replace(".", ",")}
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                {plan.id === "avulso" && plan.whatsappLink ? (
                                                    <a
                                                        href={plan.whatsappLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-400 text-xs hover:text-green-400 transition-colors duration-200 underline inline-block"
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

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{plan.description}</p>

                                    <div className="space-y-2 mb-6 text-left flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle
                                                    className={`w-4 h-4 ${themeClasses.icon} flex-shrink-0 mt-0.5`}
                                                />
                                                <span className="text-gray-300 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        {plan.highlighted && plan.id === "avulso" ? (
                                            <a
                                                href={plan.paymentLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block w-full ${themeClasses.button} font-bold py-3 rounded-full text-sm transition-all duration-300 cursor-pointer text-center no-underline`}
                                            >
                                                QUERO MEU PROTOCOLO
                                            </a>
                                        ) : (
                                            <a
                                                href={plan.whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block w-full ${themeClasses.button} text-white font-bold py-3 rounded-full text-sm transition-all duration-300 text-center no-underline`}
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
                    animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: isInView ? 1.2 : 0 }}
                >
                    <a
                        href="https://wa.me/5521972179585?text=Oii+Lucas%2C+como+funciona+sua+consultoria+online%3F+Pode+me+passar+mais+informa%C3%A7%C3%B5es%3F+"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(22,163,74,0.25)] no-underline hover:scale-105"
                    >
                        <Phone className="w-5 h-5" />
                        Falar no WhatsApp
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
