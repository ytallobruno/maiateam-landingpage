"use client";

import { Camera, Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    const menuItems = [
        { href: "#method", text: "Método" },
        { href: "#results", text: "Resultados" },
        { href: "#pricing", text: "Planos" },
        { href: "#faq", text: "FAQ" },
    ];

    return (
        <motion.footer
            className="border-t border-green-500/20 bg-black py-10 md:py-14"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="rounded-3xl border border-white/10 bg-[radial-gradient(130%_90%_at_10%_0%,rgba(184,255,90,0.16),transparent_55%),rgba(8,8,8,0.95)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-6 md:p-8">
                    <div className="flex flex-col gap-6 sm:gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500/90 to-green-700 rounded-xl flex items-center justify-center overflow-hidden shadow-[0_12px_35px_rgba(34,197,94,0.35)]">
                                <Image
                                    src="/MaiaTeamLogo.webp"
                                    alt="Maia Team Logo"
                                    width={30}
                                    height={30}
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <div className="text-white font-bold text-lg">Lucas Maia</div>
                                <div className="text-white/60 text-sm">Personal Trainer & Coach</div>
                            </div>
                        </div>

                        <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:justify-start">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-white/75 text-sm font-medium transition-colors duration-200 hover:text-green-300"
                                >
                                    {item.text}
                                </a>
                            ))}
                        </nav>

                        <div className="flex gap-3 self-center lg:self-auto">
                            <a
                                href="https://instagram.com/smaia.lucas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-11 h-11 rounded-xl border border-white/15 bg-white/[0.03] flex items-center justify-center transition-all duration-200 hover:border-green-400/45 hover:bg-green-400/[0.08] hover:-translate-y-0.5 no-underline"
                                aria-label="Instagram"
                            >
                                <Camera className="w-5 h-5 text-purple-500" />
                                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md border border-white/15 bg-black/90 px-2 py-1 text-[11px] font-medium lowercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    instagram
                                </span>
                            </a>
                            <a
                                href="https://wa.me/5521972179585"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-11 h-11 rounded-xl border border-green-400/30 bg-green-400/[0.12] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-400/[0.2] no-underline"
                                aria-label="WhatsApp"
                            >
                                <Phone className="w-5 h-5 text-green-200" />
                                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md border border-green-300/30 bg-black/90 px-2 py-1 text-[11px] font-medium lowercase text-green-200 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    whatsapp
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-5 border-t border-white/10 pt-4 text-center lg:text-left md:mt-6 md:pt-5">
                        <p className="text-white/55 text-sm">
                            © {new Date().getFullYear()} Lucas Maia. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
