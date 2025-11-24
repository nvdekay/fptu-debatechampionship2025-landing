/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void-black': '#050505',
        'magma-red': '#7F1D1D', 
        'arena-gold': '#D9AF2C',
        'steel-blue': '#132750',
        'mithril': '#E5E7EB',
        'smoke': '#9CA3AF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
}
