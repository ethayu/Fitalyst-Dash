import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'fitalyst-green': '#9FD5AC',
        'fitalyst-orange': '#EF9557',
        'fitalyst-light-blue': '#D9D9D9',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
} satisfies Config

