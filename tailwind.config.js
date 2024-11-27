/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tek: ["Teko", "sans-serif"],
      },
      borderRadius: {
        "5xl": "2.5rem", 
      }
    },
  },
  plugins: [],
};
