// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#0F3460', // Deep blue for trust
//           dark: '#0A1930',
//           light: '#2A4D80',
//         },
//         secondary: {
//           DEFAULT: '#1A1A2E', // Dark blue-gray for technology
//           light: '#2C2C45',
//         },
//         accent: {
//           DEFAULT: '#FF6E31', // Vibrant orange for highlights
//           light: '#FF8F5E',
//         },
//       },
//       fontFamily: {
//         sans: ['Montserrat', 'sans-serif'],
//         body: ['Poppins', 'sans-serif'],
//       },
//       animation: {
//         'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
//         'fade-in': 'fadeIn 0.5s ease-out forwards',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//     },
//     container: {
//       center: true,
//       padding: {
//         DEFAULT: '1rem',
//         sm: '2rem',
//         lg: '4rem',
//         xl: '5rem',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c52c16',     // Vermelho vibrante
          dark: '#a32212',        // Tom mais escuro
          light: '#d94d38',       // Tom mais claro
        },
        secondary: {
          DEFAULT: '#001d2c',     // Azul escuro
          light: '#12384d',       // Tom mais claro de azul
        },
        accent: {
          DEFAULT: '#f0eade',     // Bege claro
          light: '#f9f6ef',       // Bege ainda mais claro 
        },
        black: '#000000',
        white: '#ffffff',
        gray: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#cccccc',
          400: '#999999',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0d0d0d',
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
