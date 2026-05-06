import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00D4CC',
          light: '#33DEDA',
          pale: '#E6FAFA',
          border: 'rgba(0,212,204,0.25)',
          500: '#00D4CC',
          400: '#33DEDA',
          600: '#00B8B1', // Slightly darker for hover
        },
        pink: {
          DEFAULT: '#E91E8C',
          light: '#F054A8',
          pale: '#FDE8F4',
          100: '#FDE8F4',
        },
        black: '#111111',
        navy: '#1A1A2E',
        gray: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
          pale: '#F3F4F6',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
        },
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
