/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#20262f",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
