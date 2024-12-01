import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import scrollbar from 'tailwind-scrollbar';
// @ts-ignore
import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        lavishlyYours: ['Lavishly Yours', 'cursive'],
        federo: ['Federo', 'cursive']
      },
      screens: {
        'bp-1042': '1042px',
        'bp-828': '828px',
        'bp-938': '938px',
        'bp-1343': '1343px',
        'bp-1800': '1800px'
      }
    }
  },
  plugins: [
    typography,
    scrollbar,
    scrollbarHide
  ]
} satisfies Config;