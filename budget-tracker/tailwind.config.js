/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#12151F",
        cardDark: "#181C29",
        accentGreen: "#00C853",
        accentYellow: "#FFD54F",
        accentBlue: "#42A5F5",
        accentRed: "#EF5350",
      },
    },
  },
  plugins: [],
}
