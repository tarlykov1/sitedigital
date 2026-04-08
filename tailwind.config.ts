import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#060B17",
        foreground: "#E8EDF8",
        card: "#0B1222",
        accent: "#2B7FFF",
        cyan: "#4DE7F5",
        graphite: "#111826"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(43,127,255,0.25), 0 8px 32px rgba(24,80,196,0.2)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(77, 231, 245, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 231, 245, 0.06) 1px, transparent 1px)",
        "noise": "radial-gradient(circle at 20% 20%, rgba(43,127,255,0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(77,231,245,0.12), transparent 35%), radial-gradient(circle at 50% 80%, rgba(70,90,255,0.12), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
