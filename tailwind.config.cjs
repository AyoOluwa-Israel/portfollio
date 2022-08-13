/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '90%',
        '16': '4rem',
      },
      backgroundImage: {
        Hero: "url('/src/assets/herobg.svg')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1025px",
      },
      fontFamily: {
        primary: ['"Space Grotesk"', "sans-serif"],
        secondary: ['"Readex Pro"', "sans-serif"],
      },
      colors: {
        black: "#1E1E22",
        yellow: "rgba(215, 170, 38, 0.86)",
        white: "rgba(255, 255, 255, 0.8)",
        grey: "rgba(3, 5, 40, 0.4)",
        modalGrey: "rgba(3, 5, 40, 0.79)",
        sideBorder: "rgba(7, 11, 73, 0.05)",
        "grey-rgba": "rgba(7, 11, 73, 0.1)",
      },
      fontSize: {
        hero: "46px",
        heading: "36px",
        subheading: "18px",
      },
    },
  },
  plugins: [],
};
