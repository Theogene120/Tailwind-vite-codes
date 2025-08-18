/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./test.html", "./figma-page.html", "./scr**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class', // My additional class to enable dark mode
  theme: {
    extend: {
      boxShadow: {
        'all': '0 0 14px rgba(0, 0, 0, 0.5)', // custom shadow on all sides
      },
    },
  },
  plugins: [],
}


