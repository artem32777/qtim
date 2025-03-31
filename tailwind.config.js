/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        violet: {
          DEFAULT: "var(--violet)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
