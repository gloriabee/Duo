/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7A71EB",
        border: "#EEEEEE",
        card: "#222831",
      },
    },
  },
  plugins: [],
};
