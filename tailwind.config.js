/** @type {import('tailwindcss').Config} */
import formsPlugin from "@tailwindcss/forms"

export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poetsen One", "sans-serif"],
        body: ["Lato", "sans-serif"],
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [formsPlugin],
}
