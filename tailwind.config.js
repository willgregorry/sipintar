module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
        fredoka: ["var(--font-fredoka)", "cursive"],
      },
    },
  },
  plugins: [],
};