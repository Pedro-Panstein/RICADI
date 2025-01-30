/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Adiciona a configuração para o modo escuro baseado na classe "dark"
  theme: {
    extend: {
      colors: {
        blueRICADI: "#0B2E43",
        whiteRICADI: "#D9D9D9",
        secondBlueRICADI: "#02465D",
        secondWhiteRICADI: "#FFFFFF",
        textBlue: "#026688",
      },
      fontFamily: {
        "maven-pro": ["Maven Pro", "serif"],
        asap: ["Asap", "serif"],
      },
    },
  },
  plugins: [],
};
