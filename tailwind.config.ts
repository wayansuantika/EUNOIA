import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0E11",
        panel: "#1A1A1F",
        foreground: "#F5F5F7",
        muted: "#A1A1AA"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "mesh-glow": "radial-gradient(circle at top, rgba(255,255,255,0.16), transparent 42%), radial-gradient(circle at bottom left, rgba(255,255,255,0.12), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;