import { pricingConfig } from "@/config/pricing.config";

const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const fallbackSiteUrl = "http://localhost:3000";

export const siteUrl = (() => {
    if (!envSiteUrl) return fallbackSiteUrl;
    try {
        return new URL(envSiteUrl).toString().replace(/\/$/, "");
    } catch {
        return fallbackSiteUrl;
    }
})();

export const siteMetadata = {
    siteName: "Lucas Maia Consultoria",
    defaultTitle: "Personal Trainer Online para Mulheres | Lucas Maia",
    titleTemplate: "%s | Lucas Maia",
    description:
        "Consultoria com personal trainer online para mulheres com treino personalizado, foco em emagrecimento e hipertrofia feminina.",
    keywords: [
        "personal trainer online",
        "personal trainer online para mulheres",
        "consultoria fitness feminina",
        "treino personalizado feminino",
        "emagrecimento feminino",
        "hipertrofia feminina",
        "treino para gluteos",
        "Lucas Maia personal trainer",
    ],
    socialImage: "/LucasMaiaPersonal.webp",
} as const;

export const homeFaqs = [
    {
        question: "Como irei receber meu treino?",
        answer: "Você receberá seu treino via WhatsApp após me encaminhar todo material solicitado para elaboração do seu protocolo personalizado.",
    },
    {
        question: "Tenho acesso por quanto tempo?",
        answer: "Depende do plano que você adquirir. No plano avulso você terá o treino de forma permanente e poderá adquirir outro protocolo avulso quando quiser. Em todos os outros planos, cada treino tem duração de 6 semanas. E após esse período eu reavalio o seu físico para enviar a continuação dos treinos.",
    },
    {
        question: "Irei receber uma ficha genérica?",
        answer: "NÃO! Seu treino será construído do ZERO e feito sob medida para seus objetivos. Por isso todo material de fotos e anamnese é solicitado, para que sua experiência seja única.",
    },
    {
        question: "Posso enviar vídeos para correção?",
        answer: "Ao adquirir qualquer plano COM EXCEÇÃO do avulso, você poderá enviar quantos vídeos quiser de TODOS os exercícios. A consultoria só fará sentido caso haja também a sua participação com o envio dos vídeos.",
    },
    {
        question: "Como funciona após o pagamento?",
        answer: "Após o pagamento, enviarei uma mensagem no seu WhatsApp solicitando todo material para construir seu treino e em 5 dias corridos retornarei seu protocolo completo.",
    },
    {
        question: "Terei suporte?",
        answer: "Você terá todo suporte necessário de segunda à sexta e também em alguns fins de semana, ajustes no seu treino caso haja mudanças bruscas em sua rotina, retirada de dúvidas e até mesmo se necessário eu gravo vídeos explicativos para você em uma academia para te enviar.",
    },
] as const;

export const homeOfferCatalog = [
    {
        name: "Plano Prata",
        price: pricingConfig.normal.prata.vista,
        description: "2 protocolos de treino com duração de 6 semanas cada um.",
    },
    {
        name: "Plano Ouro",
        price: pricingConfig.normal.ouro.vista,
        description: "3 protocolos de treino com duração de 6 semanas cada um.",
    },
    {
        name: "Plano Platinum",
        price: pricingConfig.normal.platinum.vista,
        description: "4 protocolos de treino com duração de 6 semanas cada um.",
    },
    {
        name: "Protocolo Avulso",
        price: pricingConfig.normal.protocolo.vista,
        description: "Treino único personalizado sem acompanhamento recorrente.",
    },
] as const;
