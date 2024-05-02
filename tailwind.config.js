/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#1A1B1E",
        bgRed: "#FF0000",
        bgGreen: "#00FF00",
        bgBlue:"#0000FF"
      },
    },
  },
  plugins: [],
}

