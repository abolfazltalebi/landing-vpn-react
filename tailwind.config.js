/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "4rem",
        },
      },
      colors: {
        primary: "#f48c06",
      },
    },
  },
  plugins: [],
};
