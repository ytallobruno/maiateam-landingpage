import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// export const metadataBase = new URL("https://TODO.com");

export const metadata: Metadata = {
  title: "Lucas Maia | Consultoria Online",
  description:
    "Transforme seu corpo com treinos personalizados. Seu novo físico começa aqui.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/MaiaTeamLogo.png", type: "image/png" },
    ],
    apple: [{ url: "/MaiaTeamLogo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth"
      style={{ margin: 0, padding: 0 }}
    >
      <body
        className={`${inter.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#000000",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
