"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        { href: "#method", text: "Método" },
        { href: "#about", text: "Sobre" },
        { href: "#results", text: "Resultados" },
        { href: "#preview", text: "Planilha" },
        { href: "#pricing", text: "Planos" },
        { href: "#faq", text: "FAQ" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.style.overflowY = mobileMenuOpen ? "hidden" : "";

        return () => {
            html.style.overflowY = "";
        };
    }, [mobileMenuOpen]);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-300 ${
                scrolled
                    ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.82),rgba(0,0,0,0.45))] backdrop-blur-xl border-b border-green-400/20 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                    : "bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0))]"
            }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20">
                {/* Logo */}
                <a
                    href="#hero"
                    className="flex cursor-pointer items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:gap-3"
                    aria-label="Voltar ao topo"
                >
                    <Image
                        src="/MaiaTeamLogo.webp"
                        alt="MaiaTeam - Consultoria de personal trainer online focado em mulheres"
                        width={120}
                        height={40}
                        loading="eager"
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="h-8 w-auto md:h-10"
                    />
                </a>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-4 lg:gap-8 text-white/90">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-medium transition-all duration-200 hover:text-green-300 text-sm lg:text-base hover:-translate-y-0.5"
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>

                {/* CTA Button Desktop */}
                <a
                    href="#final"
                    className="hidden md:block bg-gradient-to-br from-green-400 to-green-600 text-black font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-[0_20px_45px_rgba(34,197,94,0.25)] border border-green-300/40 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 text-sm lg:text-base"
                >
                    Começar Agora
                </a>

                {/* Menu Mobile Button */}
                <button
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-black/35 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:text-green-300 md:hidden md:h-11 md:w-11 md:rounded-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.button
                            aria-label="Fechar menu mobile"
                            className="fixed inset-0 top-16 bg-black/70 backdrop-blur-[2px] md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative z-10 px-4 pb-4 pt-1 md:hidden"
                        >
                            <div className="rounded-3xl border border-white/10 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(184,255,90,0.16),transparent_55%),rgba(8,8,8,0.92)] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                                <nav className="space-y-1.5">
                                    {menuItems.map((item, index) => (
                                        <motion.a
                                            key={item.href}
                                            href={item.href}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                delay: index * 0.06,
                                                duration: 0.3,
                                                ease: "easeOut",
                                            }}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center justify-between rounded-2xl px-4 py-3 text-white/90 bg-white/[0.03] border border-transparent hover:border-green-400/35 hover:bg-green-400/[0.08] transition-all duration-200"
                                        >
                                            <span className="font-semibold tracking-wide">{item.text}</span>
                                            <ChevronRight className="h-4 w-4 text-green-300/80" />
                                        </motion.a>
                                    ))}
                                </nav>

                                <motion.a
                                    href="#final"
                                    onClick={() => setMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.25 }}
                                    className="mt-3 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 px-5 py-3 font-bold text-black shadow-[0_20px_45px_rgba(34,197,94,0.35)]"
                                >
                                    Começar Agora
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
