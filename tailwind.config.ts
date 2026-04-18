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
        background: "#131315",
        surface: "#111116",
        "surface-dim": "#131315",
        "surface-variant": "#353437",
        "surface-container-highest": "#353437",
        "surface-container-high": "#2a2a2c",
        "surface-container": "#201f21",
        "surface-container-low": "#1c1b1d",
        "surface-container-lowest": "#0e0e10",

        "neon-cyan": "#00f3ff",
        "neon-pink": "#ff003c",
        "neon-purple": "#bd00ff",

        primary: "#e3fdff",
        "primary-container": "#00f3ff",
        "on-primary": "#00373a",
        secondary: "#ecb2ff",
        tertiary: "#fff6f6",

        "text-primary": "#e5e1e4",
        "text-muted": "#b9cacb",
        "text-cyber": "#00f3ff",

        "on-surface": "#e5e1e4",
        "on-surface-variant": "#b9cacb",
        "outline-variant": "#3a494b",
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
