import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0c",
        void: "#050505",
        surface: "#111116",
        "surface-variant": "#262528",
        "surface-container-highest": "#262528",
        "surface-container-high": "#1f1f22",
        "surface-container-low": "#131315",
        "surface-container-lowest": "#000000",

        "neon-cyan": "#00f3ff",
        "neon-pink": "#ff003c",
        "neon-purple": "#bd00ff",

        primary: "#00f3ff",
        "primary-container": "#00f1fd",
        "on-primary": "#004145",
        secondary: "#ff003c",
        tertiary: "#bd00ff",

        "text-primary": "#ffffff",
        "text-muted": "#8a8a93",
        "text-cyber": "#00f3ff",

        "on-surface": "#f9f5f8",
        "on-surface-variant": "#adaaad",
        "outline-variant": "#48474a",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        label: ["var(--font-inter)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        'glitch': 'glitch 2s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;