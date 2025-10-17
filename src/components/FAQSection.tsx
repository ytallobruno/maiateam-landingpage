"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-20% 0px -20% 0px",
    });

    const faqs = [
        {
            question: "Como irei receber meu treino?",
            answer: "Você receberá seu treino via WhatsApp após me encaminhar todo material solicitado para elaboração do seu protocolo personalizado.",
        },
        {
            question: "Tenho acesso por quanto tempo?",
            answer: "Depende do plano que você adquirir. No plano avulso você terá o treino de forma permanente e poderá adquirir outro protocolo avulso quando quiser. Em todos os outros planos, cada treino tem duração de 6 semanas. E após esse período eu reavalio o seu físico para enviar a continuação dos treinos.",
        },
        {
            question: "Irei receber uma ficha genérica?",
            answer: "NÃO! Seu treino será construído do ZERO e feito sob medida para seus objetivos. Por isso todo material de fotos e anamnese é solicitado, para que sua experiência seja única.",
        },
        {
            question: "Posso enviar vídeos para correção?",
            answer: "Ao adquirir qualquer plano COM EXCEÇÃO do avulso, você poderá enviar quantos vídeos quiser de TODOS os exercícios. A consultoria só fará sentido caso haja também a sua participação com o envio dos vídeos.",
        },
        {
            question: "Como funciona após o pagamento?",
            answer: "Após o pagamento, enviarei uma mensagem no seu WhatsApp solicitando todo material para construir seu treino e em 5 dias corridos retornarei seu protocolo completo.",
        },
        {
            question: "Terei suporte?",
            answer: "Você terá todo suporte necessário de segunda à sexta e também em alguns fins de semana, ajustes no seu treino caso haja mudanças bruscas em sua rotina, retirada de dúvidas e até mesmo se necessário eu gravo vídeos explicativos para você em uma academia para te enviar.",
        },
    ];

    return (
        <motion.section
            ref={ref}
            id="faq"
            className="py-24 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-14"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Perguntas <span className="text-green-400">Frequentes</span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Tire todas suas dúvidas sobre o protocolo personalizado
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: isInView ? 0.4 : 0 }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="mb-4"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{
                                x: isInView ? 0 : -30,
                                opacity: isInView ? 1 : 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: isInView ? 0.6 + index * 0.1 : 0,
                            }}
                        >
                            <button
                                className={`w-full bg-gradient-to-br from-gray-700 to-black border rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                                    openFaq === index
                                        ? "border-green-500/40 shadow-lg shadow-green-500/20"
                                        : "border-green-500/20 hover:border-green-500/40"
                                }`}
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                                    <div
                                        className={`transition-transform duration-300 ease-in-out ${
                                            openFaq === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        <ChevronDown className="w-6 h-6 text-green-400 flex-shrink-0" />
                                    </div>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openFaq === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                                    }`}
                                >
                                    <div className="text-gray-300 leading-relaxed pb-1">{faq.answer}</div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
