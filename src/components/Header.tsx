"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: "#hero", text: "Início" },
    { href: "#method", text: "Método" },
    { href: "#about", text: "Sobre" },
    { href: "#results", text: "Resultados" },
    { href: "#preview", text: "Planilha" },
    { href: "#purchase", text: "Planos" },
    { href: "#faq", text: "FAQ" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;

      if (mobileMenuOpen && !target.closest("header")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-lg border-b border-green-400/20"
          : "bg-transparent"
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
        <nav className="hidden md:flex gap-8 text-white/90">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium transition-colors duration-200 hover:text-green-400"
            >
              {item.text}
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <a
          href="#purchase"
          className="hidden md:block bg-gradient-to-br from-green-400 to-green-600 text-black font-bold px-6 py-3 rounded-full shadow-lg shadow-green-400/25 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-green-400/40"
        >
          Começar Agora
        </a>

        {/* Menu Mobile Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden backdrop-blur-lg border-t border-green-400/20 overflow-hidden ${
              scrolled ? "" : "bg-black/40"
            }`}
          >
            <nav className="px-6 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="block text-white/90 font-medium py-2 transition-colors duration-200 hover:text-green-400 text-right"
                >
                  {item.text}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
