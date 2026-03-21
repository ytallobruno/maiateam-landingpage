"use client";

import Image from "next/image";
import React from "react";

type Result = {
    image: string;
    name: string;
    result: string;
    quote: string;
    featured?: boolean;
};

export default function ResultCard({ result, index }: { result: Result; index: number }) {
    return (
        <article
            className={`h-full cursor-default bg-gradient-to-br from-gray-800 to-gray-900 border rounded-2xl overflow-hidden transition-transform duration-300 group ${
                result.featured
                    ? "border-green-400/60 shadow-[0_12px_30px_rgba(74,222,128,0.18)]"
                    : "border-green-500/20"
            }`}
            aria-label={`Resultado de ${result.name}`}
        >
            {/* Foto em destaque: mantém proporção retangular (3/4) */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                    src={result.image}
                    alt={`Transformação de ${result.name}`}
                    width={420}
                    height={560}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        result.name === "Catarina" ? "object-[center_30%]" : ""
                    }`}
                    priority={index === 0}
                />

                {result.featured && (
                    <div className="absolute top-3 left-3 z-10 bg-green-400 text-black font-bold py-1.5 px-3 rounded-full text-xs">
                        ⭐ Transformação Destaque
                    </div>
                )}
            </div>

            {/* Área de texto separada abaixo da foto */}
            <div className="p-4">
                <div className="mb-3 flex justify-center">
                    <span className="text-sm bg-green-400 text-black font-semibold px-3 py-1 rounded-full">
                        {result.result}
                    </span>
                </div>

                <h3 className="text-center text-white font-bold text-base md:text-lg">{result.name}</h3>

                <p className="text-gray-300 text-sm leading-relaxed italic text-center mt-2 line-clamp-3">
                    “{result.quote}”
                </p>
            </div>
        </article>
    );
}
