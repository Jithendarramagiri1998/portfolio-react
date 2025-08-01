/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Add this line for dark mode support
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
