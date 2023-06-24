module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['IBM Plex Sans', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
        'pt-serif': ['PT Serif', 'sans-serif']
      }
    },
  },
  plugins: [],
}