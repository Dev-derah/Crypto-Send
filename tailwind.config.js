/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.625rem",
        sm: "0.75rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.5rem",
        xl: "3.625rem",
      },
      spacing: {
        "section-padding": "2rem",
        70:"70%"
      },
      colors: {
        primary:{
          DEFAULT:"#CCFB00",
          800:"#708A00"
        },
        secondary: {
          DEFAULT: "#FF7A00",
          50: "#FFF2E6",
          800: "#8C4300",
        },
        success: {
          DEFAULT: "#2CD111",
          50: "#EAFAE7",
          100: "#BEF1B5",
          800: "#187309",
        },
        error: {
          DEFAULT: "#BA1A1A",
          50: "#F8E8E8",
        },
        neutral: {
          DEFAULT: " #F0F0F0",
          3: "#F5F5F5",
          4: "#F0F0F0",
          5: "#D9D9D9",
          6: "#BFBFBF",
          7: "#8C8C8C",
          8: "#595959",
        },
        interactiveGray: "#A8A8A8",
        backgroundGray: "#FAFAFA",
        backgroundElevation: "#CFCFCF",
      },
    },
  },
  plugins: [],
};
