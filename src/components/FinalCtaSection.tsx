"use client";
import { CheckCircle } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-400 to-green-600">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Pronta para transformar sua vida?
        </h2>
        <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Não perca esta oportunidade única de ter acesso à metodologia que já
          transformou centenas de vidas.
        </p>

        <div className="flex flex-col items-center gap-2">
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
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-black/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Entrega garantida em 5 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Acesso vitalício</span>
          </div>
        </div>
      </div>
    </section>
  );
}
