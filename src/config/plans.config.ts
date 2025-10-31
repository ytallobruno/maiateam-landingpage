// ========== CONFIGURAÇÃO DE PLANOS ==========
// Define a estrutura e conteúdo de todos os planos

export type PlanTheme = "gray" | "green" | "yellow" | "purple" | "gold";

export interface PlanFeatures {
    id: string;
    name: string;
    description: string;
    features: string[];
    whatsappMessage: string;
    paymentLink?: string;
    theme: {
        normal: PlanTheme;
        blackFriday: PlanTheme;
    };
}

export const plansConfig: Record<string, PlanFeatures> = {
    prata: {
        id: "prata",
        name: "PLANO PRATA",
        description: "2 protocolos de treino com duração de 6 semanas cada um",
        features: [
            "Planilha com vídeos de TODOS os exercícios",
            "Planilha de controle de carga",
            "Alongamentos específicos",
            "Ajustes periódicos nos treinos",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata",
        theme: {
            normal: "gray",
            blackFriday: "gold",
        },
    },

    ouro: {
        id: "ouro",
        name: "PLANO OURO",
        description: "3 protocolos de treino com duração de 6 semanas cada um",
        features: [
            "Planilha com vídeos de TODOS os exercícios",
            "Planilha de controle de carga",
            "Todos os benefícios anteriores",
            "Chamada no Meet",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro",
        theme: {
            normal: "yellow",
            blackFriday: "gold",
        },
    },

    platinum: {
        id: "platinum",
        name: "PLANO PLATINUM",
        description: "4 protocolos de treino com duração de 6 semanas cada um",
        features: [
            "Planilha com vídeos de TODOS os exercícios",
            "Planilha de controle de carga",
            "Todos os benefícios anteriores",
            "24 semanas de acompanhamento",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum",
        theme: {
            normal: "purple",
            blackFriday: "gold",
        },
    },

    protocolo: {
        id: "avulso",
        name: "PROTOCOLO AVULSO",
        description: "1 treino único personalizado, mas sem o acompanhamento",
        features: [
            "1 planilha de treino permanente",
            "Alongamentos específicos",
            "Diretrizes de execução",
            "Acesso vitalício",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
        paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
        theme: {
            normal: "green",
            blackFriday: "green",
        },
    },
};

// ========== BADGES ==========
export const badgesConfig = {
    blackFriday: {
        prata: "🔥 BLACK FRIDAY",
        ouro: "🏆 BLACK FRIDAY + MAIS POPULAR",
        platinum: "👑 BLACK FRIDAY PREMIUM",
        protocolo: "Preço Fixo",
    },
    normal: {
        prata: "INICIAL",
        ouro: "RECOMENDADO",
        platinum: "PREMIUM",
        protocolo: "MAIS VENDIDO",
    },
};

// ========== ORDEM DE EXIBIÇÃO ==========
export const planOrderConfig = {
    blackFriday: ["prata", "ouro", "platinum", "protocolo"],
    normal: ["prata", "protocolo", "ouro", "platinum"],
};

// ========== PLANOS DESTACADOS ==========
export const highlightedPlansConfig = {
    blackFriday: "ouro", // Plano destacado na Black Friday
    normal: "protocolo", // Plano destacado no modo normal
};

// ========== FUNÇÕES AUXILIARES ==========

/** Gera o link do WhatsApp para um plano */
export const getWhatsAppLink = (planId: string, isBlackFriday: boolean) => {
    const plan = plansConfig[planId];
    if (!plan) return "#";

    const suffix = isBlackFriday ? "%20BLACK%20FRIDAY" : "";
    return `https://wa.me/5521972179585?text=${plan.whatsappMessage}${suffix}`;
};

/** Retorna o link de pagamento de um plano */
export const getPaymentLink = (planId: string) => {
    const plan = plansConfig[planId];
    return plan?.paymentLink || "#";
};

/** Retorna o badge apropriado para o plano */
export const getPlanBadge = (planId: string, isBlackFriday: boolean) => {
    const mode = isBlackFriday ? "blackFriday" : "normal";
    return badgesConfig[mode][planId as keyof typeof badgesConfig.blackFriday] || "";
};

/** Retorna o tema do plano baseado no modo */
export const getPlanTheme = (planId: string, isBlackFriday: boolean): PlanTheme => {
    const plan = plansConfig[planId];
    if (!plan) return "gray";

    return isBlackFriday ? plan.theme.blackFriday : plan.theme.normal;
};

/** Verifica se o plano é destacado */
export const isPlanHighlighted = (planId: string, isBlackFriday: boolean) => {
    const highlightedPlan = isBlackFriday ? highlightedPlansConfig.blackFriday : highlightedPlansConfig.normal;
    return planId === highlightedPlan;
};

/** Retorna a ordem dos planos */
export const getPlanOrder = (isBlackFriday: boolean) => {
    return isBlackFriday ? planOrderConfig.blackFriday : planOrderConfig.normal;
};
