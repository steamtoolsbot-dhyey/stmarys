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
          50: '#f0f4f9',
          100: '#dde5f2',
          200: '#c0d0e7',
          300: '#94b3d7',
          400: '#6290c4',
          500: '#3e71b0',
          600: '#2f5994',
          700: '#264777',
          800: '#1e385e',
          900: '#142742',
          950: '#0c182a',
        },
        gold: {
          50: '#fdfbf5',
          100: '#fcf5e3',
          200: '#f7e7ba',
          300: '#f0d488',
          400: '#e7bd54',
          500: '#d48b16',
          600: '#b87309',
          700: '#945b07',
          800: '#7a4a08',
          900: '#613b09',
        },
        ivory: {
          50: '#fdfcf9',
          100: '#faf7f2', // Primary warm light canvas
          200: '#f4efe6',
          300: '#ebe3d5',
          400: '#dfd5c2',
          500: '#c8ba9f',
        },
        parchment: {
          50: '#fdfbf7',
          100: '#f7f4ee',
          200: '#f0eae0',
          300: '#e5dcce',
          400: '#d5c7b3',
        },
        sand: {
          50: '#fbf9f6',
          100: '#f5efe6',
          200: '#eae1d2',
          300: '#dacbb4',
          400: '#c7b396',
        },
        maroon: {
          500: '#9b1c31',
          600: '#841527',
          700: '#6e1120',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(15, 27, 44, 0.06), 0 2px 6px -1px rgba(15, 27, 44, 0.04)',
        'card': '0 10px 30px -5px rgba(15, 27, 44, 0.08), 0 4px 12px -2px rgba(15, 27, 44, 0.03)',
        'lift': '0 20px 35px -8px rgba(15, 27, 44, 0.12), 0 8px 16px -4px rgba(15, 27, 44, 0.04)',
        'glow': '0 0 25px rgba(217, 119, 6, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.95' },
        }
      }
    },
  },
  plugins: [],
}
