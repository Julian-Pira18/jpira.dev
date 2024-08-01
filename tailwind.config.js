/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#071013',
        secundary: '#0A171C',
        tertiary: '#CAE5FF',
      },
    },

  },
  plugins: [],
};