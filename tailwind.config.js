module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F5C32C',
          secondary: '#FcA61F',
          accent: 'rgba(252, 166, 21, 0.75)',
          neutral: '#DDF8FE',
          'base-100': '#ffffff'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
