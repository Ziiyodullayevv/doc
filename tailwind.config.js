/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF7D61',
        'primary-green': '#9CE390',
        'primary-dark': '#2B2B2B',
        'primary-purple': '#9473DA',
        'primary-blue': '#75B8EE',
      },
      fontFamily: {
        'jakarta-light': ['PlusJakartaSans_300Light'],
        'jakarta-regular': ['PlusJakartaSans_400Regular'],
        'jakarta-medium': ['PlusJakartaSans_500Medium'],
        'jakarta-semibold': ['PlusJakartaSans_600SemiBold'],
        'jakarta-bold': ['PlusJakartaSans_700Bold'],
        'jakarta-extrabold': ['PlusJakartaSans_800ExtraBold'],
        'jakarta-black': ['PlusJakartaSans_900Black'],
      },
    },
  },
  plugins: [],
};
