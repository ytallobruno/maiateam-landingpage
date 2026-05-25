// ========== CONFIGURAÇÃO DE PLANOS ==========
// Define a estrutura e conteúdo de todos os planos

export type PlanThemeKey = "gray" | "green" | "yellow" | "purple" | "amber" | "orange" | "cyan";

export type PlanCardTheme = {
    cardBorder: string;
    cardBg: string;
    badgeClass: string;
    priceClass: string;
    iconClass: string;
    hoverClass: string;
    buttonClass: string;
    featureBoxClass: string;
    pixSavingsClass: string;
};

export interface PlanFeatures {
    id: string;
    name: string;
    description: string;
    features: string[];
    whatsappMessage: string;
    paymentLink?: string;
    theme: {
        normal: PlanThemeKey;
        blackFriday: PlanThemeKey;
    };
}

export const themeClassesConfig: Record<PlanThemeKey, PlanCardTheme> = {
    gray: {
        cardBorder: "border-zinc-300/35",
        cardBg: "bg-gradient-to-b from-[#121212] to-[#0b0b0b]",
        badgeClass: "bg-gradient-to-r from-zinc-300 to-zinc-500 text-black",
        priceClass: "text-zinc-100",
        iconClass: "text-zinc-300",
        hoverClass: "hover:border-zinc-200/60 hover:shadow-[0_24px_44px_rgba(212,212,216,0.14)]",
        buttonClass: "bg-zinc-200 text-black hover:bg-zinc-100",
        featureBoxClass: "border-zinc-300/15 bg-zinc-300/[0.05]",
        pixSavingsClass: "bg-zinc-400/15 border-zinc-300/35 text-zinc-200",
    },
    green: {
        cardBorder: "border-green-400/45",
        cardBg: "bg-gradient-to-b from-[#07140d] to-[#050d08]",
        badgeClass: "bg-gradient-to-r from-green-300 to-green-500 text-black",
        priceClass: "text-green-300",
        iconClass: "text-green-400",
        hoverClass: "hover:border-green-300 hover:shadow-[0_24px_44px_rgba(74,222,128,0.18)]",
        buttonClass: "bg-gradient-to-r from-green-300 to-green-500 text-black hover:brightness-105",
        featureBoxClass: "border-green-300/20 bg-green-400/[0.06]",
        pixSavingsClass: "bg-green-500/15 border-green-300/40 text-green-200",
    },
    yellow: {
        cardBorder: "border-yellow-400/45",
        cardBg: "bg-gradient-to-b from-[#171406] to-[#0d0b05]",
        badgeClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black",
        priceClass: "text-yellow-300",
        iconClass: "text-yellow-300",
        hoverClass: "hover:border-yellow-300 hover:shadow-[0_24px_44px_rgba(250,204,21,0.16)]",
        buttonClass: "bg-gradient-to-r from-yellow-300 to-amber-400 text-black hover:brightness-105",
        featureBoxClass: "border-yellow-300/20 bg-yellow-400/[0.06]",
        pixSavingsClass: "bg-yellow-400/15 border-yellow-300/40 text-yellow-200",
    },
    purple: {
        cardBorder: "border-purple-400/45",
        cardBg: "bg-gradient-to-b from-[#140c22] to-[#0b0814]",
        badgeClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black",
        priceClass: "text-purple-200",
        iconClass: "text-purple-300",
        hoverClass: "hover:border-purple-200 hover:shadow-[0_24px_44px_rgba(168,85,247,0.18)]",
        buttonClass: "bg-gradient-to-r from-purple-300 to-purple-500 text-black hover:brightness-105",
        featureBoxClass: "border-purple-300/20 bg-purple-400/[0.06]",
        pixSavingsClass: "bg-purple-400/15 border-purple-300/40 text-purple-200",
    },
    amber: {
        cardBorder: "border-amber-500/50",
        cardBg: "bg-gradient-to-b from-[#16110a] to-[#0d0a07]",
        badgeClass: "bg-gradient-to-r from-amber-500 to-amber-600 text-black",
        priceClass: "text-amber-300",
        iconClass: "text-amber-300",
        hoverClass: "hover:border-amber-300 hover:shadow-[0_24px_44px_rgba(245,158,11,0.16)]",
        buttonClass: "bg-amber-500 text-black hover:bg-amber-400",
        featureBoxClass: "border-amber-400/20 bg-amber-500/[0.06]",
        pixSavingsClass: "bg-amber-500/15 border-amber-400/40 text-amber-300",
    },
    orange: {
        cardBorder: "border-orange-300/70",
        cardBg: "bg-gradient-to-b from-[#181007] to-[#0f0a05]",
        badgeClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black",
        priceClass: "text-orange-200",
        iconClass: "text-orange-200",
        hoverClass: "hover:border-orange-200 hover:shadow-[0_24px_48px_rgba(251,146,60,0.2)]",
        buttonClass: "bg-gradient-to-r from-amber-300 to-orange-400 text-black hover:brightness-105",
        featureBoxClass: "border-orange-300/25 bg-orange-400/[0.06]",
        pixSavingsClass: "bg-orange-400/15 border-orange-300/45 text-orange-200",
    },
    cyan: {
        cardBorder: "border-cyan-300/55",
        cardBg: "bg-gradient-to-b from-[#091218] to-[#070b0f]",
        badgeClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black",
        priceClass: "text-cyan-200",
        iconClass: "text-cyan-300",
        hoverClass: "hover:border-cyan-200 hover:shadow-[0_24px_44px_rgba(34,211,238,0.16)]",
        buttonClass: "bg-gradient-to-r from-cyan-300 to-sky-500 text-black hover:brightness-105",
        featureBoxClass: "border-cyan-300/20 bg-cyan-400/[0.06]",
        pixSavingsClass: "bg-cyan-500/15 border-cyan-300/40 text-cyan-200",
    },
};

