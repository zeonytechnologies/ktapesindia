/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1e293b', // Tailwind slate-800
          900: '#0f172a', // Tailwind slate-900 (Deep Navy / Charcoal)
        },
        orange: {
          500: '#f97316', // Tailwind orange-500
          600: '#ea580c', // Tailwind orange-600
          700: '#c2410c', // Tailwind orange-700
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
