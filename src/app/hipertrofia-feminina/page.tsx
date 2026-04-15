import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Hipertrofia Feminina para Pernas e Glúteos",
    description:
        "Veja como estruturar treino para hipertrofia feminina com foco em pernas e glúteos usando periodização e execução técnica.",
    alternates: {
        canonical: "/hipertrofia-feminina",
    },
    openGraph: {
        title: "Hipertrofia Feminina para Pernas e Glúteos",
        description:
            "Veja como estruturar treino para hipertrofia feminina com foco em pernas e glúteos usando periodização e execução técnica.",
        url: "/hipertrofia-feminina",
    },
    twitter: {
        title: "Hipertrofia Feminina para Pernas e Glúteos",
        description:
            "Veja como estruturar treino para hipertrofia feminina com foco em pernas e glúteos usando periodização e execução técnica.",
    },
};

export default function HipertrofiaFemininaPage() {
    return (
        <main className="min-h-screen bg-black pb-16 pt-28 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    Hipertrofia feminina com foco em pernas e glúteos
                </h1>
                <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
                    Construção muscular exige treino inteligente, técnica e constância. O protocolo direciona volume,
                    intensidade e frequência para acelerar hipertrofia feminina sem desperdício de sessão.
                </p>

                <section className="mt-10 rounded-2xl border border-green-400/25 bg-green-400/[0.06] p-5 sm:p-6">
                    <h2 className="text-2xl font-semibold text-green-300">Pilares para crescer com consistência</h2>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                        <li>Seleção de exercícios alinhada ao seu nível e objetivo estético.</li>
                        <li>Progressão de carga para estimular ganho de massa magra.</li>
                        <li>Distribuição semanal eficiente para recuperação muscular.</li>
                        <li>Correções técnicas para melhorar ativação e desempenho.</li>
                    </ul>
                </section>

                <section className="mt-10">
                    <h2 className="text-2xl font-semibold text-white">Erros comuns que travam resultado</h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                        Treino sem progressão, excesso de variação de exercícios, falta de periodização e execução sem
                        controle técnico. Um acompanhamento estruturado reduz esses erros e melhora a evolução.
                    </p>
                </section>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="/#pricing"
                        className="rounded-full bg-green-400 px-6 py-3 text-center text-sm font-bold text-black transition-colors hover:bg-green-300 sm:text-base"
                    >
                        Escolher plano de treino
                    </Link>
                    <Link
                        href="/personal-trainer-online-mulheres"
                        className="rounded-full border border-green-400/50 px-6 py-3 text-center text-sm font-semibold text-green-300 transition-colors hover:bg-green-400/10 sm:text-base"
                    >
                        Como funciona a consultoria online
                    </Link>
                </div>
            </div>
        </main>
    );
}
