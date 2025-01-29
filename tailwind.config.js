/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Adiciona a configuração para o modo escuro baseado na classe "dark"
  theme: {
    extend: {
      colors: {
        blackNotPure: "#333333",
        whiteNotPure: "#F0F0F0",
      },
    },
  },
  plugins: [],
};