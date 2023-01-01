/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "portrait": "url('../src/images/hi.jpg')",
        "amdThumb": "url('../src/images/thumbs/amd_thumb.png')",
        "artThumb": "url('../src/images/thumbs/art_thumb.png')",
        "bfpThumb": "url('../src/images/thumbs/bfp_thumb.png')",
        "cgThumb": "url('../src/images/thumbs/cg_thumb.png')",
        "ecThumb": "url('../src/images/thumbs/ec_thumb.png')"
      },
    }
    
  },
  plugins: [],
}