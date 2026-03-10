/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            light: '#e8f5e9',
            DEFAULT: '#27ae60', 
            dark: '#1e8449',
          }
        }
      },
    },
    plugins: [],
  }