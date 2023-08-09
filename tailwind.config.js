module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .4s linear infinite alternate',
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { width: '0px ' },
          // '5%, 10%': { width: '1.27' },
          // '15%, 20%': { width: '2.54' },
          // '25%, 30%': { width: '3.81' },
          // '35%, 40%': { width: '5.08' },
          // '45%, 50%': { width: '6.35' },
          // '55%, 60%': { width: '7.62' },
          // '65%, 70%': { width: '8.89' },
          // '75%, 80%': { width: '10.16' },
          // '85%, 90%': { width: '11.43' },
          '95%': { width: '11.5ch' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
