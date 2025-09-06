import { Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-900 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/MaiaTeamLogo.webp"
                alt="Maia Team Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <div className="text-white font-bold text-lg">Lucas Maia</div>
              <div className="text-gray-400 text-sm">
                Personal Trainer & Coach
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © {new Date().getFullYear()} Lucas Maia. <br />
              Todos os direitos reservados.
            </p>
            {/* <p className="text-sm text-gray-500">
              Educador Físico • CREF: XXX-X/RJ
            </p> */}
          </div>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/smaia.lucas"
              target="_blank"
              className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 no-underline"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://wa.me/5521972179585"
              target="_blank"
              className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 no-underline"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
