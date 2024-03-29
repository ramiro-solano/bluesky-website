/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f9fe',
          '100': '#e2f1fc',
          '200': '#bee3f9',
          '300': '#85ccf4',
          '400': '#45b2eb',
          '500': '#1d9add',
          '600': '#0f79ba',
          '700': '#0e6196',
          '800': '#0f527d',
          '900': '#134567',
          '950': '#0c2c45',
        }
      },
      backgroundImage: {
        'cell-phone-service': "url('assets/main/img1.jpg')",
        'cell-phone-software': "url('assets/main/img2.jpg')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

