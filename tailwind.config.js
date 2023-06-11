/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        'pc-content-height': 'calc(var(--vh,1vh)*100 - 160px)',
        'sp-content-height': 'calc(var(--vh,1vh)*100 - 116px)',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
}
