import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}",
        "./src/**/*.{ts,tsx,js,jsx}",
        "./app/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-green": "#b8ff5a",
                "brand-black": "#0d0d0d",
                "brand-white": "#ffffff",
                "brand-gray": "#8a8a8a",
                green: {
                    400: "#4ade80",
                    500: "#22c55e",
                    600: "#16a34a",
                },
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            animation: {
                bounce: "bounce 1s infinite",
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            backdropBlur: {
                sm: "4px",
                lg: "16px",
            },
        },
    },
    plugins: [],
};

export default config;
