// ========== CONFIGURAÇÃO DE PROMOÇÕES ==========
// Controla Black Friday, Price Countdown e outras promoções

export const promotionsConfig = {
    // ========== BLACK FRIDAY ==========
    blackFriday: {
        enabled: true, // Liga/desliga modo Black Friday
        startDate: new Date("2026-11-01T00:00:00"), // Início da Black Friday
        endDate: new Date("2026-11-30T23:59:59"), // Fim da Black Friday
    },

    // ========== COUNTDOWN DE PREÇOS ==========
    priceCountdown: {
        enabled: false, // Liga/desliga o countdown de preços
        endDate: new Date("2026-12-31T23:59:59"), // Data fim do countdown
        message: "Preços sobem em:", // Mensagem do countdown
    },

    // ========== PROTOCOLO AVULSO ==========
    protocoloAvulso: {
        enabled: false, // Liga/desliga modo promocional para protocolo
        message: "APENAS 5 VAGAS", // Mensagem da flag
    },
} as const;

// ========== FUNÇÕES AUXILIARES ==========

/** Verifica se a Black Friday está ativa */
export const isBlackFridayActive = () => {
    if (!promotionsConfig.blackFriday.enabled) return false;

    const now = new Date();
    const { startDate, endDate } = promotionsConfig.blackFriday;

    return now >= startDate && now <= endDate;
};

/** Verifica se o Price Countdown está ativo */
export const isPriceCountdownActive = () => {
    if (!promotionsConfig.priceCountdown.enabled) return false;

    const now = new Date();
    return now <= promotionsConfig.priceCountdown.endDate;
};

/** Retorna as datas formatadas para exibição */
export const getPromotionDates = () => ({
    blackFriday: {
        start: promotionsConfig.blackFriday.startDate,
        end: promotionsConfig.blackFriday.endDate,
        endFormatted: promotionsConfig.blackFriday.endDate.toLocaleDateString("pt-BR"),
    },
    priceCountdown: {
        end: promotionsConfig.priceCountdown.endDate,
        endFormatted: promotionsConfig.priceCountdown.endDate.toLocaleDateString("pt-BR"),
        displayDate: promotionsConfig.priceCountdown.endDate.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
        }),
    },
});
