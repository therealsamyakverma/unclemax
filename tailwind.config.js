/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wwe-red': '#FF0000',
        'wwe-blue': '#0066CC',
        'wwe-black': '#000000',
        'wwe-gray': '#333333',
      },
      fontFamily: {
        'wwe': ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
