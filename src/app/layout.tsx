import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lucas Maia | Consultoria Online",
  description:
    "Transforme seu corpo com treinos personalizados. Seu novo físico começa aqui.",
  openGraph: {
    type: "website",
    url: "https://seudominio.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consultoria Online",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" style={{ margin: 0, padding: 0 }}>
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
