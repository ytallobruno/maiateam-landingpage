import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#b8ff5a',
        'brand-black': '#0d0d0d',
        'brand-white': '#ffffff',
        'brand-gray': '#8a8a8a',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans as string[]],
      },
    },
  },
  plugins: [],
}

export default config
