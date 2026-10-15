import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1931',
        gold: '#D4AF37',
        ivory: '#F5F1E8',
        slate: '#E5E7EB',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(10,25,49,0.12)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
};

export default config;
