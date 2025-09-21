/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand-purple': '#5030E5',
        'brand-orange': '#FFA500', // Example, adjust from Figma
        'brand-green': '#8BC48A', // Example, adjust from Figma
        
        // UI Colors
        'neutral-bg': '#F5F5F5',
        'neutral-white': '#FFFFFF',
        'neutral-border': '#DBDBDB',
        
        // Text Colors
        'text-dark': '#0D062D',
        'text-gray-light': '#787486',
        
        // Priority Tag Colors
        'priority-low-bg': 'rgba(223, 168, 116, 0.2)',
        'priority-low-text': '#D58D49',
        'priority-high-bg': 'rgba(216, 87, 87, 0.1)',
        'priority-high-text': '#D8727D',
        'priority-completed-bg': 'rgba(131, 194, 157, 0.2)',
        'priority-completed-text': '#68B266',
      },
    },
  },
  plugins: [],
}