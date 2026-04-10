"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menuItems = [
        // { href: "#hero", text: "Início" },
        { href: "#method", text: "Método" },
        { href: "#about", text: "Sobre" },
        { href: "#results", text: "Resultados" },
        { href: "#preview", text: "Planilha" },
        { href: "#pricing", text: "Planos" },
        { href: "#faq", text: "FAQ" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-300 ${
                scrolled ? "bg-black/40 backdrop-blur-lg border-b border-green-400/20" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <a
                    href="#hero"
                    className="flex items-center gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
                    aria-label="Voltar ao topo"
                >
                    <Image
                        src="/MaiaTeamLogo.webp"
                        alt="MaiaTeam Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </a>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-4 lg:gap-8 text-white/90">
                    {menuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-medium transition-colors duration-200 hover:text-green-400 text-sm lg:text-base"
                        >
                            {item.text}
                        </a>
                    ))}
                </nav>

                {/* CTA Button Desktop */}
                <a
                    href="#final"
                    className="hidden md:block bg-gradient-to-br from-green-400 to-green-600 text-black font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg shadow-green-400/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-400/40 text-sm lg:text-base"
                >
                    Começar Agora
                </a>

                {/* Menu Mobile Button */}
                <button
                    className="md:hidden grid place-items-center h-11 w-11 rounded-2xl border border-white/15 bg-black/35 text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:text-green-300"
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
                            className="md:hidden fixed inset-0 top-20 bg-black/70 backdrop-blur-[2px]"
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
                            className="md:hidden relative z-10 px-4 pb-4"
                        >
                            <div className="rounded-3xl border border-white/10 bg-[radial-gradient(120%_90%_at_0%_0%,rgba(184,255,90,0.16),transparent_55%),rgba(8,8,8,0.92)] shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl p-3">
                                <nav className="space-y-2">
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
                                    href="#purchase"
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
