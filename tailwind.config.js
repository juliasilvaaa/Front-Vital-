/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        principalazul: '#0174DE'
      },
      fontFamily: {
        poppins: 'var(--font-poppins)'
      },
      fontWeight: {
        'medium': 500,
        'semi-bold': 600,
        'bold': 700
      }
    },
  },
  plugins: [],
};
