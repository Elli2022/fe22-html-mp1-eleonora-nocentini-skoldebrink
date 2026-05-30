/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './inspirational.html', './contact.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f3ede4',
          200: '#e6d9c8',
        },
        olive: {
          700: '#3d4f3f',
          800: '#2f3d31',
          900: '#222b23',
        },
        terracotta: {
          500: '#c4715a',
          600: '#a85a45',
        },
      },
    },
  },
  plugins: [],
}
