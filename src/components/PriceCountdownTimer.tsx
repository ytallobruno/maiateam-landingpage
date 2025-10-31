"use client";
import { useState, useEffect } from "react";

interface PriceCountdownTimerProps {
    targetDate: Date;
    message?: string;
}

export default function PriceCountdownTimer({ targetDate, message = "Preços sobem em:" }: PriceCountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-col items-center gap-3">
            {message && <p className="text-red-400 font-bold text-sm md:text-base">{message}</p>}
            <div className="flex gap-2 md:gap-4">
                <TimeUnit value={timeLeft.days} label="Dias" />
                <Separator />
                <TimeUnit value={timeLeft.hours} label="Horas" />
                <Separator />
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <Separator />
                <TimeUnit value={timeLeft.seconds} label="Seg" />
            </div>
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white font-bold text-xl md:text-3xl rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[50px] md:min-w-[70px] text-center shadow-lg">
                {value.toString().padStart(2, "0")}
            </div>
            <span className="text-gray-400 text-xs md:text-sm mt-1 font-medium">{label}</span>
        </div>
    );
}

function Separator() {
    return <div className="flex items-center text-red-400 font-bold text-2xl md:text-4xl pb-6">:</div>;
}
