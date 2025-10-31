"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";

interface CountdownStickyProps {
    targetDate: Date;
    onComplete?: () => void;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownSticky({ targetDate, onComplete }: CountdownStickyProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isVisible, setIsVisible] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();

            if (difference > 0) {
                return {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            } else {
                if (onComplete) onComplete();
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, onComplete]);

    const formatNumber = (num: number) => String(num).padStart(2, "0");

    const scrollToPricing = () => {
        const pricingSection = document.getElementById("pricing");
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Versão Desktop - Canto inferior direito */}
            <AnimatePresence>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-6 right-6 z-50 hidden md:block"
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                >
                    <div className="relative">
                        {/* Botão de fechar */}
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors duration-200 z-10"
                            aria-label="Fechar"
                        >
                            <X className="w-3 h-3" />
                        </button>

                        {/* Card */}
                        <motion.div
                            animate={{ width: isExpanded ? "280px" : "200px" }}
                            transition={{ duration: 0.3 }}
                            className="bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 border-2 border-amber-300 rounded-2xl p-4 shadow-2xl cursor-pointer"
                            onClick={scrollToPricing}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="w-5 h-5 text-black animate-pulse" />
                                <span className="text-black font-bold text-sm uppercase tracking-wider">
                                    Black Friday
                                </span>
                            </div>

                            {/* Mensagem */}
                            <p className="text-black/80 text-xs font-semibold mb-2">Oferta acaba em:</p>

                            {/* Countdown compacto */}
                            <div className="flex gap-1 justify-center mb-2">
                                {[
                                    { value: timeLeft.days, label: "D" },
                                    { value: timeLeft.hours, label: "H" },
                                    { value: timeLeft.minutes, label: "M" },
                                    { value: timeLeft.seconds, label: "S" },
                                ].map((unit, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <div className="bg-black text-amber-400 font-bold text-lg px-2 py-1 rounded min-w-[32px] text-center">
                                            {formatNumber(unit.value)}
                                        </div>
                                        <span className="text-black/70 text-xs mt-0.5">{unit.label}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <motion.div
                                animate={{
                                    scale: isExpanded ? [1, 1.05, 1] : 1,
                                }}
                                transition={{ duration: 1, repeat: isExpanded ? Infinity : 0 }}
                                className="bg-black text-amber-400 text-center py-2 px-3 rounded-lg font-bold text-xs"
                            >
                                Ver ofertas
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Versão Mobile - Navbar inferior */}
            <motion.div
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-amber-600 via-amber-500 to-yellow-500 border-t-2 border-amber-300 shadow-2xl backdrop-blur-sm"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="px-4 py-3">
                    <div className="text-center mb-3">
                        <motion.div
                            className="flex items-center justify-center gap-1 mb-1"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                            <span className="text-black font-bold text-xs uppercase tracking-wider">
                                BLACK FRIDAY 2025
                            </span>
                            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                        </motion.div>
                        <p className="text-black/80 text-xs font-semibold">Oferta acaba em: ⚡</p>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mb-3">
                        {[
                            { value: timeLeft.days, label: "DIAS" },
                            { value: timeLeft.hours, label: "HORAS" },
                            { value: timeLeft.minutes, label: "MIN" },
                            { value: timeLeft.seconds, label: "SEG" },
                        ].map((unit, index) => (
                            <motion.div
                                key={index}
                                className="text-center bg-black/40 rounded-lg py-2 px-1 border border-amber-300/30"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <motion.div
                                    className="text-xl font-bold text-amber-400 mb-1"
                                    key={unit.value}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {formatNumber(unit.value)}
                                </motion.div>
                                <div className="text-black text-xs font-semibold">{unit.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        onClick={scrollToPricing}
                        className="w-full text-center bg-black text-amber-400 rounded-lg py-2 px-3 font-bold text-sm"
                        animate={{
                            boxShadow: [
                                "0 0 10px rgba(251, 191, 36, 0.3)",
                                "0 0 20px rgba(251, 191, 36, 0.6)",
                                "0 0 10px rgba(251, 191, 36, 0.3)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🔥 VER OFERTAS BLACK FRIDAY
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
}
