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
        sans: ["'Inter'", "sans-serif"],
        heading: ["'Sora'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        aurora: {
          violet: "#7C5CFF",
          cyan: "#22D3EE",
          lime: "#B6F24A",
        },
        dark: {
          bg: "#0A0B10",
          surface: "#12141C",
          card: "#161923",
          border: "rgba(255, 255, 255, 0.08)",
          text: "#F4F5F9",
          muted: "#9AA0B4",
        },
        light: {
          bg: "#FAFAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "rgba(0, 0, 0, 0.08)",
          text: "#0E1020",
          muted: "#5B6178",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
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
        bento: "20px",
        pill: "999px",
        lg: "20px",
        md: "14px",
        sm: "8px",
      },
      keyframes: {
        "aurora-drift-1": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(60px, -40px) scale(1.15)" },
        },
        "aurora-drift-2": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(-50px, 35px) scale(0.9)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "aurora-1": "aurora-drift-1 26s infinite ease-in-out alternate",
        "aurora-2": "aurora-drift-2 32s infinite ease-in-out alternate",
        "marquee": "marquee 35s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
