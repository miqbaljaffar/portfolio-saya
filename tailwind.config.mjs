/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spacex: {
          black: "#000000",
          void: "#0A0A0A",
          dark: "#111111",
          steel: "#1A1A1A",
          graphite: "#2A2A2A",
          border: "#333333",
          muted: "#666666",
          subtle: "#999999",
          silver: "#CCCCCC",
          white: "#FFFFFF",
          flame: "#E63946",
          sky: "#005288",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        "spacex-xs": "0.05em",
        "spacex-sm": "0.1em",
        "spacex-md": "0.18em",
        "spacex-lg": "0.25em",
      },
      transitionTimingFunction: {
        "spacex": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
