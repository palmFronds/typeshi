/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kyc: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          surface2: '#2a2a2a',
          border: '#333333',
          text: '#e5e5e5',
          muted: '#a3a3a3',
          primary: '#4a90e2',
          primaryHover: '#5a9ee8',
          focusRing: 'rgba(74, 144, 226, 0.4)',
        },
        onboard: {
          border: '#7C3AED',
          cardBg: 'rgba(255, 235, 205, 0.85)',
          cardBgHover: 'rgba(255, 235, 205, 0.95)',
          cardBgSelected: 'rgba(255, 235, 205, 1)',
          textPrimary: '#D97706',
          textSecondary: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['14px', '20px'],
        'base': ['16px', '24px'],
        'lg': ['18px', '28px'],
        'xl': ['24px', '32px'],
      },
      borderRadius: {
        'kyc': '8px',
      },
      boxShadow: {
        'kyc': '0 2px 8px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
