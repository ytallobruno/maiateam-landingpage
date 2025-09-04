"use client";
import { CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={ref}
      className="py-24 bg-gradient-to-r from-green-400 to-green-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: isInView ? 0.2 : 0 }}
        >
          Pronta para transformar sua vida?
        </motion.h2>
        <motion.p
          className="text-xl text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: isInView ? 0 : 30, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: isInView ? 0.4 : 0 }}
        >
          Não perca esta oportunidade única de ter acesso à metodologia que já
          transformou centenas de vidas.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0.9,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.8, delay: isInView ? 0.6 : 0 }}
        >
          <a
            href="https://pay.kiwify.com.br/Xcq6j4S"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-green-400 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.25)] text-lg border-none cursor-pointer hover:scale-105 no-underline"
          >
            COMEÇAR AGORA - R$ 149,90
          </a>
          <a
            href="https://wa.me/5521972179585?text=Oii%20Lucas%21%20Gostaria%20de%20um%20protocolo%20avulso%20e%20queria%20saber%20qual%20o%20valor%20dele%20no%20pix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/70 text-sm font-medium hover:text-black transition-colors duration-200 underline"
          >
            Ou pague via PIX com desconto
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-black/80"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isInView ? 0 : 20,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.6, delay: isInView ? 0.8 : 0 }}
        >
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: isInView ? 0 : -20,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: isInView ? 1.0 : 0 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span>Entrega garantida em 5 dias</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{
              x: isInView ? 0 : 20,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.4, delay: isInView ? 1.1 : 0 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span>Acesso vitalício</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
