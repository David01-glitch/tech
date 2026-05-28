/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#3aaaf6',
          500: '#138fe7',
          600: '#0672c5',
          700: '#075ba0',
          800: '#0b4d84',
          900: '#10406d',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(15, 70, 130, 0.08)',
      },
    },
  },
  plugins: [],
};
