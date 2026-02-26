/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // New color palette: Soft Blush & Charcoal
        background: "#FDF6F0",
        "text-primary": "#2D2D2D",
        "text-secondary": "#5A5A5A",
        "accent-coral": "#FF8A7A",
        "accent-blue": "#A8D5E5",
        // Legacy support
        primary: "#FF8A7A",
        secondary: "#A8D5E5",
        accent: "#FF8A7A",
        dark: "#2D2D2D",
        light: "#FDF6F0",
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
        "gradient-coral-cream": "linear-gradient(135deg, #FFD9D0, #FFF0E5)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
