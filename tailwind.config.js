/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: 'rgba(114, 213, 0, 1)',
        },
    },
  },
  plugins: [],
};
