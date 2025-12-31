/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'], // Beast mode font
      },
      colors: {
        brand: {
          dark: '#1c1b1f', // Updated background color
          primary: '#23bb84', // Green
          accent: '#3a9cd2', // Blue
          info: '#3a9cd2', // Info Blue
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
