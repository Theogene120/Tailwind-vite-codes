/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./test.html","./Lugx.html","./figma-page.html","./porto.html", "./scr**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class', // My additional class to enable dark mode
  theme: {
    extend: {
      boxShadow: {
        'all': '0 8px 10px rgba(0, 0, 0, 0.3)', // custom shadow on all sides
      },
      fontFamily: {
        lato:['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


