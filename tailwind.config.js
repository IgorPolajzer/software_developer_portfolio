/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textBase: "var(--color-text-base)",
        bgPrimary: "var(--color-bg-primary)",
      }
    },
  },
  plugins: [],
}

