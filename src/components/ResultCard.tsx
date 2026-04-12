"use client";

import Image from "next/image";
import React from "react";

export type Result = {
    image: string;
    name: string;
    result: string;
    quote: string;
    featured?: boolean;
};

export default function ResultCard({ result, index }: { result: Result; index: number }) {
    const ctaLabel = "Quero um resultado assim";

    return (
        <article
            className={`h-full cursor-default bg-gradient-to-b from-gray-900 to-black border rounded-2xl overflow-hidden transition-all duration-300 group flex flex-col ${
                result.featured
                    ? "border-green-400/60 shadow-[0_16px_40px_rgba(74,222,128,0.16)]"
                    : "border-white/10 hover:border-green-500/40"
            }`}
            aria-label={`Resultado de ${result.name}`}
        >
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                    src={result.image}
                    alt={`Transformação de ${result.name}`}
                    width={420}
                    height={560}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                        result.name === "Catarina" ? "object-[center_70%]" : ""
                    }`}
                    priority={index === 0}
                />
                {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-black to-transparent" /> */}

                {result.featured && (
                    <div className="absolute top-3 left-3 z-20 bg-green-400 text-black font-bold py-1.5 px-3 rounded-full text-xs tracking-wide">
                        ⭐ Caso em destaque
                    </div>
                )}
            </div>

            <div className="p-5 flex flex-1 flex-col gap-4">
                <div className="rounded-xl border border-green-400/30 bg-green-400/10 px-3 py-2">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-green-300/80 mb-1">Resultado</p>
                    <p className="text-green-300 font-semibold leading-snug">{result.result}</p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-white text-lg font-semibold leading-tight">{result.name}</h3>
                    {/* <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">Contexto</p> */}
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{result.quote}</p>
                </div>

                <a
                    href="#pricing"
                    className="mt-auto inline-flex w-fit self-center items-center gap-2 rounded-full border border-green-400/45 bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-green-300 transition-colors duration-200 hover:bg-green-400 hover:text-black"
                >
                    {ctaLabel}
                    <span aria-hidden="true">→</span>
                </a>
            </div>
        </article>
    );
}
