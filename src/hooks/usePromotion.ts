"use client";
import { useState, useEffect } from "react";
import { isBlackFridayActive, isPriceCountdownActive, promotionsConfig } from "@/config/promotions.config";
import { getCurrentPrices, getBlackFridaySavings } from "@/config/pricing.config";

export function usePromotion() {
    const [isBlackFriday, setIsBlackFriday] = useState(false);
    const [isPriceCountdown, setIsPriceCountdown] = useState(false);
    const [prices, setPrices] = useState(getCurrentPrices(false));
    const [savings, setSavings] = useState<ReturnType<typeof getBlackFridaySavings> | null>(null);

    useEffect(() => {
        // Verificar status das promoções
        const checkPromotions = () => {
            const blackFridayActive = isBlackFridayActive();
            const priceCountdownActive = isPriceCountdownActive();

            setIsBlackFriday(blackFridayActive);
            setIsPriceCountdown(priceCountdownActive);
            setPrices(getCurrentPrices(blackFridayActive));
            setSavings(blackFridayActive ? getBlackFridaySavings() : null);
        };

        // Primeira verificação imediata
        checkPromotions();

        // Se NENHUMA flag está ativada, não precisa verificar nada
        if (!promotionsConfig.blackFriday.enabled && !promotionsConfig.priceCountdown.enabled) {
            return; // Zero overhead quando não há promoções
        }

        // Calcular tempo até o fim das promoções ativas
        const getTimeUntilEnd = () => {
            const now = new Date().getTime();
            const times: number[] = [];

            // Verificar Black Friday se estiver habilitada
            if (promotionsConfig.blackFriday.enabled) {
                const endTime = promotionsConfig.blackFriday.endDate.getTime();
                const timeLeft = endTime - now;
                if (timeLeft > 0) times.push(timeLeft);
            }

            // Verificar Price Countdown se estiver habilitado
            if (promotionsConfig.priceCountdown.enabled) {
                const endTime = promotionsConfig.priceCountdown.endDate.getTime();
                const timeLeft = endTime - now;
                if (timeLeft > 0) times.push(timeLeft);
            }

            // Retornar o menor tempo (promoção que termina primeiro)
            return times.length > 0 ? Math.min(...times) : null;
        };

        const timeUntilEnd = getTimeUntilEnd();

        // Se não há promoção ativa ou já expirou, não precisa verificar
        if (!timeUntilEnd || timeUntilEnd <= 0) {
            return;
        }

        const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutos em ms

        // Se faltar MAIS de 5 minutos, agendar verificação para quando faltar 5 minutos
        if (timeUntilEnd > FIVE_MINUTES) {
            const timeUntilFiveMinutes = timeUntilEnd - FIVE_MINUTES;

            const timeout = setTimeout(() => {
                // Quando faltar 5 minutos, recarregar o componente para iniciar verificações
                checkPromotions();
            }, timeUntilFiveMinutes);

            return () => clearTimeout(timeout);
        }

        // Se faltar 5 minutos ou menos, verificar a cada 1 segundo (countdown preciso)
        const interval = setInterval(() => {
            checkPromotions();

            // Verificar se a promoção terminou
            const newTimeUntilEnd = getTimeUntilEnd();
            if (!newTimeUntilEnd || newTimeUntilEnd <= 0) {
                clearInterval(interval);
            }
        }, 1000); // 1 segundo

        return () => clearInterval(interval);
    }, []);

    return {
        isBlackFriday,
        isPriceCountdown,
        prices,
        savings,
        blackFridayEndDate: promotionsConfig.blackFriday.endDate,
        priceCountdownEndDate: promotionsConfig.priceCountdown.endDate,
        priceCountdownMessage: promotionsConfig.priceCountdown.message,
    };
}
