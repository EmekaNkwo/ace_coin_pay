/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTextColor: "#1e2a53",
        subLightColor: "#8e96a3",
        blueColor: "#035fff",
        activeBlueColor: "#0077B6",
      },
    },
  },
  plugins: [],
};
