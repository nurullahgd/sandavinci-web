/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32', // medium green
          light: '#4CAF50',   // lighter green
          dark: '#0A3A10',    // darker green (updated to even darker)
        },
        secondary: {
          DEFAULT: '#FFFFFF', // white
          light: '#F5F5F5',   // off-white/light gray
          dark: '#E0E0E0',    // light gray
        },
        accent: {
          DEFAULT: '#757575', // medium gray
          light: '#BDBDBD',   // light gray
          dark: '#424242',    // dark gray
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'serif'],
        'body': ['Raleway', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        }
      },
    },
  },
  plugins: [],
} 