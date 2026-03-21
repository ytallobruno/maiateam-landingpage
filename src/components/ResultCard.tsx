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
            {/* Imagem no topo - shadcn-like (imagem separada do header) */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                    src={result.image}
                    alt={`Transformação de ${result.name}`}
                    width={420}
                    height={560}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        result.name === "Catarina" ? "object-[center_70%]" : ""
                    }`}
                    priority={index === 0}
                />

                {/* Featured badge sobre a foto (top-left) */}
                {result.featured && (
                    <div className="absolute top-3 left-3 z-20 bg-green-400 text-black font-bold py-1.5 px-3 rounded-full text-xs">
                        ⭐ Transformação Destaque
                    </div>
                )}
            </div>

            {/* CardHeader + CardContent (shadcn-like) */}
            <div className="p-4">
                <div className="mb-3">
                    <h3 className="text-white text-lg font-semibold">{result.name}</h3>
                    <p className="text-sm text-green-400 font-medium">{result.result}</p>
                </div>

                <div>
                    <p className="text-gray-300 text-sm italic leading-relaxed line-clamp-3">“{result.quote}”</p>
                </div>
            </div>
        </article>
    );
}
