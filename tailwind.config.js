/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "portrait": "url('../src/images/hi.jpg')",
        "brushed": "url('../src/images/brushed-alum.png')",
      },
    },
    
    
    
  },
  plugins: [],
}
