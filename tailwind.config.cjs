/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thPrimary: "#000",
        thSecondary: "#b4a7d6",
      },
    },
  },
  plugins: [],
};
