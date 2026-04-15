import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Treino para Emagrecimento Feminino",
    description:
        "Guia prático de treino para emagrecimento feminino com estratégia de progressão, consistência e treino personalizado.",
    alternates: {
        canonical: "/emagrecimento-feminino",
    },
    openGraph: {
        title: "Treino para Emagrecimento Feminino",
        description:
            "Guia prático de treino para emagrecimento feminino com estratégia de progressão, consistência e treino personalizado.",
        url: "/emagrecimento-feminino",
    },
    twitter: {
        title: "Treino para Emagrecimento Feminino",
        description:
            "Guia prático de treino para emagrecimento feminino com estratégia de progressão, consistência e treino personalizado.",
    },
};

export default function EmagrecimentoFemininoPage() {
    return (
        <main className="min-h-screen bg-black pb-16 pt-28 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    Emagrecimento feminino com treino personalizado
                </h1>
                <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
                    Emagrecer com qualidade exige planejamento de treino, controle de progressão e execução correta. Um
                    protocolo individual evita excesso de volume, melhora aderência e acelera resultado sustentável.
                </p>

                <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                    <h2 className="text-2xl font-semibold text-white">Estratégia usada no protocolo</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                        <li>Organização de frequência semanal conforme sua rotina.</li>
                        <li>Progressão de carga e volume com monitoramento.</li>
                        <li>Combinação de exercícios para gasto energético e composição corporal.</li>
                        <li>Ajustes periódicos para evitar platô e manter consistência.</li>
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl font-semibold text-white">Resultados que buscamos</h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                        Redução de gordura corporal, melhora de definição muscular e evolução de performance sem abrir
                        mão de um treino viável no dia a dia. O foco é resultado real, não promessa genérica.
                    </p>
                </section>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/#results"
                        className="rounded-full bg-green-400 px-6 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-green-300 sm:text-base"
                    >
                        Ver casos de transformação
                    </Link>
                    <Link
                        href="/hipertrofia-feminina"
                        className="rounded-full border border-green-400/50 px-6 py-3 text-center text-sm font-semibold text-green-300 transition-colors hover:bg-green-400/10 sm:text-base"
                    >
                        Guia de hipertrofia feminina
                    </Link>
                </div>
            </div>
        </main>
    );
}