export const plansConfig: Record<string, PlanFeatures> = {
    avulso: {
        id: "avulso",
        name: "PROTOCOLO AVULSO",
        description: "Plano Basic avulso com um único protocolo",
        features: [
            "1 planilha de treino permanente",
            "Alongamentos específicos",
            "Diretrizes de execução",
            "Acesso vitalício",
            "Sem acesso à nova plataforma de alunos",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso",
        paymentLink: "https://pay.kiwify.com.br/Xcq6j4S",
        theme: {
            normal: "green",
            blackFriday: "amber",
        },
    },
    mensal: {
        id: "mensal",
        name: "PLANO MENSAL",
        description: "Plano Basic mensal com protocolo fixo de 4 semanas e vagas limitadas",
        features: [
            "Acesso à nova plataforma de alunos",
            "Vídeos de TODOS os exercícios prescritos",
            "Alongamentos específicos",
            "Ajustes periódicos nos treinos",
            "Protocolo de 4 semanas (renovação mensal)",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Mensal",
        theme: {
            normal: "purple",
            blackFriday: "purple",
        },
    },
    prata: {
        id: "prata",
        name: "PLANO PRATA",
        description: "Plano Premium de entrada com 2 protocolos de treino e acesso à nova plataforma de alunos",
        features: [
            "Acesso à nova plataforma de alunos",
            "Vídeos de TODOS os exercícios prescritos",
            "Planilha de controle de carga",
            "Alongamentos específicos",
            "Ajustes periódicos nos treinos",
            "Protocolo de 6 semanas",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Prata",
        theme: {
            normal: "gray",
            blackFriday: "amber",
        },
    },
    ouro: {
        id: "ouro",
        name: "PLANO OURO",
        description: "Plano Premium com 3 protocolos de treino e acompanhamento mais próximo",
        features: [
            "Acesso à nova plataforma de alunos",
            "Vídeos de TODOS os exercícios prescritos",
            "Planilha de controle de carga",
            "Alongamentos específicos",
            "Ajustes periódicos nos treinos",
            "Reunião de alinhamento a cada 6 semanas para entrega do protocolo",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Ouro",
        theme: {
            normal: "yellow",
            blackFriday: "yellow",
        },
    },
    platinum: {
        id: "platinum",
        name: "PLANO PLATINUM",
        description: "Plano Premium com 4 protocolos de treino e acompanhamento avançado",
        features: [
            "Acesso à nova plataforma de alunos",
            "Vídeos de TODOS os exercícios prescritos",
            "Planilha de controle de carga",
            "Alongamentos específicos",
            "Ajustes periódicos nos treinos",
            "Reunião de alinhamento a cada 6 semanas para entrega do protocolo",
        ],
        whatsappMessage: "Oii%20Lucas%21%20Gostaria%20do%20Plano%20Platinum",
        theme: {
            normal: "cyan",
            blackFriday: "orange",
        },
    },
};

// ========== BADGES ==========
export const badgesConfig = {
    blackFriday: {
        avulso: "Preço Fixo",
        mensal: "MENSAL",
        prata: "🔥 BLACK FRIDAY",
        ouro: "🏆 BLACK FRIDAY + MAIS POPULAR",
        platinum: "👑 BLACK FRIDAY PREMIUM",
    },
    normal: {
        avulso: "MAIS VENDIDO",
        mensal: "MENSAL",
        prata: "INICIAL",
        ouro: "RECOMENDADO",
        platinum: "PREMIUM",
    },
};

// ========== ORDEM DE EXIBIÇÃO ==========
export const planOrderConfig = {
    blackFriday: ["avulso", "mensal", "prata", "ouro", "platinum"],
    normal: ["avulso", "mensal", "prata", "ouro", "platinum"],
};

// ========== PLANOS DESTACADOS ==========
export const highlightedPlansConfig = {
    blackFriday: "ouro",
    normal: "avulso",
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
export const getPlanTheme = (planId: string, isBlackFriday: boolean): PlanThemeKey => {
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

/** Retorna as classes de tema para o card do plano */
export const getPlanThemeClasses = (planId: string, isBlackFriday: boolean, hasPremiumFocus: boolean) => {
    const themeKey = getPlanTheme(planId, isBlackFriday);
    const base = themeClassesConfig[themeKey] || themeClassesConfig.gray;

    if (!isBlackFriday && hasPremiumFocus) {
        if (planId === "ouro") {
            return { ...base, cardBorder: "border-yellow-300/75" };
        }
        if (planId === "avulso") {
            return { ...base, cardBorder: "border-green-400/75" };
        }
    }

    return base;
};
