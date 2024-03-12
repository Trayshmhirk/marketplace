/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "576px",
         md: "768px",
         lg: "976px",
         xl: "1240px",
         "2xl": "1440px",
      },
      fontFamily: {
         // sans: ["Graphik", "sans-serif"],
         // serif: ["Merriweather", "serif"],
      },
      extend: {
         colors: {
            darkGunmetal: "#23252B",
            brightGray: "#E6E9F2",
            piggyPink: "#FADFE4",
            lotionWhite: "#FAFAFA",
            auroMetalSaurus: "#617587",
            chineseWhite: "#E1EDD9",
            soap: "#D4D3EB",
            richBlack: "#02071D",
            metallicBlue: "#29627F",
            gray: "#7B7B7B",
         },
      },
   },
   plugins: [],
};
