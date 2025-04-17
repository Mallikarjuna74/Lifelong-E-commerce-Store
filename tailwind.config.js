/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'; // Import the plugin
import scrollbar from 'tailwind-scrollbar';         // Import the plugin

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarHide, // Use the imported variable
    scrollbar,     // Use the imported variable
  ],
}
