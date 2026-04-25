import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985'
        },
        success: {
          500: '#10b981'
        }
      }
    }
  },
  plugins: []
};

export default config;
