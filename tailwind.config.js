/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#20262f",
      },
      backgroundImage: {
        banner1:
          "url('https://cdn.discordapp.com/attachments/796439138403352596/1163852545815478414/bg-banner-1.jpg')",
        banner2:
          "url('https://cdn.discordapp.com/attachments/796439138403352596/1164177322543423498/izmostock_MainBanner_05.png?ex=6542439f&is=652fce9f&hm=f3e89486672bccfc4b30ef39ecf693da7f1523326a85cdfaed5f86f3ab9a880b&')",
      },
    },
  },
  plugins: [require("daisyui")],
};
