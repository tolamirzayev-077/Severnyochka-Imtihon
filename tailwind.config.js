/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'Sans-serif'],
      },
      colors: {
        'Yashil': '#70C05B',
        'qorag': '#414141'
      },
      borderRadius: {
        'nor': '4px',
      },
      width: {
        'besh': '375px'
      },
      backgroundImage: {
        'herobg': "url('/public/assets/herobg.png')"
      }
    },
  },
  plugins: [],
}