import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        midnight: "#0B0F19",
        cyan: {
          electric: "#00F2FE",
          DEFAULT: "#00F2FE",
        },
        purple: {
          soft: "#4FACFE",
          DEFAULT: "#4FACFE",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "#00F2FE",
          foreground: "#0B0F19",
        },
        secondary: {
          DEFAULT: "#4FACFE",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00F2FE",
          foreground: "#0B0F19",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
