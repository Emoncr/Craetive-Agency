/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      lg: "10px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brandGreen: "#20B15A",
        greenLite: "#D7F5DC",
        bgGreenLite: "#F0FDF4",
        brandOrange: "#F55F1D",
        brandsBG: "#F8FFF9",
        brandSecound: "#2E3E5C",
        bgGray: "#F8F9FC",
      },
      boxShadow: {
        teamShadow: "0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)",
        brandShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.09)",
        statsShadow: "4px 9px 20px 0px rgba(0, 0, 0, 0.07)",
        serviceImageShadow: "1px 4px 30px 0px rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
