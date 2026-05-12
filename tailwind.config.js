/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Midnight Teal Edition - Global Design System
        // Backgrounds
        "bg-primary": "#080E1A",
        "bg-surface": "#0E1E2C",
        "bg-elevated": "#132536",

        // Accents
        "accent-turquoise": "#00D4C8",
        "accent-gold": "#F5C842",
        "accent-glow": "rgba(0,212,200,0.15)",

        // Text
        "text-primary": "#E8F0F5",
        "text-body": "#B8C8D4",
        "text-muted": "#6A8599",
        "text-accent": "#00D4C8",

        // Legacy/compatibility
        primary: "#00D4C8",
        secondary: "#F5C842",
        accent: "#00D4C8",
        dark: "#080E1A",
        light: "#E8F0F5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Clash Display", "Cabinet Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        fadeUp: "fadeUp 0.6s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #080E1A 0%, #0D2035 50%, #080E1A 100%)",
        "gradient-cta": "linear-gradient(90deg, #00D4C8, #F5C842)",
        "gradient-card": "linear-gradient(145deg, #0E1E2C, #132536)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
