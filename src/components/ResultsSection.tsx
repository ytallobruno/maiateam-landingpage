"use client";

import { resultsConfig } from "@/config/results.config";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { A11y, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ResultCard from "./ResultCard";

export default function ResultsSection() {
    const results = resultsConfig;

    return (
        <motion.section
            id="results"
            className="bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 lg:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    className="mb-10 text-center md:mb-12"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl">
                        <span className="text-green-400">Transformações</span> Reais
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                        Passe os cards e veja o resultado, o contexto e a estratégia aplicada em cada aluna.
                    </p>
                </motion.div>

                <motion.div
                    className="mb-8 md:mb-10"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, A11y, EffectCoverflow]}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 1.5,
                                slideShadows: false,
                                scale: 0.9,
                            }}
                            speed={650}
                            spaceBetween={14}
                            slidesPerView={1.4}
                            centeredSlides={true}
                            grabCursor
                            watchSlidesProgress
                            loop={true}
                            navigation={{
                                prevEl: ".results-nav-prev",
                                nextEl: ".results-nav-next",
                            }}
                            initialSlide={3}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.45,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 1.35,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 28,
                                    centeredSlides: false,
                                },
                            }}
                            className="results-swiper !pb-6 md:!pb-8"
                            aria-label="Carrossel de transformações das alunas"
                            a11y={{
                                prevSlideMessage: "Slide anterior",
                                nextSlideMessage: "Próximo slide",
                                paginationBulletMessage: "Ir para o slide {{index}}",
                                firstSlideMessage: "Este é o primeiro slide",
                                lastSlideMessage: "Este é o último slide",
                            }}
                        >
                            {results.map((result, index) => {
                                return (
                                    <SwiperSlide key={result.name}>
                                        <ResultCard result={result} index={index} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>

                        <button
                            type="button"
                            aria-label="Ver transformação anterior"
                            className="results-nav-prev absolute left-0 md:left-2 top-[40%] z-20 -translate-y-1/2 h-11 w-11 rounded-full border-2 border-green-300/60 text-green-300 hidden sm:inline-flex items-center justify-center transition-all duration-300 hover:bg-green-300 hover:text-black hover:border-green-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            <span aria-hidden="true" className="text-2xl font-bold leading-none">
                                ‹
                            </span>
                        </button>

                        <button
                            type="button"
                            aria-label="Ver próxima transformação"
                            className="results-nav-next absolute right-0 md:right-2 top-[40%] z-20 -translate-y-1/2 h-11 w-11 rounded-full border-2 border-green-300/60 text-green-300 hidden sm:inline-flex items-center justify-center transition-all duration-300 hover:bg-green-300 hover:text-black hover:border-green-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            <span aria-hidden="true" className="text-2xl font-bold leading-none">
                                ›
                            </span>
                        </button>

                        <div className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden h-14 w-[calc(100%+1rem)] -translate-x-1/2 -translate-y-1/2 justify-between sm:flex">
                            <div className="h-full w-16 bg-gradient-to-r from-black/5 to-transparent" />
                            <div className="h-full w-16 bg-gradient-to-l from-black/5 to-transparent" />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-10 flex justify-center md:mb-12"
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-300 sm:text-sm">
                        <span className="font-semibold text-green-300">{results.length} casos reais</span>
                        <span aria-hidden="true" className="text-green-400">
                            •
                        </span>
                        <span>Sem promessas vagas: evolução mensurável e aplicável</span>
                    </div>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <div className="mx-auto max-w-3xl rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-400/10 to-green-600/10 p-6 md:p-8">
                        <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                            Você terá acesso à <span className="text-green-400">mesma metodologia</span>
                        </h3>
                        <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                            As mesmas estratégias que usei com todas essas mulheres para obter esses resultados
                            incríveis.
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-green-400 px-5 py-2.5 text-sm font-bold text-black sm:px-6 sm:py-3 sm:text-base">
                                <CheckCircle className="w-5 h-5" />
                                Metodologia Comprovada
                            </div>
                            <a
                                href="#pricing"
                                className="inline-flex items-center gap-2 rounded-full border border-green-400/60 bg-black px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-green-300 transition-all duration-200 hover:bg-green-400 hover:text-black"
                            >
                                Ver planos e começar
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
