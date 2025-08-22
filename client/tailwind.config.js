/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#88c0d0",
        secondary: "#81a1c1",
        accent: "#bf616a",
        neutral: "#2e3440",
        surface: "#3b4252",
        base100: "#f0f0f0",
        base200: "#ebebeb",
        base300: "#e2e2e2",
      },
    },
  },
  plugins: [],
};
