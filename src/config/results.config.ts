// ========== CONFIGURAÇÃO DE RESULTADOS DE ALUNAS ==========
// Define o conteúdo exibido na seção de depoimentos/resultados das alunas

export interface Result {
    image: string;
    name: string;
    result: string;
    quote: string;
    featured?: boolean;
}

export const resultsConfig: Result[] = [
    {
        image: "/resultado-thamiris.webp",
        name: "Thamiris Lima",
        result: "Evolução em 8 semanas",
        quote: "Aluna de protocolo avulso e com apenas 8 semanas (um protocolo) obteve melhora no quadríceps, em formato e também em volume.",
        featured: false,
    },
    {
        image: "/resultado-gabriele.webp",
        name: "Gabriele Martins",
        result: "Dorsais de verdade em 1 ano",
        quote: "Um ano de uma foto para a outra e construímos dorsais de verdade. Aluna com rotina corrida e ainda sim obteve melhora da cintura escapular.",
        featured: false,
    },
    {
        image: "/resultado-leticia.webp",
        name: "Letícia Castro",
        result: "Evolução aproximada de 6 meses",
        quote: "Aluna do plano ouro, 6 meses de diferença entre fotos, conseguimos reduzir a celulite, melhorar o aspecto dos membros inferiores e do glúteo.",
        featured: false,
    },
    {
        image: "/resultado-ana.webp",
        name: "Ana",
        result: "Transformação em 4 meses",
        quote: "Aluna que iniciou no plano ouro com objetivo alinhar dieta com treinos individualizados.",
        featured: false,
    },
    {
        image: "/resultado-catarina2.webp",
        name: "Catarina",
        result: "Quadríceps e posteriores com muito mais volume",
        quote: "No seu primeiro campeonato, varreu diversos prêmios e obteve resultados incríveis.",
        featured: true,
    },
    {
        image: "/vanessa-resultado.jpeg",
        name: "Vanessa",
        result: "Transformação em 1 ano",
        quote: "42 anos e 1 ano de treinamento. Treinava já há 7 anos e seguia totalmente estagnada nos resultados.",
        featured: false,
    },
    {
        image: "/resultado-rochelly.webp",
        name: "Rochelly",
        result: "Evolução completa em 1 ano",
        quote: "Um glúteo de verdade construído com músculos de verdade. Treinava em horário de pico, rotina de CLT e tinha apenas 45min para treinar.",
        featured: false,
    },
    {
        image: "/manuela-resultado.jpeg",
        name: "Manuela",
        result: "Evolução em 8 meses",
        quote: "Aluna do plano ouro, em 8 meses de consultoria conseguimos de forma natural transformar o glúteo e as costas.",
        featured: false,
    },
];
