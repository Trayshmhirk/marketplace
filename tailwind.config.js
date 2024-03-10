/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1240px",
      },
      extend: {
         colors: {
            darkGunmetal: "#23252B",
            brightGray: "#E6E9F2",
         },
      },
   },
   plugins: [],
};
