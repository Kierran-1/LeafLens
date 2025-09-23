/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./app/**/*.{js,jsx,ts,tsx}",      // This should catch app/tabs/index.tsx
    "./components/**/*.{js,jsx,ts,tsx}",
    // Add these for good measure:
    "./app/tabs/**/*.{js,jsx,ts,tsx}", // Specifically target tabs folder
    "./(tabs)/**/*.{js,jsx,ts,tsx}",   // If using Expo Router format
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}