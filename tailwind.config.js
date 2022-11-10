/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#191E29',
          800: '#696E79'
        },
        blue: {
          900: '#132D46'
        },
        lime: {
          900: '#01C38D'
        },
      }
    },
  },
  plugins: [],
}
