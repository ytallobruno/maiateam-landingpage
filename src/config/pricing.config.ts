// ========== CONFIGURAÇÃO DE PREÇOS ==========
// Define preços normais e promocionais de todos os planos

export const pricingConfig = {
    // ========== PREÇOS BLACK FRIDAY ==========
    blackFriday: {
        prata: {
            original: 329.9,
            discount: 295.0,
        },
        ouro: {
            original: 419.9,
            discount: 375.0,
        },
        platinum: {
            original: 690.9,
            discount: 600.0,
        },
        protocolo: {
            price: 119.9,
        },
    },

    // ========== PREÇOS NORMAIS ==========
    normal: {
        prata: {
            vista: 295.9, // Preço à vista (PIX)
            credito: 329.9, // Preço parcelado
        },
        ouro: {
            vista: 375.9,
            credito: 419.9,
        },
        platinum: {
            vista: 619.9,
            credito: 690.9,
        },
        protocolo: 150.0, // Sempre o mesmo preço
    },
} as const;

// ========== FUNÇÕES AUXILIARES ==========

/** Calcula economias da Black Friday */
export const getBlackFridaySavings = () => ({
    prata: pricingConfig.blackFriday.prata.original - pricingConfig.blackFriday.prata.discount,
    ouro: pricingConfig.blackFriday.ouro.original - pricingConfig.blackFriday.ouro.discount,
    platinum: pricingConfig.blackFriday.platinum.original - pricingConfig.blackFriday.platinum.discount,
});

/** Retorna os preços baseado no modo ativo (Black Friday ou Normal) */
export const getCurrentPrices = (isBlackFriday: boolean) => {
    if (isBlackFriday) {
        return {
            prata: pricingConfig.blackFriday.prata.discount,
            prataOriginal: pricingConfig.blackFriday.prata.original,
            prataVista: null,
            prataCredito: null,
            ouro: pricingConfig.blackFriday.ouro.discount,
            ouroOriginal: pricingConfig.blackFriday.ouro.original,
            ouroVista: null,
            ouroCredito: null,
            platinum: pricingConfig.blackFriday.platinum.discount,
            platinumOriginal: pricingConfig.blackFriday.platinum.original,
            platinumVista: null,
            platinumCredito: null,
            protocolo: pricingConfig.blackFriday.protocolo.price,
            isBlackFriday: true,
        };
    }

    return {
        prata: pricingConfig.normal.prata.credito,
        prataOriginal: null,
        prataVista: pricingConfig.normal.prata.vista,
        prataCredito: pricingConfig.normal.prata.credito,
        ouro: pricingConfig.normal.ouro.credito,
        ouroOriginal: null,
        ouroVista: pricingConfig.normal.ouro.vista,
        ouroCredito: pricingConfig.normal.ouro.credito,
        platinum: pricingConfig.normal.platinum.credito,
        platinumOriginal: null,
        platinumVista: pricingConfig.normal.platinum.vista,
        platinumCredito: pricingConfig.normal.platinum.credito,
        protocolo: pricingConfig.normal.protocolo,
        isBlackFriday: false,
    };
};
