/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vérifiez que tous vos fichiers React sont inclus
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: {
          50: "#000000",
          100: "#1C1C1E",
          200: "#2C2C2E",
          300: "#39393D"
        }
      }
    },
  },
  plugins: [],
}