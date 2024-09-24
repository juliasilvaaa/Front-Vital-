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
        principalazul: '#0174DE',
        destaque: '#4B9AE7'
      },
      fontFamily: {
        poppins: 'var(--font-poppins)'
      },
      fontWeight: {
        'medium': 500,
        'semi-bold': 600,
        'bold': 700
      },
      spacing: {
        // Padronizando o tamanho dos icones
        iconeWidth: '24px',
        iconeHeight: '24px',
        perfilH: '110px',
        perfilW: '110px'
    },
    },
  },
  plugins: [],
};
