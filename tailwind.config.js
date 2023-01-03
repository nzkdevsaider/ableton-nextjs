/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ableton-blue": "#0000ff",
        "ableton-yellow": "#fbffa7",
        "ableton-turquoise": "#00ffcc",
      },
    },
  },
  plugins: [],
};
