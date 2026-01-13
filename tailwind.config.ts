import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0D10',
        foreground: '#E6EEF3',
        primary: '#0F1724',
        secondary: '#1F2937',
        accent: '#FF5A7A',
        surface: '#111318',
        muted: '#9AA6B2',
        borderColor: '#262A31'
      },
      borderRadius: {
        md: '12px',
        lg: '20px'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        layered: '0 20px 40px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
};

export default config;