"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ResultsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px -20% 0px",
    });

    const results = [
        {
            image: "/resultado-catarina.webp",
            name: "Catarina",
            result: "Quadríceps e posteriores com muito mais volume",
            quote: "Não faço dieta, apenas treino",
            featured: true,
        },
        {
            image: "/resultado-thamiris.webp",
            name: "Thamiris Lima",
            result: "Evolução em 8 semanas",
            quote: "Aluna de protocolo avulso e com apenas 8 semanas (apenas um protocolo de treino) obteve melhora no quadríceps, em formato e também em volume.",
            featured: false,
        },
        {
            image: "/resultado-gabriele.webp",
            name: "Gabriele Martins",
            result: "Dorsais de verdade em 1 ano",
            quote: "Um ano de duração de uma foto para a outra e construímos dorsais de verdade. Aluna com rotina corrida, pouco tempo para treinar e ainda sim com um bom acompanhamento e treinos periodizados obteve uma melhora significativa da cintura escapular.",
            featured: false,
        },
        {
            image: "/resultado-leticia.webp",
            name: "Letícia Castro",
            result: "Evolução aproximada de 6 meses",
            quote: "Aluna do plano ouro, aproximadamente 6 meses de diferente de uma foto pra outra, conseguimos reduzir a celulite, melhorar o aspecto dos membros inferiores e arredondamento do glúteo",
            featured: false,
        },
        {
            image: "/resultado-giovana.webp",
            name: "Giovana",
            result: "Construída do zero em 2 anos",
            quote: "Eu era falsa magra, com pouquíssima massa e muita gordura. Em 2 anos aprendi a treinar e construí um físico do zero.",
            featured: false,
        },
        {
            image: "/resultado-rochelly.webp",
            name: "Rochelly",
            result: "Evolução completa em 1 ano",
            quote: "Um ano de uma foto pra outra, outra postura, um glúteo de verdade construído em que substituímos gordura por massa muscular de verdade. Treinava em horário de pico, rotina de CLT e tinha apenas 40-45min para treinar; ainda sim foi possível alcançar um resultado incrível",
            featured: false,
        },
    ];

    return (
        <motion.section
            ref={ref}
            id="results"
            className="py-24 bg-gradient-to-b from-gray-900 to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        <span className="text-green-400">Transformações</span> Reais
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Conheça algumas das histórias de sucesso das minhas alunas
                    </p>
                </motion.div>

                <motion.div
                    className="mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                        y: isInView ? 0 : 50,
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{ duration: 0.8, delay: isInView ? 0.4 : 0 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{ clickable: true }}
                        loop
                        centeredSlides={false}
                        initialSlide={0}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.6,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.1,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 28,
                            },
                        }}
                        className="!pb-12"
                        aria-label="Carrossel de transformações das alunas"
                    >
                        {results.map((result, index) => (
                            <SwiperSlide key={result.name}>
                                <article
                                    className={`h-full cursor-default bg-gradient-to-br from-gray-800 to-gray-900 border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_25px_rgba(74,222,128,0.08)] group ${
                                        result.featured
                                            ? "border-green-400/60 shadow-[0_10px_30px_rgba(74,222,128,0.18)]"
                                            : "border-green-500/20"
                                    }`}
                                    aria-label={`Resultado de ${result.name}`}
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <Image
                                            src={result.image}
                                            alt={`Transformação de ${result.name}`}
                                            width={420}
                                            height={560}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            priority={index === 0}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-3 left-3 right-3">
                                            <div
                                                className={`font-bold py-2 px-3 rounded-full text-center text-sm ${
                                                    result.featured
                                                        ? "bg-green-300 text-black"
                                                        : "bg-green-400 text-black"
                                                }`}
                                            >
                                                {result.result}
                                            </div>
                                        </div>
                                        {result.featured && (
                                            <div className="absolute top-3 left-3 bg-green-400 text-black font-bold py-1.5 px-3 rounded-full text-xs">
                                                ⭐ Transformação Destaque
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-5">
                                        <h3
                                            className={`font-bold mb-2 text-center ${
                                                result.featured ? "text-xl text-green-300" : "text-lg text-white"
                                            }`}
                                        >
                                            {result.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm leading-relaxed italic text-center">
                                            &ldquo;{result.quote}&rdquo;
                                        </p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{
                        y: isInView ? 0 : 30,
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: isInView ? 1.1 : 0,
                    }}
                >
                    <div className="bg-gradient-to-r from-green-400/10 to-green-600/10 border border-green-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Você terá acesso à <span className="text-green-400">mesma metodologia</span>
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            As mesmas estratégias que usei com todas essas mulheres para obter esses resultados
                            incríveis.
                        </p>
                        <div className="inline-flex items-center gap-2 bg-green-400 text-black font-bold py-3 px-6 rounded-full">
                            <CheckCircle className="w-5 h-5" />
                            Metodologia Comprovada
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
