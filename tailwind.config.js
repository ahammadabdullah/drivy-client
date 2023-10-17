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
      backgroundImage: {
        banner1:
          "url('https://cdn.discordapp.com/attachments/796439138403352596/1163852545815478414/bg-banner-1.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
