/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3460', // Deep blue for trust
          dark: '#0A1930',
          light: '#2A4D80',
        },
        secondary: {
          DEFAULT: '#1A1A2E', // Dark blue-gray for technology
          light: '#2C2C45',
        },
        accent: {
          DEFAULT: '#FF6E31', // Vibrant orange for highlights
          light: '#FF8F5E',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
};