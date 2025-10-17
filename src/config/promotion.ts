// Configuração centralizada da promoção
export const PROMOTION_CONFIG = {
  // Data limite do cronômetro (1 dia antes da mudança)
  endDateTime: "2025-10-23T23:59:59",

  // Data que será exibida nos textos (dia da mudança)
  displayDate: "24/10",
  displayDateFull: "24/10/2025",
} as const;

// Função para obter timestamp da data limite
export const getPromotionEndTimestamp = () => new Date(PROMOTION_CONFIG.endDateTime).getTime();

// Função para verificar se a promoção ainda está ativa
export const isPromotionActive = () => {
  const now = new Date().getTime();
  return now < getPromotionEndTimestamp();
};
