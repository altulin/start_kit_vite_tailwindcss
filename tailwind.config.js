/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      screens: {
        ph: {
          min: "640px",
        },
        tb: {
          min: "768px",
        },
        emt: {
          min: "1024px",
        },
        dt: {
          min: "1280px",
        },
        ldt: {
          min: "1536px",
        },
        max_dt: {
          min: "1920px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
