/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainbg': '#495046',
        'altbg': '#2E3342',
      }
    },
  },
  plugins: [],
}
