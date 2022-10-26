/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['DM Serif Text', 'serif']
    },
    fontSize: {
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem'
    },
    colors: {
      'dark': '#202020',
      'dark-gray': '#5D5B66',
      'light-gray': '#CAC7D0',
      'light': '#FEFEFE',
      'blue': '#00001A',
      'red': '#F15D51',
      'yellow': '#EEA94E'
    },
    extend: {},
  },
  plugins: [],
}
