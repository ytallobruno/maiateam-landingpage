"use client";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import ResultsSection from "@/components/ResultsSection";
import MethodSection from "@/components/MethodSection";
import FAQSection from "@/components/FAQSection";
import PricingSection from "@/components/PricingSection";
import WorkoutPreviewSection from "@/components/WorkoutPreviewSection";
import CountdownTimer from "@/components/CountdownTimer";
import CountdownSticky from "@/components/CountdownSticky";
import { usePromotion } from "@/hooks/usePromotion";
import Link from "next/link";
import { homeFaqs, homeOfferCatalog, siteMetadata, siteUrl } from "@/config/seo.config";

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const offerCatalogStructuredData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Planos de consultoria online",
    itemListElement: homeOfferCatalog.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.description,
        },
        price: offer.price,
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
    })),
};

const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.siteName,
    url: siteUrl,
    inLanguage: "pt-BR",
};

export default function Home() {
    const { isBlackFriday, isPriceCountdown, blackFridayEndDate } = usePromotion();
    const showBlackFridayPromo = isBlackFriday;
    const showPriceCountdownPromo = !showBlackFridayPromo && isPriceCountdown;
    const hasMobilePromoBar = showBlackFridayPromo || showPriceCountdownPromo;

    return (
        <div
            className={`min-h-screen bg-black text-white font-sans m-0 p-0 ${hasMobilePromoBar ? "pb-32 md:pb-0" : ""}`}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogStructuredData) }}
            />
            {showPriceCountdownPromo && <CountdownTimer />}
            {showBlackFridayPromo && <CountdownSticky targetDate={blackFridayEndDate} />}
            <Header />
            <HeroSection />
            <MethodSection />
            <AboutSection />
            <ResultsSection />
            <WorkoutPreviewSection />
            <PricingSection />
            <FAQSection />
            <FinalCtaSection />
            <Footer />
        </div>
    );
}
