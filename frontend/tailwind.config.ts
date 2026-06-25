import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F4EE",
        ink: "#1F1F1F",
        graytext: "#555555",
        accentred: "#C63D2F",
        accentyellow: "#F2B533",
        accentgreen: "#3B7A57",
        accentpink: "#E88DB2",
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(31,31,31,0.04), 0 12px 32px -12px rgba(31,31,31,0.18)",
        cardhover: "0 2px 4px rgba(31,31,31,0.06), 0 28px 50px -16px rgba(31,31,31,0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stamp-in": {
          "0%": { opacity: "0", transform: "scale(1.4) rotate(-18deg)" },
          "60%": { opacity: "1", transform: "scale(0.95) rotate(-10deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "stamp-in": "stamp-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
