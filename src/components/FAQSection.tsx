"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { homeFaqs } from "@/config/seo.config";

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <motion.section
            id="faq"
            className="bg-black py-16 md:py-20 lg:py-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    className="mb-10 text-center md:mb-12 lg:mb-14"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl">
                        Perguntas <span className="text-green-400">Frequentes</span>
                    </h2>
                    <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                        Tire todas suas dúvidas sobre o protocolo personalizado
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ul className="space-y-2.5 md:space-y-4">
                        {homeFaqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            const triggerId = `faq-trigger-${index}`;
                            const panelId = `faq-panel-${index}`;

                            return (
                                <motion.li
                                    key={faq.question}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.25 + index * 0.06,
                                    }}
                                >
                                    <article
                                        className={`overflow-hidden rounded-xl border bg-[#0d0d0d] transition-all duration-300 ${
                                            isOpen
                                                ? "border-green-500/50 bg-gradient-to-br from-green-500/10 to-black shadow-[0_8px_30px_rgba(74,222,128,0.12)]"
                                                : "border-white/10 hover:border-green-500/35"
                                        }`}
                                    >
                                        <h3>
                                            <button
                                                id={triggerId}
                                                aria-expanded={isOpen}
                                                aria-controls={panelId}
                                                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400/70 md:gap-4 md:px-6 md:py-5"
                                                onClick={() => setOpenFaq(isOpen ? null : index)}
                                            >
                                                <span className="text-base font-semibold leading-snug text-white sm:text-lg md:text-xl">
                                                    {faq.question}
                                                </span>
                                                <span
                                                    className={`rounded-full border border-green-400/35 bg-black/35 p-1.5 transition-transform duration-300 md:p-1.5 ${
                                                        isOpen ? "rotate-180" : "rotate-0"
                                                    }`}
                                                >
                                                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-green-400" />
                                                </span>
                                            </button>
                                        </h3>

                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    id={panelId}
                                                    role="region"
                                                    aria-labelledby={triggerId}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="px-4 pb-4 text-sm leading-relaxed text-gray-300 sm:text-base md:px-6 md:pb-6">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </article>
                                </motion.li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
