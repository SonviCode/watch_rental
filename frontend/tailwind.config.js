/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   xs: "500px",
    // },
    extend: {
      colors: {
        black: "#010001",
        blacklight: "#191819",
        purple: "#492394",
        purplelight: "#9C62EF",
        greenfluo: "#0BFBA3",
        gray: "#555F6B",
        graylight: "#A9A9A9",
      },
      backgroundImage: {
        banner: "url('./src/assets/banner-watchs.jpg')",
        account: "url('./src/assets/account.jpg')",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
