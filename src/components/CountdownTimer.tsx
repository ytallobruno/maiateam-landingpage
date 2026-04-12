"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { promotionsConfig, getPromotionDates } from "@/config/promotions.config";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isExpired, setIsExpired] = useState(false);

    const targetDate = promotionsConfig.priceCountdown.endDate.getTime();
    const displayDate = getPromotionDates().priceCountdown.displayDate;

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setIsExpired(true);
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (isExpired) {
        return null;
    }

    const timeUnits = [
        { label: "DIAS", value: timeLeft.days, color: "text-red-400" },
        { label: "HORAS", value: timeLeft.hours, color: "text-orange-400" },
        { label: "MIN", value: timeLeft.minutes, color: "text-yellow-400" },
        { label: "SEG", value: timeLeft.seconds, color: "text-green-400" },
    ];

    return (
        <>
            {/* Desktop/Tablet - Canto superior esquerdo */}
            <motion.div
                className="hidden md:block fixed top-24 left-4 z-50 bg-gradient-to-br from-red-900 via-red-800 to-black border-2 border-red-500/50 rounded-2xl p-4 shadow-2xl backdrop-blur-sm"
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="text-center mb-2">
                    <motion.div
                        className="flex items-center justify-center gap-1 mb-1"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-red-400 font-bold text-xs uppercase tracking-wider">
                            PROMOÇÃO ENCERRA EM
                        </span>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </motion.div>
                    <p className="text-white text-xs font-semibold">PREÇOS AUMENTAM EM {displayDate}</p>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            className="text-center bg-black/50 rounded-lg p-2 border border-gray-700"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                className={`text-lg font-bold ${unit.color} mb-1`}
                                key={unit.value}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {unit.value.toString().padStart(2, "0")}
                            </motion.div>
                            <div className="text-gray-400 text-xs font-semibold">{unit.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-2"
                    animate={{
                        boxShadow: [
                            "0 0 10px rgba(239, 68, 68, 0.3)",
                            "0 0 20px rgba(239, 68, 68, 0.6)",
                            "0 0 10px rgba(239, 68, 68, 0.3)",
                        ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <p className="text-white text-xs font-bold">⚡ ÚLTIMOS DIAS COM DESCONTO</p>
                </motion.div>
            </motion.div>

            {/* Mobile - Navbar inferior */}
            <motion.div
                className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-red-900 via-red-800 to-red-700 border-t-2 border-red-500/50 shadow-2xl backdrop-blur-sm"
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
                            <div className="w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" />
                            <span className="text-red-200 font-bold text-xs uppercase tracking-wider">
                                PROMOÇÃO ENCERRA EM
                            </span>
                            <div className="w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" />
                        </motion.div>
                        <p className="text-white text-xs font-semibold">PREÇOS AUMENTAM EM {displayDate} ⚡</p>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mb-3">
                        {timeUnits.map((unit, index) => (
                            <motion.div
                                key={unit.label}
                                className="text-center bg-black/40 rounded-lg py-2 px-1 border border-red-400/30"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <motion.div
                                    className={`text-xl font-bold ${unit.color} mb-1`}
                                    key={unit.value}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {unit.value.toString().padStart(2, "0")}
                                </motion.div>
                                <div className="text-gray-200 text-xs font-semibold">{unit.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-lg py-2 px-3"
                        animate={{
                            boxShadow: [
                                "0 0 10px rgba(239, 68, 68, 0.3)",
                                "0 0 20px rgba(239, 68, 68, 0.6)",
                                "0 0 10px rgba(239, 68, 68, 0.3)",
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <p className="text-white text-sm font-bold">🔥 ÚLTIMOS DIAS COM DESCONTO</p>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
