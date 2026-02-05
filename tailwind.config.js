/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bhv-blue': '#002b47',
        'team-geel': '#e4e022',
        'team-oranje': '#f28b39',
        'team-rood': '#e73546',
        'team-groen': '#63b986',
      }
    },
  },
  plugins: [],
}
