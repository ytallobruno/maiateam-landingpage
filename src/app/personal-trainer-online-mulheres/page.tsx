import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Personal Trainer Online para Mulheres",
    description:
        "Entenda como funciona a consultoria de personal trainer online para mulheres com treino sob medida, suporte e progressão individual.",
    alternates: {
        canonical: "/personal-trainer-online-mulheres",
    },
    openGraph: {
        title: "Personal Trainer Online para Mulheres",
        description:
            "Entenda como funciona a consultoria de personal trainer online para mulheres com treino sob medida, suporte e progressão individual.",
        url: "/personal-trainer-online-mulheres",
    },
    twitter: {
        title: "Personal Trainer Online para Mulheres",
        description:
            "Entenda como funciona a consultoria de personal trainer online para mulheres com treino sob medida, suporte e progressão individual.",
    },
};

export default function PersonalTrainerOnlineMulheresPage() {
    return (
        <main className="min-h-screen bg-black pb-16 pt-28 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    Personal trainer online para mulheres: como funciona na prática
                </h1>
                <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
                    A consultoria online é para quem precisa de um treino personalizado e aplicável à rotina real. O
                    processo envolve anamnese, avaliação do cenário atual, organização da rotina de treino e ajustes
                    periódicos para manter evolução consistente.
                </p>

                <section className="mt-10 rounded-2xl border border-green-400/25 bg-green-400/[0.06] p-5 sm:p-6">
                    <h2 className="text-2xl font-semibold text-green-300">O que você recebe na consultoria</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                        <li>Treino periodizado e individualizado de acordo com seu objetivo.</li>
                        <li>Planilha com vídeos de execução para todos os exercícios.</li>
                        <li>Ajustes estratégicos quando houver mudanças de rotina.</li>
                        <li>Direcionamento técnico para melhorar performance e consistência.</li>
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl font-semibold text-white">Para quem é indicado</h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                        Mulheres que querem emagrecer com estratégia, desenvolver glúteos e pernas, melhorar composição
                        corporal e sair de treinos genéricos. Também atende quem tem rotina corrida e precisa de um
                        plano objetivo e executável.
                    </p>
                </section>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/#pricing"
                        className="rounded-full bg-green-400 px-6 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-green-300 sm:text-base"
                    >
                        Ver planos da consultoria
                    </Link>
                    <Link
                        href="/emagrecimento-feminino"
                        className="rounded-full border border-green-400/50 px-6 py-3 text-center text-sm font-semibold text-green-300 transition-colors hover:bg-green-400/10 sm:text-base"
                    >
                        Treino para emagrecimento feminino
                    </Link>
                </div>
            </div>
        </main>
    );
}
