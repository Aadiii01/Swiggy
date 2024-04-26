/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'new':['bgap'],
      'newb':['bgapb'],
      'newl':['bgapl'],
      'newm':['bgapm'],
      'newr':['bgapr'],

      'head':['ProximaNovaCond_Black'],
      'helvicnew':['Helvic'],
      'proximanew':['proxima'],
      'proxicdn':['proxima1'],
      'proxiaecn':['proxima2'],
      'arielfont':['ariel'],
    },
    letterSpacing:{
      new:'0.4px',
      news: '0.2px',
      wow: '8px',
      minus: '-0.3px',
      minuss: '-0.6px'
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
