/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
    "./src/**/.css",
  ],
  theme: 
  {
    screens: {
      'sm': '640px',
      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      
    },
    extend: {
      primary: '#FF6363', // Custom primary color
      secondary: {
        100: '#E2E2D5',  // Custom secondary color with shades
        200: '#888888',
      },
      fontSize: {
        'xs': '.75rem', // Extra Small
        'sm': '.875rem', // Small
        'base': '1rem',  // Base
        'lg': '1.125rem', // Large
        'xl': '1.35rem',  // Extra Large
        '2xl': '2rem',  // Double Extra Large
      },
      fontWeight: {
        'semibold': '600', // Defines font-weight for "font-semibold"
      },
      spacing: {
        '12': '3rem', // Corresponds to mt-12 (12 units in the default line height scale)
      },
      borderWidth: {
        'custom': '4px', // Define a custom border width
      },
      borderColor: {
        'custom': '#FF0000', // Define a custom border color
      },
      colors: {
        'grey': {
          '700': '#777', // Your desired color code
          '200':'#e5e7eb'
        },
        customColor: '#FFAABB', 
          red: {
            100: '#FF6363', 
            200: '#888888', 
          }, 
      }
     

    },
  },
  plugins: [
  
  ],
}

