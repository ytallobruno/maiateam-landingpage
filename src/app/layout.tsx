import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { siteMetadata, siteUrl } from "@/config/seo.config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteMetadata.defaultTitle,
        template: siteMetadata.titleTemplate,
    },
    description: siteMetadata.description,
    keywords: [...siteMetadata.keywords],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "/",
        siteName: siteMetadata.siteName,
        title: siteMetadata.defaultTitle,
        description: siteMetadata.description,
        images: [
            {
                url: siteMetadata.socialImage,
                width: 1200,
                height: 630,
                alt: "Lucas Maia - Personal Trainer Online para Mulheres",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.defaultTitle,
        description: siteMetadata.description,
        images: [siteMetadata.socialImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },
    authors: [{ name: "Lucas Maia" }],
    creator: "Lucas Maia",
    publisher: "Lucas Maia",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/MaiaTeamLogo.png", type: "image/png" },
        ],
        apple: [{ url: "/MaiaTeamLogo.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const personStructuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Lucas Maia",
        jobTitle: "Personal Trainer Online",
        description: "Educador físico e personal trainer especializado em treino personalizado para mulheres.",
        url: siteUrl,
        image: `${siteUrl}/LucasMaiaPerfil.webp`,
        sameAs: ["https://instagram.com/smaia.lucas"],
    };

    const professionalServiceStructuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Consultoria Online Lucas Maia",
        description: siteMetadata.description,
        url: siteUrl,
        image: `${siteUrl}/LucasMaiaPersonal.webp`,
        telephone: "+55-21-97217-9585",
        areaServed: "BR",
        serviceType: "Consultoria de treino personalizado online",
    };

    return (
        <html lang="pt-BR" className="scroll-smooth" style={{ margin: 0, padding: 0 }}>
            <body
                className={`${inter.variable} antialiased`}
                style={{
                    margin: 0,
                    padding: 0,
                    backgroundColor: "#000000",
                    minHeight: "100vh",
                }}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceStructuredData) }}
                />
                {children}
            </body>
        </html>
    );
}
