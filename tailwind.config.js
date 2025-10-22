/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        '.perspective-1000': {
          perspective: '1000px',
        },
      },
    },
  },
  plugins: [],
  
}
