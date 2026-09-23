/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#DC143C',
          dark: '#8B0000',
          light: '#FF4444'
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#111111',
          card: '#161616',
          border: '#1E1E1E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        display: ['Oswald', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'aura-pulse': 'auraPulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        auraPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.08)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    }
  },
  plugins: []
}