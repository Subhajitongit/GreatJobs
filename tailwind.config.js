/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#1597E4",
      error: "#D86161",
      placeholder: "#7A7A7A",
      dark: "#212121",
      white: "#FAFAFA",
      card: "#FFFFFF",
      cardBorder: "#E6E6E6",
    },
  },
  plugins: [],
};
