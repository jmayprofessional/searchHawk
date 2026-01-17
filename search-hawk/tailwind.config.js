/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0f0f0f',
        card: '#1f1f1f',
      },
    },
  },
  plugins: [],
};
