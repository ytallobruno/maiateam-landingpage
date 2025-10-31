"use client";
import { useState, useEffect } from "react";

interface BlackFridayCountdownProps {
    targetDate: Date;
    onComplete?: () => void;
    className?: string;
    showLabels?: boolean;
    dark?: boolean; // Modo escuro para fundos claros (ex: FinalCTA verde)
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function BlackFridayCountdown({
    targetDate,
    onComplete,
    className = "",
    showLabels = true,
    dark = false,
}: BlackFridayCountdownProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

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

    // Classes condicionais baseadas no modo dark
    const boxClasses = dark
        ? "bg-black text-amber-400 border-2 border-black/20 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
        : "bg-gradient-to-br from-amber-400 to-amber-600 text-black shadow-lg";

    const separatorClasses = dark ? "text-black" : "text-amber-400";
    const labelClasses = dark ? "text-black font-semibold" : "text-gray-400";

    return (
        <div className={`flex gap-2 md:gap-4 items-center justify-center ${className}`}>
            {/* Days */}
            <div className="flex flex-col items-center">
                <div
                    className={`${boxClasses} font-bold text-2xl md:text-4xl px-3 md:px-4 py-2 md:py-3 rounded-lg min-w-[50px] md:min-w-[70px] text-center`}
                >
                    {formatNumber(timeLeft.days)}
                </div>
                {showLabels && <span className={`text-xs md:text-sm mt-1 ${labelClasses}`}>Dias</span>}
            </div>

            <span className={`text-2xl md:text-4xl font-bold ${separatorClasses}`}>:</span>

            {/* Hours */}
            <div className="flex flex-col items-center">
                <div
                    className={`${boxClasses} font-bold text-2xl md:text-4xl px-3 md:px-4 py-2 md:py-3 rounded-lg min-w-[50px] md:min-w-[70px] text-center`}
                >
                    {formatNumber(timeLeft.hours)}
                </div>
                {showLabels && <span className={`text-xs md:text-sm mt-1 ${labelClasses}`}>Horas</span>}
            </div>

            <span className={`text-2xl md:text-4xl font-bold ${separatorClasses}`}>:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
                <div
                    className={`${boxClasses} font-bold text-2xl md:text-4xl px-3 md:px-4 py-2 md:py-3 rounded-lg min-w-[50px] md:min-w-[70px] text-center`}
                >
                    {formatNumber(timeLeft.minutes)}
                </div>
                {showLabels && <span className={`text-xs md:text-sm mt-1 ${labelClasses}`}>Min</span>}
            </div>

            <span className={`text-2xl md:text-4xl font-bold ${separatorClasses}`}>:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
                <div
                    className={`${boxClasses} font-bold text-2xl md:text-4xl px-3 md:px-4 py-2 md:py-3 rounded-lg min-w-[50px] md:min-w-[70px] text-center animate-pulse`}
                >
                    {formatNumber(timeLeft.seconds)}
                </div>
                {showLabels && <span className={`text-xs md:text-sm mt-1 ${labelClasses}`}>Seg</span>}
            </div>
        </div>
    );
}
