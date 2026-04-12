import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-plugin-prettier";

const eslintConfig = [
    ...nextCoreWebVitals,
    ...nextTypescript,
    {
        plugins: {
            prettier: prettier,
        },
        rules: {
            "prettier/prettier": "error",
        },
    },
    {
        ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts", "tailwind.config.js"],
    },
];

export default eslintConfig;
