/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi:['var(--font-satoshi)'],
        satoshiregular:['var(--font-satoshiregular)'],
        editorial:['var(--font-editorial)'],
        editoriallight:[' var(--font-editoriallight)'],
        overused:['var(--font-overused)'],
        applefont1:['var(--font-applefont1)'],
        mainfont:['var(--font-mainfont)'],
        mediummainfont:['var(--font-mediummainfont)'],
        
      },
    },
  },
  plugins: [],
};
