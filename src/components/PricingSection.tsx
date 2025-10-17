"use client";

import { CheckCircle, Phone, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROMOTION_CONFIG, isPromotionActive } from "@/config/promotion";

export default function PricingSection() {
    const [promotionStatus, setPromotionStatus] = useState(true);

    useEffect(() => {
        const checkPromotion = () => {
            setPromotionStatus(isPromotionActive());
        };

        checkPromotion();
        const timer = setInterval(checkPromotion, 1000);

        return () => clearInterval(timer);
    }, []);

    const getPlans = () => {
        if (promotionStatus) {
            return [
                {
                    id: "prata",
                    name: "PLANO PRATA",
                    badge: "INICIAL",
                    priceCredit: "R$ 320,00",
                    priceVista: "R$ 299,90",
                    description: "2 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "gray",
                },
                {
                    id: "avulso",
                    name: "PROTOCOLO AVULSO",
                    badge: "MAIS VENDIDO",
                    priceCredit: "R$ 160,00",
                    priceVista: "R$ 149,90",
                    description: "1 treino único personalizado, mas sem o acompanhamento",
                    features: [
                        "1 planilha de treino permanente",
                        "Alongamentos específicos",
                        "Diretrizes de execução",
                        "Acesso vitalício",
                    ],
                    paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso%20e%20queria%20saber%20qual%20o%20valor%20dele%20no%20pix",
                    highlighted: true,
                    theme: "green",
                },
                {
                    id: "ouro",
                    name: "PLANO OURO",
                    badge: "RECOMENDADO",
                    priceCredit: "R$ 400,00",
                    priceVista: "R$ 385,90",
                    description: "3 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "Chamada no Meet",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "yellow",
                },
                {
                    id: "platinum",
                    name: "PLANO PLATINUM",
                    badge: "PREMIUM",
                    priceCredit: "R$ 600,00",
                    priceVista: "R$ 585,90",
                    description: "4 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "24 semanas de acompanhamento",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "purple",
                },
            ];
        } else {
            return [
                {
                    id: "prata",
                    name: "PLANO PRATA",
                    badge: "INICIAL",
                    priceCredit: "R$ 400,00",
                    priceVista: "R$ 385,00",
                    description: "2 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Alongamentos específicos",
                        "Ajustes periódicos nos treinos",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "gray",
                },
                {
                    id: "avulso",
                    name: "PROTOCOLO AVULSO",
                    badge: "MAIS VENDIDO",
                    priceCredit: "R$ 160,00",
                    priceVista: "R$ 149,90",
                    description: "1 treino único personalizado, mas sem o acompanhamento",
                    features: [
                        "1 planilha de treino permanente",
                        "Alongamentos específicos",
                        "Diretrizes de execução",
                        "Acesso vitalício",
                    ],
                    paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso%20e%20queria%20saber%20qual%20o%20valor%20dele%20no%20pix",
                    highlighted: true,
                    theme: "green",
                },
                {
                    id: "ouro",
                    name: "PLANO OURO",
                    badge: "RECOMENDADO",
                    priceCredit: "R$ 550,00",
                    priceVista: "R$ 520,00",
                    description: "3 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "Chamada no Meet",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "yellow",
                },
                {
                    id: "platinum",
                    name: "PLANO PLATINUM",
                    badge: "PREMIUM",
                    priceCredit: "R$ 800,00",
                    priceVista: "R$ 700,00",
                    description: "4 protocolos de treino com duração de 6 semanas cada um",
                    features: [
                        "Planilha com vídeos de TODOS os exercícios",
                        "Planilha de controle de carga",
                        "Todos os benefícios anteriores",
                        "24 semanas de acompanhamento",
                    ],
                    paymentLink: "#",
                    whatsappLink:
                        "https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum%20e%20queria%20mais%20informações",
                    highlighted: false,
                    theme: "purple",
                },
            ];
        }
    };

    const plans = getPlans();

    const getThemeClasses = (theme: string, highlighted: boolean) => {
        const themes = {
            gray: {
                border: "border-gray-600",
                badgeBg: "bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-gray-200",
                badgeText: "text-white",
                price: "text-green-400",
                icon: "text-green-400",
                button: "bg-gray-700 hover:bg-gray-500",
                hover: "hover:border-gray-400 hover:shadow-[0_20px_40px_rgba(156,163,175,0.1)]",
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
            },
            yellow: {
                border: "border-yellow-600/50",
                badgeBg:
                    "bg-gradient-to-r from-yellow-600 to-yellow-700 group-hover:from-yellow-500 group-hover:to-yellow-600",
                badgeText: "text-white",
                price: "text-yellow-400",
                icon: "text-yellow-400",
                button: "bg-yellow-700 hover:bg-yellow-600",
                hover: "hover:border-yellow-500 hover:shadow-[0_20px_40px_rgba(251,191,36,0.1)]",
            },
            purple: {
                border: "border-purple-500/50",
                badgeBg: "bg-gradient-to-r from-purple-600 to-purple-700",
                badgeText: "text-white",
                price: "text-purple-400",
                icon: "text-purple-400",
                button: "bg-purple-700 hover:bg-purple-600",
                hover: "hover:border-purple-400 hover:shadow-[0_20px_40px_rgba(147,51,234,0.1)]",
            },
        };
        return themes[theme as keyof typeof themes];
    };

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false, // Para animar toda vez que entrar/sair
        margin: "-20% 0px -20% 0px", // Margem para controlar quando ativar
    });

    return (
        <motion.section
            ref={ref}
            id="purchase"
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
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Quanto vai <span className="text-green-400">investir?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Pode parecer mentira, mas você receberá o melhor treino da sua vida, com explicação de métodos
                        avançados e vídeos de cada exercício.
                    </p>

                    {promotionStatus && (
                        <motion.div
                            className="mt-8 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-xl border-2 border-red-500/50 shadow-lg max-w-md mx-auto"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="font-bold text-lg mb-1">🔥 PROMOÇÃO LIMITADA!</p>
                            <p className="text-sm">
                                Preços aumentam em {PROMOTION_CONFIG.displayDateFull} - Garanta já o seu!
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Grid de planos */}
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:gap-6 max-w-6xl mx-auto items-stretch">
                    {plans.map((plan, index) => {
                        const themeClasses = getThemeClasses(plan.theme, plan.highlighted);

                        return (
                            <motion.div
                                key={plan.id}
                                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${themeClasses.border} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${themeClasses.hover}`}
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: isInView ? 0 : 80, opacity: isInView ? 1 : 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: isInView ? 0.4 + index * 0.1 : 0,
                                    ease: "easeOut",
                                }}
                            >
                                {/* Badge superior */}
                                {plan.badge && (
                                    <div
                                        className={`absolute top-0 left-0 right-0 ${themeClasses.badgeBg} ${themeClasses.badgeText} text-center py-2 font-bold text-xs flex items-center justify-center gap-1`}
                                    >
                                        {plan.id === "avulso" && <Star className="w-3 h-3" />}
                                        {plan.badge}
                                        {plan.id === "avulso" && <Star className="w-3 h-3" />}
                                    </div>
                                )}

                                <div className="text-center mt-6">
                                    <h3 className="text-lg font-bold text-white mb-3">{plan.name}</h3>

                                    <div className="mb-2">
                                        <span className="text-gray-400 text-sm line-through">{plan.priceCredit}</span>
                                    </div>
                                    <div className={`text-2xl font-bold ${themeClasses.price} mb-3`}>
                                        {plan.priceVista}
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{plan.description}</p>

                                    <div className="space-y-2 mb-6 text-left">
                                        {plan.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <CheckCircle
                                                    className={`w-4 h-4 ${themeClasses.icon} flex-shrink-0 mt-0.5`}
                                                />
                                                <span className="text-gray-300 text-xs">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Botão principal para o protocolo avulso */}
                                    {plan.highlighted ? (
                                        <>
                                            <a
                                                href={plan.paymentLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block w-full ${themeClasses.button} font-bold py-3 rounded-full text-sm transition-all duration-300 mb-2 border-none cursor-pointer text-center no-underline`}
                                            >
                                                QUERO MEU PROTOCOLO
                                            </a>
                                            <a
                                                href={plan.whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 text-xs hover:text-green-400 transition-colors duration-200 underline"
                                            >
                                                Ou pague via PIX com desconto
                                            </a>
                                        </>
                                    ) : (
                                        <a
                                            href={plan.whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`block w-full ${themeClasses.button} text-white font-bold py-3 rounded-full text-sm transition-all duration-300 text-center no-underline`}
                                        >
                                            SABER MAIS
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                    transition={{
                        duration: 0.6,
                        delay: isInView ? 1.2 : 0,
                    }}
                >
                    <a
                        href="https://wa.me/5521972179585?text=Oii+Lucas%2C+como+funciona+sua+consultoria+online%3F+Pode+me+passar+mais+informa%C3%A7%C3%B5es%3F+"
                        target="_blank"
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
